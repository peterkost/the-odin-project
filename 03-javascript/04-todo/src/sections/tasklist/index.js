import "./style.css";
import html from "./index.html";
import task from "./task/index";
import Task from "../../interfaces/Task";
import addModal from "../addModal/index.js";

const tasklist = () => {
  const container = document.createElement("div");
  container.id = "container";
  //container.innerHTML = html;

  const modal = addModal();
  container.appendChild(modal);

  const addButton = document.createElement("button");
  addButton.type = "button";
  addButton.innerText = "New Task";
  addButton.id = "add-button";
  addButton.addEventListener("click", () => modal.showModal());

  container.appendChild(addButton);
  return container;
};

export default tasklist;
