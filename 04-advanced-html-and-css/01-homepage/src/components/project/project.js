import "./project.css";
import html from "./project.html";

const createProject = () => {
  const container = document.getElementsByTagName("main")[0];
  const project = document.createElement("article");
  project.innerHTML = html;
  project.className = "project-container";
  container.append(project);
};

export { createProject };
