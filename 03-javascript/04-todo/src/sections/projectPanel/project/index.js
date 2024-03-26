import "./style.css";
import html from "./index.html";

const project = (project) => {
  const container = document.createElement("div");
  container.classList = "project-container";
  container.innerHTML = html;

  Array.from(container.getElementsByClassName("project-icon")).forEach(
    (e) => (e.innerText = project.icon),
  );
  Array.from(container.getElementsByClassName("project-name")).forEach(
    (e) => (e.innerText = project.name),
  );
  Array.from(container.getElementsByClassName("project-name")).forEach(
    (e) => (e.innerText = project.getTaskCount()),
  );

  return container;
};

export default project;
