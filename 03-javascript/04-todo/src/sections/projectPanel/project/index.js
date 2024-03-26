import "./style.css";
import html from "./index.html";
import state from "../../../helpers/State";

const handleClick = (event) => {
  // Should probably use a table and get row index instead
  const projects = Array.from(document.querySelectorAll(".project-container"));
  const clickedProject = event.target.closest(".project-container");
  const index = projects.indexOf(clickedProject);
  state.setProjectIndex(index);
};

const project = (project) => {
  const container = document.createElement("div");
  container.classList = "project-container";
  container.innerHTML = html;

  Array.from(container.getElementsByClassName("project-button")).forEach(
    (e) => (e.onclick = handleClick),
  );
  Array.from(container.getElementsByClassName("project-icon")).forEach((e) => {
    e.innerText = project.icon ? project.icon : "";
    e.style.backgroundColor = project.color;
  });
  Array.from(container.getElementsByClassName("project-name")).forEach(
    (e) => (e.innerText = project.name),
  );
  Array.from(container.getElementsByClassName("project-count")).forEach(
    (e) => (e.innerText = project.getTaskCount()),
  );

  return container;
};

export default project;
