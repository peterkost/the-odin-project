import "./style.css";
import addModal from "../addModal/index.js";
import domController from "../../helpers/DomController.js";
import state from "../../helpers/State.js";

const handleAddTaskClick = () => {
  state.setEditTaskId("");
  domController.updateAddModalOnOpen();
  document.getElementById("add-modal").showModal();
};

const tasklist = () => {
  const container = document.createElement("div");
  container.id = "taskview-container";

  const modal = addModal();
  container.appendChild(modal);

  const addButton = document.createElement("button");
  addButton.type = "button";
  addButton.innerText = "+";
  addButton.id = "taskview-add";
  addButton.onclick = handleAddTaskClick;
  container.appendChild(addButton);

  const title = document.createElement("h1");
  title.id = "taskview-title";
  title.innerText = "All Tasks";
  container.appendChild(title);

  const taskList = document.createElement("div");
  taskList.id = "task-list";
  container.appendChild(taskList);

  return container;
};

export default tasklist;
