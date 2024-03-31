import "./style.css";
import getWeather from "./utils/GetWeather";
import error from "./pages/error";
import weather from "./pages/weather";

getWeather().then(displayWeather).catch(displayError);

function displayWeather(data) {
  document.body.innerHTML = "";
  document.body.appendChild(weather(data));
}

function displayError() {
  document.body.innerHTML = "";
  document.body.appendChild(error());
}
