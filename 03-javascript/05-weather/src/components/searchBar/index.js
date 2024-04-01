import { changeLocation } from "../..";
import "./style.css";
import html from "./index.html";

export default () => {
  const container = document.createElement("div");
  container.id = "search-container";
  container.innerHTML = html;

  container.querySelector("#search-bar").onkeydown = handleKeyPress;

  return container;
};

function handleKeyPress(e) {
  if (e.key === "Enter") {
    const units = document.getElementById("use-imperial").checked
      ? "imperial"
      : "metric";
    changeLocation(e.target.value, units);
  }
}
