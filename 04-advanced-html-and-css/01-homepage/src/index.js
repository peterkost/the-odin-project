function component() {
  const el = document.createElement("div");
  el.innerHTML = "ex.js";
  return el;
}

document.body.appendChild(component());
