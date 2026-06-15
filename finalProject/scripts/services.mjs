import "./main.mjs";
async function loadServices() {
    const grid = document.querySelector("#services-grid");

    try {
        const response = await fetch("./scripts/data/services.json");
        if (!response.ok) {
            throw Error(await response.text());
        }
        const data = await response.json();
        data.forEach(service => {
            const card = document.createElement("div");
            card.classList.add("service-card");

            card.innerHTML = `
                <span class="service-icon">${service.icon}</span>
                <h3>${service.name}</h3>
                <p>${service.description}</p>
                <span class="service-price">${service.price}</span>
            `;

            grid.appendChild(card);
        });

    } catch (error) {
        grid.innerHTML = `<p class="error-message">Sorry, services could not be loaded. Please try again later.</p>`;
        console.error(error);
    }
}

loadServices();
