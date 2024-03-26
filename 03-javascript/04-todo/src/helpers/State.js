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
    this.tasks = useMock ? mock.getTasks() : [];
    this.projects = useMock ? mock.getProjects() : [];
  }

  getTasks() {
    return this.tasks;
  }

  addTask(task) {
    this.tasks.push(task);
    domController.renderTasks();
  }

  getProjects() {
    return this.projects;
  }
}

const state = Object.freeze(new State());
export default state;
