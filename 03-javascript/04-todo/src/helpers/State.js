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
    this.curProjectIndex = 0;
  }

  getTasks() {
    return this.projects[this.curProjectIndex].getTasks();
  }

  addTask(task) {
    this.tasks.push(task);
    domController.renderTasks();
  }

  getProjects() {
    return this.projects;
  }

  addTask(project) {
    this.projects.push(project);
    domController.renderProjects();
  }
}

const state = Object.freeze(new State());
export default state;
