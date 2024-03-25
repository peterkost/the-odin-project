import taskList from "./sections/tasklist/index.js";

function root() {
  const container = document.createElement("div");

  container.appendChild(taskList());

  return container;
}

document.body.appendChild(root());
