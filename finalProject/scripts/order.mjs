import './main.mjs';

const pickupDate = document.querySelector("#pickup-date");
const today = new Date().toISOString().split('T')[0];
pickupDate.min = today;

const form = document.querySelector("#order-form");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const fullname = document.querySelector("#fullname").value.trim();
    const phone = document.querySelector("#phone").value.trim();
    const address = document.querySelector("#address").value.trim();
    const notes = document.querySelector("#notes").value.trim();
    const email = document.querySelector("#email").value.trim();
    const quantityOrdered = document.querySelector("#quantity").value.trim();
    const pickupDateValue = pickupDate.value;

    const selectedService = document.querySelector('input[name="service"]:checked');

    // validate fullname
    if (!fullname) {
        alert("Please enter you full name");
        return;
    }

    // validate phone
    if (!phone) {
        alert("Please enter you phone number");
        return;
    }

    // validate pickup date
    if (!pickupDateValue) {
        alert("Please enter a pickup date");
        return;
    }

    // validate address
    if (!address) {
        alert("Please enter your address");
        return;
    }

    // validate service selection
    if (!selectedService) {
        alert("Please select a service.");
        return;
    }

    const order = {
        id: generateOrderId(),
        name: fullname,
        phone: phone,
        email: email,
        service: selectedService.value,
        quantity: quantityOrdered,
        date: pickupDateValue,
        address: address,
        notes: notes,
        stage: 1,
        timestamp: new Date().toISOString()
    };

    localStorage.setItem("freshFold-order", JSON.stringify(order));

    document.querySelector("#dialog-order-id").textContent = order.id;
    document.querySelector("#order-confirm-dialog").showModal();
});

function generateOrderId() {
    const num = Math.floor(Math.random() * 9000) + 1000;
    return `#FF-${num}`;
}
