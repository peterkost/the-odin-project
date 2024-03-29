import html from "./index.html";
import Task from "../../interfaces/Task";
import state from "../../helpers/State";
import "./style.css";
const { parse } = require("date-fns");
import { v4 as uuid } from "uuid";

const handleSubmit = (event) => {
  event.preventDefault();

  const form = event.target;
  addTask(form);

  const modal = event.srcElement.parentNode;
  form.reset();
  modal.close();
  document.body.style.overflow = "";
};

const handleCancel = (event) => {
  const form = event.srcElement.parentNode.parentNode;
  const modal = form.parentNode;
  form.reset();
  modal.close();
  document.body.style.overflow = "";
};

function addTask(form) {
  const formData = new FormData(form);
  const values = Object.fromEntries(formData);
  const id = state.editTaskId ? state.editTaskId : uuid();
  const task = new Task(
    values.title,
    values.description,
    values.dueDate
      ? parse(values.dueDate, "yyyy-MM-dd", new Date())
      : undefined,
    values.priority,
    values.projectId,
    id,
  );

  state.addTask(task);
}

const addModal = () => {
  const modal = document.createElement("dialog");
  modal.id = "add-modal";
  modal.innerHTML = html;

  const form = modal.querySelector("form");
  form.addEventListener("submit", handleSubmit);

  const closeButton = modal.getElementsByTagName("button")[0];
  closeButton.onclick = handleCancel;

  return modal;
};

export default addModal;
