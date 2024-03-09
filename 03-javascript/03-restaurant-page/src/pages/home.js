function home() {
  const container = document.createElement("div");
  container.id = "home-container";

  const title = document.createElement("div");
  title.id = "home-title";
  title.innerHTML = "Stolovaya";
  container.appendChild(title);

  const subtitle = document.createElement("div");
  subtitle.id = "home-subtitle";
  subtitle.innerHTML = "Kostin";
  container.appendChild(subtitle);

  return container;
}

export default home;
