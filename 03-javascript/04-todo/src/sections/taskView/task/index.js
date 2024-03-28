import "./style.css";
import html from "./index.html";
import state from "../../../helpers/State";
import domController from "../../../helpers/DomController";

const handleCompleteClick = (event) => {
  const taskContainer = event.target.closest(".task-container");
  const taskId = taskContainer.id;
  const projectId = taskContainer.getAttribute("project-id");

  event.target.style.backgroundColor = "#0a84ff";
  event.target.closest(".task-container").style.filter = "brightness(0.5";
  setTimeout(() => {
    state.removeTask(taskId, projectId);
  }, 500);
};

const handleEditClick = (event) => {
  const taskContainer = event.target.closest(".task-container");
  const taskId = taskContainer.id;
  const projectId = taskContainer.getAttribute("project-id");
  const task = state.getProject(projectId).getTask(taskId);

  state.setEditTaskId(taskId);

  document.getElementById("add-title").value = task.title;
  document.getElementById("add-description").value = task.description;
  document.getElementById("add-date").value = task.getDateString();
  document.getElementById("add-project-form").value = task.projectId;
  document.getElementById("add-priority").value = task.priority;

  document.body.style.overflow = "hidden";

  const modal = document.getElementById("add-modal");
  const clickY = event.target.getBoundingClientRect().top;
  const modalTop = Math.min(clickY, window.innerHeight - 250);
  modal.style.top = `${modalTop}px`;
  domController.updateAddModalOnOpen();
  modal.showModal();
};

const task = (task) => {
  const container = document.createElement("div");
  container.classList = "task-container";
  container.innerHTML = html;
  container.id = task.id;
  container.setAttribute("project-id", task.projectId);

  container.querySelector(".task-complete-button").onclick =
    handleCompleteClick;

  const editButton = container.querySelector(".material-symbols-outlined");
  editButton.style.display = "none";
  container.onmouseover = () => (editButton.style.display = "block");
  container.onmouseout = () => (editButton.style.display = "none");
  editButton.onclick = handleEditClick;

  container.querySelector(".task-title").innerText = task.title;
  container.querySelector(".task-description").innerText = task.description;
  container.querySelector(".task-date").innerText = task.getDateString();

  if (task.priority) {
    container.querySelector(".task-priority").innerText =
      `Priority: ${task.priority}`;
  }

  if (!(task.dueDate && task.priority)) {
    container.querySelector(".task-details-divider").style.display = "none";
  }

  return container;
};

export default task;
