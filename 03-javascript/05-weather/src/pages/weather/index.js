import html from "./index.html";
import "./style.css";

export default (data) => {
  console.log(data);
  const container = document.createElement("div");
  container.id = "container";
  container.innerHTML = html;
  return container;
};
