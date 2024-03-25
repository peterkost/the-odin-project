import taskList from "./sections/tasklist/index.js";

function root() {
  const container = document.createElement("div");

  container.appendChild(taskList());
  const testButton = document.createElement("button");
  testButton.innerText = "test";
  testButton.id = "test-button";
  container.append(testButton);

  return container;
}

document.body.appendChild(root());
