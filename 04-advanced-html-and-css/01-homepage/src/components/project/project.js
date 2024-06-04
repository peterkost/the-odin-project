import "./project.css";
import html from "./project.html";

const createProject = (color) => {
  const project = document.createElement("article");
  project.innerHTML = html;
  project.className = "project-container";
  const image = project.querySelector(".project-image-container");
  console.log(image);
  image.style.backgroundColor = color;

  return project;
};

export { createProject };
