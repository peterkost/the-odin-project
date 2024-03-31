import GetWeather from "./utils/GetWeather";
function component() {
  const el = document.createElement("div");
  el.innerHTML = "src/index.js";
  return el;
}

document.body.appendChild(component());

const weather = await GetWeather();
console.log(weather);
