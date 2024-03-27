import "./style.css";
import html from "./index.html";
import state from "../../../helpers/State";

const handleClick = (event) => {
  const projects = Array.from(document.querySelectorAll(".project-container"));
  const clickedProject = event.target.closest(".project-container");
  const index = projects.indexOf(clickedProject);
  state.setProjectIndex(index);
};

const project = (project) => {
  const container = document.createElement("div");
  container.classList = "project-container";
  container.innerHTML = html;

  const icon = container.querySelector(".project-icon");
  icon.innerText = project.icon ? project.icon : "";
  icon.style.backgroundColor = project.color;

  container.querySelector(".project-button").onclick = handleClick;
  container.querySelector(".project-name").innerText = project.name;
  container.getElementsByClassName("project-count").innerText =
    project.getTaskCount();

  return container;
};

export default project;
