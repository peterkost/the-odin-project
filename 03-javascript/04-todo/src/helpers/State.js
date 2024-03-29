import domController from "./DomController";
import mock from "./Mock";
import Project from "../interfaces/Project";

const useMock = true;

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

  loadProjects() {
    // TODO - Add save and load from local storage
    if (useMock) {
      this.projects = mock.getProjects();
    } else {
      const defaultProject = new Project("My Tasks", "#49ad45", "", new Map());
      this.projects = new Map([[defaultProject.id, defaultProject]]);
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
  }

  removeTask(taskId, projectId) {
    this.getProject(projectId).removeTask(taskId);
    domController.renderTasks();
    domController.updateTaskCount(projectId);
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
