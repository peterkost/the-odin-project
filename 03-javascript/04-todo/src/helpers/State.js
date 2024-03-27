import domController from "./DomController";
import mock from "./Mock";

const useMock = true;

let instance;
class State {
  constructor() {
    if (instance) {
      throw new Error("State already exists, you can not initalize multiple!");
    }
    instance = this;
    this.projects = useMock ? mock.getProjects() : [];
    this.curProjectIndex = -1;
  }

  getTasks() {
    return this.curProjectIndex == -1
      ? this.projects.flatMap((p) => p.getTasks())
      : this.projects[this.curProjectIndex].getTasks();
  }

  getTasksLength(projectIndex) {
    if (projectIndex === -1) {
      return this.projects.flatMap((p) => p.getTasks()).length;
    }
    return this.projects[projectIndex].getTaskCount();
  }

  addTask(task, projectIndex) {
    this.projects[projectIndex].addTask(task);
    if (projectIndex === this.getSelectedProjectIndex()) {
      domController.renderTasks();
    }
    domController.updateTaskCount(
      projectIndex,
      this.getTasksLength(projectIndex),
    );
  }

  getProjects() {
    return this.projects;
  }

  getProjectNames() {
    return this.projects.map((project) => project.name);
  }

  addProject(project) {
    this.projects.push(project);
    domController.renderProjects();
  }

  setProjectIndex(index) {
    domController.hightlightSelectedProject(this.curProjectIndex, index);
    this.curProjectIndex = index;
    domController.renderTasks();
  }

  getSelectedProjectIndex() {
    return this.curProjectIndex;
  }
}

const state = new State();
export default state;
