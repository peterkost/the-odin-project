import html from "./index.html";
import Task from "../../interfaces/Task";
import state from "../../helpers/State";
import "./style.css";
const { parse } = require("date-fns");

const handleSubmit = (event) => {
  event.preventDefault();

  const form = event.target;
  addTask(form);

  const modal = event.srcElement.parentNode;
  form.reset();
  modal.close();
};

const handleCancel = (event) => {
  const form = event.srcElement.parentNode.parentNode;
  const modal = form.parentNode;
  form.reset();
  modal.close();
};

function addTask(form) {
  const formData = new FormData(form);
  const values = Object.fromEntries(formData);
  console.log(values.dueDate, new Date(values.dueDate));
  const task = new Task(
    values.title,
    values.description,
    parse(values.dueDate, "yyyy-MM-dd", new Date()),
    values.priority,
    values.projectId,
    state.isEditingTask() ? state.editTaskId : "",
  );

  state.addTask(task);
}

const addModal = () => {
  const modal = document.createElement("dialog");
  modal.id = "add-modal";
  modal.innerHTML = html;
  modal.addEventListener("show", () => console.log("showing"));

  const form = modal.querySelector("form");
  form.addEventListener("submit", handleSubmit);

  const closeButton = modal.getElementsByTagName("button")[0];
  closeButton.onclick = handleCancel;

  return modal;
};

export default addModal;
