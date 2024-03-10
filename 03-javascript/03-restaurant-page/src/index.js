import "./style.css";
import home from "./pages/home";
import menu from "./pages/menu";
import locations from "./pages/locations";
import about from "./pages/about";

const content = document.getElementById("content");

const buttons = Array.from(document.getElementsByTagName("button"));

const handleNavButtonClick = (e) => {
  switch (e.target.id) {
    case "home":
      content.replaceChildren(home());
      break;
    case "menu":
      content.replaceChildren(menu());
      break;
    case "locations":
      content.replaceChildren(locations());
      break;
    case "about":
      content.replaceChildren(about());
      break;
    default:
      console.log("Unknown nav button clicked!");
  }

  buttons.forEach(
    (button) => (button.innerHTML = button.innerHTML.replaceAll('"', "")),
  );
  e.target.innerHTML = `"${e.target.innerHTML}"`;
};

buttons.forEach((button) =>
  button.addEventListener("click", handleNavButtonClick),
);

content.appendChild(menu());
