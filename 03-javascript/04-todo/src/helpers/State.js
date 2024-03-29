import domController from "./DomController";
import mock from "./Mock";
import Project from "../interfaces/Project";
import Task from "../interfaces/Task";
import { v4 as uuid } from "uuid";
import { getDefaultOptions } from "date-fns";

const LOCAL_STORAGE_KEY = "todo-projects";

let instance;
class State {
  constructor() {
    if (instance) {
      throw new Error("State already exists, you can not initalize multiple!");
    }
    instance = this;
    this.projects = new Map();
    this.selectedProjectId = -1;
    this.editTaskId = "";
  }

  saveState() {
    const projectsJSON = JSON.stringify(Array.from(this.projects.entries()));
    localStorage.setItem(LOCAL_STORAGE_KEY, projectsJSON);
  }

  loadProjects() {
    const storedValue = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (storedValue) {
      const storedProjects = JSON.parse(storedValue);
      const revived = storedProjects.map(([id, project]) => [
        id,
        Project.revive(project),
      ]);
      this.projects = new Map(revived);
    } else {
      const defaultProject = new Project(
        "My Tasks",
        "#4BA626",
        "",
        new Map(),
        uuid(),
      );
      this.projects.set(defaultProject.id, defaultProject);
    }
  }

  getTasks() {
    return this.selectedProjectId == -1
      ? this.getAllProjects().flatMap((p) => p.getTasks())
      : this.getSelectedProject().getTasks();
  }

  getTotalTasks() {
    return this.getAllProjects().reduce((sum, p) => sum + p.getTaskCount(), 0);
  }

  getTasksLength(projectId) {
    return this.getProject(projectId).getTaskCount();
  }

  addTask(task) {
    this.getProject(task.projectId).addTask(task);

    if (
      this.getSelectedProjectId() === -1 ||
      task.projectId === this.getSelectedProjectId()
    ) {
      domController.renderTasks();
    }
    domController.updateTaskCount(
      task.projectId,
      this.getTasksLength(task.projectId),
    );
    this.saveState();
  }

  removeTask(taskId, projectId) {
    this.getProject(projectId).removeTask(taskId);
    domController.renderTasks();
    domController.updateTaskCount(projectId);
    this.saveState();
  }

  setEditTaskId(id) {
    this.editTaskId = id;
  }

  isEditingTask() {
    return this.editTaskId !== "";
  }

  getProject(id) {
    return this.projects.get(id);
  }

  getAllProjects() {
    return this.projects.values();
  }

  getSelectedProject() {
    if (this.selectedProjectId === -1) {
      throw new Error("Called getSelectedProject while All Tasks is Selected");
    }
    return this.projects.get(this.selectedProjectId);
  }

  addProject(project) {
    this.projects.set(project.id, project);
    domController.renderProjects();
    this.saveState();
  }

  setSelectedProjectId(id) {
    const curId = this.selectedProjectId;
    if (id === curId) {
      return;
    }
    this.selectedProjectId = id;
    domController.handleSelectedProjectChange(curId, id);
  }

  getSelectedProjectId() {
    return this.selectedProjectId;
  }
}

const state = new State();
export default state;
