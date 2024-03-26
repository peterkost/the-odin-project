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

  hightlightSelectedProject(prevIndex, newIndex) {
    if (prevIndex == newIndex) {
      return;
    }
    const projects = Array.from(
      document.querySelectorAll(".project-container"),
    );
    const allButton = Array.from(
      document.getElementsByClassName("project-panel-all"),
    );
    if (prevIndex > projects.length || newIndex > projects.length) {
      throw new Error("Index is out of bounds.");
    }

    if (prevIndex == -1) {
      allButton.forEach((e) => e.classList.remove("project-selected"));
    } else {
      projects[prevIndex].classList.remove("project-selected");
    }

    if (newIndex == -1) {
      allButton.forEach((e) => e.classList.add("project-selected"));
    } else {
      projects[newIndex].classList.add("project-selected");
    }
  }

  renderOnload() {
    this.renderTasks();
    this.renderProjects();
    this.hightlightSelectedProject(0, -1);
  }
}

const domController = Object.freeze(new DomController());
export default domController;
