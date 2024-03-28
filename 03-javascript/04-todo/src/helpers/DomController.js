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

  updateTaskCount(projectId) {
    document
      .getElementById(projectId)
      .querySelector(".project-count").innerHTML =
      state.getTasksLength(projectId);
    this.updateTotalTaskCount();
  }

  updateTotalTaskCount() {
    document.getElementById("project-panel-all-count").innerText =
      state.getTotalTasks();
  }

  renderProjects() {
    const projectList = document.getElementById("project-panel-list");
    projectList.innerHTML = "";
    state
      .getAllProjects()
      .forEach((project) => projectList.appendChild(project.getEl()));
  }

  handleSelectedProjectChange(prevId, newId) {
    const taskViewTitle = document.getElementById("taskview-title");
    const newProject = state.getProject(newId);
    taskViewTitle.innerText = newId === -1 ? "All Tasks" : newProject.name;
    taskViewTitle.style.color = newId === -1 ? "#0a84ff" : newProject.color;

    this.hightlightSelectedProject(prevId, newId);
    this.renderTasks();
  }

  hightlightSelectedProject(prevId, newId) {
    document.getElementById(prevId)?.classList.remove("project-selected");
    document.getElementById(newId)?.classList.add("project-selected");
  }

  updateAddModalOnOpen() {
    document.body.style.overflow = "hidden";

    const addButton = document.getElementById("add-button");
    if (state.isEditingTask()) {
      addButton.innerText = "Save";
    } else {
      addButton.innerText = "Add";
      document.getElementById("add-modal").style.top = "0px";
    }

    const optionEls = state.getAllProjects().map((project) => {
      const option = document.createElement("option");
      option.value = project.id;
      option.innerText = project.name;
      if (project.id == state.getSelectedProjectId()) {
        option.selected = true;
      }
      return option;
    });

    const selectEl = document.getElementById("add-project-form");
    selectEl.innerHTML = "";
    optionEls.forEach((el) => selectEl.appendChild(el));
  }

  renderOnload() {
    this.updateTotalTaskCount();
    this.renderTasks();
    this.renderProjects();
    this.hightlightSelectedProject(0, -1);
  }
}

const domController = Object.freeze(new DomController());
export default domController;
