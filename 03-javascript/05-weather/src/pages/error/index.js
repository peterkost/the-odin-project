import html from "./index.html";
import "./style.css";

export default () => {
  const container = document.createElement("div");
  container.id = "error-container";
  container.innerHTML = html;
  return container;
};
