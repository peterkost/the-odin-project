import "./main.css";
import html from "./main.html";
import { createProject } from "../project/project";

const PROJECT_COLORS = [
  "#7C75CA",
  "#D88F39",
  "#5E8F4D",
  "#CA7599",
  "#4692D9",
  "#f21f4a",
];

const setMain = () => {
  const main = document.getElementsByTagName("main")[0];
  main.innerHTML = html;

  const projectContainer = document.getElementById("main-projects");

  PROJECT_COLORS.forEach((color) =>
    projectContainer.append(createProject(color)),
  );
};

export { setMain };
