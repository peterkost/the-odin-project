import "./style.css";
import html from "./index.html";
import state from "../../../helpers/State";

const handleCompleteClick = (event) => {
  const taskId = event.target.closest(".task-container").id;
  const projectId = event.target
    .closest(".task-container")
    .getAttribute("project-id");
  state.removeTask(taskId, projectId);
};

const task = (task) => {
  const container = document.createElement("div");
  container.classList = "task-container";
  container.innerHTML = html;
  container.id = task.id;
  container.setAttribute("project-id", task.projectId);

  container.querySelector(".task-complete-button").onclick =
    handleCompleteClick;

  container.querySelector(".task-title").innerText = task.title;
  container.querySelector(".task-description").innerText = task.description;
  container.querySelector(".task-date").innerText = task.dueDate;

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
