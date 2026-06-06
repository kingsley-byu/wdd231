import { setFooterInfo } from "./shared/footer.mjs";
import { initNav } from "./shared/nav.mjs";

import { places } from "./places.js";

const cards = document.querySelector("#cardsContainer");

function displayPlaces(places) {
    places.forEach(place => {
        const card = document.createElement("section");
        card.classList.add("card");

        // Name
        const name = document.createElement("h2");
        name.textContent = place.name;

        // Image
        const image = document.createElement("img");
        image.src = place.photo_url;
        image.alt = place.name;
        image.loading = "lazy";

        // Address
        const address = document.createElement("p");
        address.textContent = place.address;
        address.classList.add("address");

        // Description
        const description = document.createElement("p");
        description.textContent = place.description;
        description.classList.add("description");

        // Append elements to card
        card.appendChild(name);
        card.appendChild(image);
        card.appendChild(address);
        card.appendChild(description);

        // Append card to container
        cards.appendChild(card);
    });
}

// Call the function
displayPlaces(places);