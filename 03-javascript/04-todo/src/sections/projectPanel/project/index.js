import "./style.css";
import html from "./index.html";
import state from "../../../helpers/State";

const handleClick = (event) => {
  const id = event.target.closest(".project-container").id;
  state.setSelectedProjectId(id);
};

const project = (project) => {
  const container = document.createElement("div");
  container.classList = "project-container";
  container.innerHTML = html;
  container.id = project.id;

  const icon = container.querySelector(".project-icon");
  icon.innerText = project.icon ? project.icon : "";
  icon.style.backgroundColor = project.color;

  container.querySelector(".project-button").onclick = handleClick;
  container.querySelector(".project-name").innerText = project.name;
  container.querySelector(".project-count").innerText = project.getTaskCount();

  return container;
};

export default project;
