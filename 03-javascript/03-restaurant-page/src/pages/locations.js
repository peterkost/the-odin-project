import json from "../resources/locations.json";
import london from "../resources/london.jpg";
import nyc from "../resources/new-york.jpg";

const locations = () => {
  const container = document.createElement("div");
  container.classList = "location-container";

  for (const i in json) {
    const locationContainer = document.createElement("p");

    const photoEl = document.createElement("img");
    photoEl.src = json[i].city === "London" ? london : nyc;
    photoEl.className = "location-photo";
    locationContainer.appendChild(photoEl);

    const cityEl = document.createElement("p");
    cityEl.innerHTML = json[i].city;
    cityEl.className = "location-city";
    locationContainer.appendChild(cityEl);

    const addressEl = document.createElement("p");
    addressEl.innerHTML = json[i].address;
    addressEl.className = "location-address";
    locationContainer.appendChild(addressEl);

    const contactEl = document.createElement("p");
    contactEl.innerHTML = json[i].contact;
    contactEl.className = "location-contact";
    locationContainer.appendChild(contactEl);

    const hoursEl = document.createElement("p");
    hoursEl.innerHTML = json[i].hours;
    locationContainer.appendChild(hoursEl);

    container.appendChild(locationContainer);
  }

  return container;
};

export default locations;
