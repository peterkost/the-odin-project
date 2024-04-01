import searchBar from "../../components/searchBar";
import html from "./index.html";
import "./style.css";

export default (data) => {
  const container = document.createElement("div");
  container.id = "weather-page";

  container.innerHTML = html;
  container.prepend(searchBar());

  updateText(container, data);

  return container;
};

function updateText(c, d) {
  const isMetric = d.units === "metric";
  c.querySelector("#weather-icon").src = d.iconURL;
  c.querySelector("#location").textContent =
    `${d.location.city} ${d.location.flag}`;
  c.querySelector("#temperature").textContent =
    `${d.temperature} ${isMetric ? "℃" : "℉"}`;
  c.querySelector("#description").textContent = toTitleCase(d.description);
  c.querySelector("#speed").textContent =
    `${d.wind.speed} ${isMetric ? "M/S" : "MI/H"}`;
  c.querySelector("#gusts").textContent =
    `${d.wind.gusts} ${isMetric ? "M/S" : "MI/H"}`;
  c.querySelector("#direction").textContent = d.wind.direction;
  c.querySelector("#pressure").textContent = d.pressure;
  c.querySelector("#humidity").textContent = `${d.humidity} %`;
}
const toTitleCase = (str) =>
  str.toLowerCase().replace(/(?:^|\s)\w/g, (match) => match.toUpperCase());
