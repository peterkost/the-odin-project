import json from "../resources/menu.json";

const menu = () => {
  const container = document.createElement("div");
  container.classList = "content-container";

  for (const section in json.menu) {
    const sectionEl = document.createElement("div");
    const sectionTitle = document.createElement("h1");
    sectionEl.appendChild(sectionTitle);
    sectionEl.classList = "menu-section";
    sectionTitle.innerHTML = section;

    for (const item in json.menu[section]) {
      const name = Object.keys(json.menu[section][item])[0];
      const description = json.menu[section][item][name];

      const menuEl = document.createElement("div");
      menuEl.classList = "menu-item";

      const nameEl = document.createElement("h3");
      nameEl.classList = "menu-name";
      nameEl.innerHTML = name;

      const descriptionEl = document.createElement("p");
      descriptionEl.classList = "menu-description";
      descriptionEl.innerHTML = description;

      menuEl.appendChild(nameEl);
      menuEl.appendChild(descriptionEl);
      sectionEl.append(menuEl);
    }
    container.appendChild(sectionEl);
  }
  return container;
};
export default menu;
