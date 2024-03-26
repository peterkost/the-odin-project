import "./style.css";
import html from "./index.html";
import projectModal from "../projectModal/index.js";

const projectPanel = () => {
  const container = document.createElement("div");
  container.id = "project-panel-container";
  container.innerHTML = html;

  const modal = projectModal();
  container.appendChild(modal);

  Array.from(
    container.getElementsByClassName("project-panel-all-count"),
  ).forEach((e) => (e.innerText = "16"));

  Array.from(container.getElementsByClassName("project-panel-add")).forEach(
    (e) => (e.onclick = () => modal.showModal()),
  );

  return container;
};

export default projectPanel;
