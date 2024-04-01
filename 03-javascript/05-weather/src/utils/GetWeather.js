import { mockWeather } from "./Mock";
import countryCodeEmoji from "country-code-emoji";

const USE_MOCK = false;
const API_KEY = "04d4d495e39f2311c4acd1148b6e2130"; // Not leaking my key, yoinked this one >:)
const RESPONSE_LIMIT = 1;

export default async (location = "Novorossiysk", units = "metric") =>
  USE_MOCK
    ? mockWeather
    : getCoords(location)
        .then((coords) => getWeatherJson(...coords, units))
        .then((json) => processWeatherJson(json, units));

async function getCoords(location) {
  const url = `http://api.openweathermap.org/geo/1.0/direct?q=${location}&limit=${RESPONSE_LIMIT}&appid=${API_KEY}`;
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Error getting city coords");
  }
  const json = await response.json();
  return [json[0].lat, json[0].lon];
}

async function getWeatherJson(lat, lon, units) {
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=${units}&appid=${API_KEY}`;
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Error getting weather");
  }
  return response.json();
}

function processWeatherJson(j, units) {
  return {
    location: {
      city: j.name,
      flag: countryCodeEmoji(j.sys.country),
    },
    units,
    condition: j.weather[0].main,
    description: j.weather[0].description,
    iconURL: `https://openweathermap.org/img/wn/${j.weather[0].icon}@2x.png`,
    temperature: j.main.temp,
    pressure: j.main.pressure,
    humidity: j.main.humidity,
    wind: {
      speed: j.wind.speed,
      gusts: j.wind.gust,
      direction: convertDegreesToDirection(j.wind.deg),
    },
  };
}

function convertDegreesToDirection(degrees) {
  const directions = ["N", "NE", "E", "SE", "S", "SW", "W", "NW"];
  const index = Math.round(degrees / 45) % 8;
  return directions[index];
}
