import "./style.css";
import html from "./index.html";
import projectModal from "../projectModal/index.js";
import state from "../../helpers/State.js";

const handleClick = () => {
  state.setProjectIndex(-1);
};

const projectPanel = () => {
  const container = document.createElement("div");
  container.id = "project-panel-container";
  container.innerHTML = html;

  const modal = projectModal();
  container.appendChild(modal);

  container.querySelector(".project-panel-all").onclick = handleClick;
  container.querySelector(".project-panel-all-count").innerText =
    state.getTasksLength(-1);
  container.querySelector(".project-panel-add").onclick = () =>
    modal.showModal();

  return container;
};

export default projectPanel;
