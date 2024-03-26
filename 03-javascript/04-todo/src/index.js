import "./style.css";
import taskList from "./sections/taskView/index.js";
import domController from "./helpers/DomController.js";
import projectPanel from "./sections/projectPanel/index.js";

function root() {
  const container = document.createElement("div");
  container.id = "todo-container";

  container.append(projectPanel());
  container.appendChild(taskList());

  return container;
}

document.body.appendChild(root());

window.onload = () => {
  domController.renderOnload();
  //document.getElementById("add-modal").showModal();
  //document.getElementById("project-modal").showModal();
};
