import { setFooterInfo } from "./shared/footer.mjs";
import { initNav } from "./shared/nav.mjs";


import { places } from "../data/places.mjs";

const cards = document.querySelector("#cardsContainer");

function displayPlaces(places) {
    places.forEach(place => {
        const card = document.createElement("div");
        card.classList.add("section-card");
        // Name
        const name = document.createElement("h2");
        name.innerText = place.name;

        // Image
        const image = document.createElement("img");
        image.src = `/chamber/images/${place.photo_url}`;
        image.alt = place.name;
        image.loading = "lazy";

        // Address
        const address = document.createElement("address");
        address.innerText = place.address;
        

        // Description
        const description = document.createElement("p");
        description.innerText = place.description;

        // Append elements to card
        card.appendChild(image);
        card.appendChild(name);
        card.appendChild(address);
        card.appendChild(description);

        // Append card to container
        cards.appendChild(card);
    });
}

// Call the function
displayPlaces(places);
setFooterInfo();
initNav();