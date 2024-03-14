const addDelayedMessage = (container, message) => {
  let count = 0;

  const p = () => {
    const textEl = document.createElement("p");
    textEl.innerHTML = message;
    textEl.className = "about-text";
    container.appendChild(textEl);

    if (count === 100) {
      clearInterval(interval);
    }
    count++;
  };

  const interval = setInterval(p, 100);
};

const about = () => {
  const container = document.createElement("div");
  container.classList = "about-container";

  const textContainer = document.createElement("div");
  textContainer.classList = "about-text-container";
  container.appendChild(textContainer);
  addDelayedMessage(textContainer, "THIS IS NOT REAL");

  return container;
};

export default about;
