import { setFooterInfo } from "./shared/footer.mjs";
import { initNav } from "./shared/nav.mjs";
import { places } from "../data/places.mjs";

const cards = document.querySelector("#cardsContainer");

// =====================================================
// 1. LAST VISIT MESSAGE (localStorage)
// =====================================================
function showVisitMessage() {
    const STORAGE_KEY = "lastVisitDate";
    const lastVisit = localStorage.getItem(STORAGE_KEY);
    const now = Date.now();

    // Determine the message based on visit history
    let message;

    if (!lastVisit) {
        // First-ever visit — no record found
        message = "Welcome! Let us know if you have any questions.";
    } else {
        const msPerDay = 1000 * 60 * 60 * 24;
        const daysSince = Math.floor((now - Number(lastVisit)) / msPerDay);

        if (daysSince < 1) {
            // Visited within the last 24 hours
            message = "Back so soon! Awesome!";
        } else {
            // One or more full days have passed
            const dayWord = daysSince === 1 ? "day" : "days";
            message = `You last visited ${daysSince} ${dayWord} ago.`;
        }
    }

    // Always update the stored date to NOW before displaying
    // (so next visit measures from this moment)
    localStorage.setItem(STORAGE_KEY, now);

    // Build and insert the banner
    const banner = document.createElement("div");
    banner.id = "visit-banner";
    banner.setAttribute("role", "status");   
    banner.setAttribute("aria-live", "polite");

    const text = document.createElement("p");
    text.textContent = message;

    const closeBtn = document.createElement("button");
    closeBtn.textContent = "✕";
    closeBtn.setAttribute("aria-label", "Close message");
    closeBtn.addEventListener("click", () => {
        banner.remove();
    });

    banner.appendChild(text);
    banner.appendChild(closeBtn);

    // Insert the banner at the top of <main>, before the cards container
    const main = document.querySelector("main");
    main.insertBefore(banner, main.firstChild);
}

// =====================================================
// 2. PLACE CARDS WITH HOVER EFFECT HOOK
// =====================================================
function displayPlaces(places) {
    places.forEach(place => {
        const card = document.createElement("div");
        card.classList.add("section-card");

        // Name
        const name = document.createElement("h2");
        name.innerText = place.name;

        // Image — wrapped in a div so we can isolate the hover effect
        const imgWrapper = document.createElement("div");
        imgWrapper.classList.add("card-img-wrapper");

        const image = document.createElement("img");
        image.src = `/chamber/images/${place.photo_url}`;
        image.alt = place.name;
        image.loading = "lazy";

        imgWrapper.appendChild(image);

        // Address
        const address = document.createElement("address");
        address.innerText = place.address;

        // Description
        const description = document.createElement("p");
        description.innerText = place.description;

        // Append in DOM order — CSS grid-template-areas controls visual order
        card.appendChild(name);
        card.appendChild(imgWrapper);
        card.appendChild(description);
        card.appendChild(address);

        cards.appendChild(card);
    });
}

// =====================================================
// INIT
// =====================================================
showVisitMessage();
displayPlaces(places);
setFooterInfo();
initNav();
