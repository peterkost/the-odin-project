// Not leaking my key, yoinked this one >:)
const API_KEY = "04d4d495e39f2311c4acd1148b6e2130";
const RESPONSE_LIMIT = 1;

export default async (location = "Novorossiysk") => {
  const [lat, lon] = await getLocationCoords(location);
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;
  const response = await fetch(url);
  return response.json();
};

async function getLocationCoords(location) {
  const url = `http://api.openweathermap.org/geo/1.0/direct?q=${location}&limit=${RESPONSE_LIMIT}&appid=${API_KEY}`;
  const response = await fetch(url);
  const json = await response.json();
  return [json[0].lat, json[0].lon];
}
