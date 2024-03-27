import html from "./index.html";
import Task from "../../interfaces/Task";
import state from "../../helpers/State";
import "./style.css";

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
  const task = new Task(
    values.title,
    values.description,
    values.dueDate,
    values.priority,
  );

  state.addTask(task, Number(values.projectIndex));
}

const addModal = () => {
  const modal = document.createElement("dialog");
  modal.id = "add-modal";
  modal.innerHTML = html;

  const form = modal.getElementsByTagName("form")[0];
  form.addEventListener("submit", handleSubmit);

  Array.from(modal.getElementsByClassName("add-project-form")).forEach((e) => {
    getProjectOptions().forEach((option) => e.appendChild(option));
  });

  const closeButton = modal.getElementsByTagName("button")[0];
  closeButton.onclick = handleCancel;

  return modal;
};

export default addModal;
