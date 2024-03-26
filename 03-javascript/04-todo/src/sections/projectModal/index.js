import html from "./index.html";
import Project from "../../interfaces/Project";
import state from "../../helpers/State";
import "./style.css";

const handleSubmit = (event) => {
  event.preventDefault();

  const form = event.target;
  const task = createProject(form);
  state.addTask(task);

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

function createProject(form) {
  const formData = new FormData(form);
  const values = Object.fromEntries(formData);
  return new Project(values.name, values.color, "", []);
}

const projectModal = () => {
  const modal = document.createElement("dialog");
  modal.id = "project-modal";
  modal.innerHTML = html;

  const form = modal.getElementsByTagName("form")[0];
  form.addEventListener("submit", handleSubmit);

  const closeButton = modal.getElementsByTagName("button")[0];
  closeButton.onclick = handleCancel;

  return modal;
};

export default projectModal;
