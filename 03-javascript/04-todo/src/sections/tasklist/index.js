import "./style.css";
import addModal from "../addModal/index.js";

const tasklist = () => {
  const container = document.createElement("div");
  container.id = "container";

  const modal = addModal();
  container.appendChild(modal);

  const addButton = document.createElement("button");
  addButton.type = "button";
  addButton.innerText = "New Task";
  addButton.id = "add-button";
  addButton.addEventListener("click", () => modal.showModal());
  container.appendChild(addButton);

  const taskList = document.createElement("div");
  taskList.id = "task-list";
  container.appendChild(taskList);

  return container;
};

export default tasklist;
