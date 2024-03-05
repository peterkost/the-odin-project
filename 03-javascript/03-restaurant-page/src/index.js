function component() {
  const el = document.createElement("div");
  el.innerHTML = "Hi -src/index.js";
  return el;
}

document.body.appendChild(component());
