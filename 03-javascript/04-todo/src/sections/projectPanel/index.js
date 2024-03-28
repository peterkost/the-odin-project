import "./style.css";
import html from "./index.html";
import projectModal from "../projectModal/index.js";
import state from "../../helpers/State.js";

const handleAddButtonClick = () => {
  document.body.style.overflow = "hidden";
  document.getElementById("project-modal").showModal();
};

const projectPanel = () => {
  const container = document.createElement("div");
  container.id = "project-panel-container";
  container.innerHTML = html;

  const modal = projectModal();
  container.appendChild(modal);

  container.querySelector(".project-panel-all").onclick = () =>
    state.setSelectedProjectId(-1);
  container.querySelector(".project-panel-add").onclick = handleAddButtonClick;

  return container;
};

export default projectPanel;
