import "./style.css";
import html from "./index.html";

const projectPanel = () => {
  const container = document.createElement("div");
  container.id = "project-panel-container";

  container.innerHTML = html;

  return container;
};

export default projectPanel;
