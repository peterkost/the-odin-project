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

  Array.from(container.getElementsByClassName("project-panel-all")).forEach(
    (e) => (e.onclick = handleClick),
  );

  Array.from(
    container.getElementsByClassName("project-panel-all-count"),
  ).forEach((e) => (e.innerText = state.getTasksLength(-1)));

  Array.from(container.getElementsByClassName("project-panel-add")).forEach(
    (e) => (e.onclick = () => modal.showModal()),
  );

  return container;
};

export default projectPanel;
