import "./style.css";
import getWeather from "./utils/GetWeather";
import error from "./pages/error";
import weather from "./pages/weather";

const content = document.getElementById("content");
const spinner = document.getElementById("lds-spinner");

changeLocation("Novorossiysk", "metric");

export function changeLocation(location, units) {
  spinner.style.display = "flex";
  getWeather(location, units)
    .then(displayWeather)
    .catch(displayError)
    .finally((spinner.style.display = "none"));
}

function displayWeather(data) {
  content.innerHTML = "";
  content.appendChild(weather(data));
}

function displayError(e) {
  console.error(e);
  content.innerHTML = "";
  content.appendChild(error());
}
