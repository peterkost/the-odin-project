import "./style.css";
import getWeather from "./utils/GetWeather";
import error from "./pages/error";
import weather from "./pages/weather";

changeLocation("Novorossiysk", "metric");

export function changeLocation(location, units) {
  getWeather(location, units).then(displayWeather).catch(displayError);
}

function displayWeather(data) {
  document.body.innerHTML = "";
  document.body.appendChild(weather(data));
}

function displayError(e) {
  console.error(e);
  document.body.innerHTML = "";
  document.body.appendChild(error());
}
