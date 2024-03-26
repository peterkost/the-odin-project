import state from "./State";

let instance;
class DomController {
  constructor() {
    if (instance) {
      throw new Error("State already exists, you can not initalize multiple!");
    }
    instance = this;
  }

  renderTasks() {
    const taskList = document.getElementById("task-list");
    taskList.innerHTML = "";
    state.getTasks().forEach((task) => taskList.appendChild(task.getEl()));
  }

  renderProjects() {
    const projectList = document.getElementById("project-panel-list");
    projectList.innerHTML = "";
    state
      .getProjects()
      .forEach((project) => projectList.appendChild(project.getEl()));
  }

  renderOnload() {
    this.renderTasks();
    this.renderProjects();
  }
}

const domController = Object.freeze(new DomController());
export default domController;
