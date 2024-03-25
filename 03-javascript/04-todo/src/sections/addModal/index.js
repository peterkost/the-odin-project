import html from "./index.html";
import Task from "../../interfaces/Task";
import state from "../../helpers/State";

const handleSubmit = (event) => {
  event.preventDefault();

  const task = createTask(event.target);
  state.addTask(task);

  const modal = event.srcElement.parentNode;
  modal.close();
};

function createTask(form) {
  const formData = new FormData(form);
  const values = Object.fromEntries(formData);
  return new Task(
    values.title,
    values.description,
    values.dueDate,
    values.priority,
  );
}

const addModal = () => {
  const modal = document.createElement("dialog");
  modal.id = "add-modal";
  modal.innerHTML = html;

  const form = modal.getElementsByTagName("form")[0];
  form.addEventListener("submit", handleSubmit);

  const closeButton = modal.getElementsByTagName("button")[0];
  closeButton.onclick = () => modal.close();

  return modal;
};

export default addModal;
