import "./style.css";
import taskList from "./sections/taskView/index.js";
import domController from "./helpers/DomController.js";

function root() {
  const container = document.createElement("div");

  container.appendChild(taskList());

  return container;
}

document.body.appendChild(root());

window.onload = () => {
  document.getElementById("add-modal").showModal();
  domController.renderTasks();
};
