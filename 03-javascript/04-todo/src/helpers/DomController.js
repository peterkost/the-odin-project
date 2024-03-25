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
}

const domController = Object.freeze(new DomController());
export default domController;
