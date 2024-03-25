const task = (title) => {
  const container = document.createElement("div");
  container.innerHTML = title;

  return container;
};

export default task;
