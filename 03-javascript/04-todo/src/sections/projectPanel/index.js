import "./style.css";
import html from "./index.html";

const projectPanel = () => {
  const container = document.createElement("div");
  container.id = "project-panel-container";

  container.innerHTML = html;

  Array.from(
    container.getElementsByClassName("project-panel-all-count"),
  ).forEach((e) => (e.innerText = "16"));

  return container;
};

export default projectPanel;
