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
    return this.curProjectIndex == -1
      ? this.projects.flatMap((p) => p.getTasks())
      : this.projects[this.curProjectIndex].getTasks();
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

  setProjectIndex(index) {
    domController.hightlightSelectedProject(this.curProjectIndex, index);
    this.curProjectIndex = index;
    domController.renderTasks();
  }
}

const state = new State();
export default state;
