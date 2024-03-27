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

  renderProjectListInModal() {
    const optionEls = state.getProjectNames().map((name, i) => {
      const option = document.createElement("option");
      option.value = i;
      option.innerText = name;
      if (i == state.getSelectedProjectIndex()) {
        console.log("selected");
        option.selected = true;
      }
      return option;
    });

    const selectEl = document.getElementById("add-project-form");
    selectEl.innerHTML = "";
    optionEls.forEach((el) => selectEl.appendChild(el));
  }

  renderOnload() {
    this.renderTasks();
    this.renderProjects();
    this.hightlightSelectedProject(0, -1);
  }
}

const domController = Object.freeze(new DomController());
export default domController;
