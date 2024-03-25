import "./style.css";
import html from "./index.html";

const task = (task) => {
  const container = document.createElement("div");
  container.classList = "task-container";
  container.innerHTML = html;

  container.getElementsByClassName("task-title")[0].innerText = task.title;
  container.getElementsByClassName("task-description")[0].innerText =
    task.description;
  container.getElementsByClassName("task-date")[0].innerText = task.dueDate;

  if (task.priority) {
    container.getElementsByClassName("task-priority")[0].innerText =
      `Priority: ${task.priority}`;
  }

  if (!(task.dueDate && task.priority)) {
    container.getElementsByClassName("task-details-divider")[0].style.display =
      "none";
  }

  return container;
};

export default task;
