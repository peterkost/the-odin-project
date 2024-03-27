import "./style.css";
import addModal from "../addModal/index.js";
import domController from "../../helpers/DomController.js";

const tasklist = () => {
  const container = document.createElement("div");
  container.id = "taskview-container";

  const modal = addModal();
  container.appendChild(modal);

  const addButton = document.createElement("button");
  addButton.type = "button";
  addButton.innerText = "+";
  addButton.id = "taskview-add";
  addButton.addEventListener("click", () => modal.showModal());
  addButton.addEventListener("click", () =>
    domController.renderProjectListInModal(),
  );

  container.appendChild(addButton);

  const title = document.createElement("h1");
  title.id = "taskview-title";
  title.innerText = "Tasks";
  container.appendChild(title);

  const taskList = document.createElement("div");
  taskList.id = "task-list";
  container.appendChild(taskList);

  return container;
};

export default tasklist;
