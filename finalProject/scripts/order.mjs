import './main.mjs';

const pickupDate = document.querySelector("#pickup-date");
const today = new Date().toISOString().split('T')[0];
pickupDate.min = today;

const form = document.querySelector("#order-form");

//const today = new Date().toISOString.split('T')[0];  short form
//document.querySelector("#pickup-date").min = today;




form.addEventListener("submit", (e) =>{
    e.preventDefault();

    const fullname = document.querySelector("#fullname").value.trim();
    const phone = document.querySelector("#phone").value.trim();
    const address = document.querySelector("#address").value.trim();
    const notes = document.querySelector("#notes").value.trim();
    const emailMessage = document.querySelector("#email").value.trim();
    const quantityOrdered = document.querySelector("#quantity").value.trim();


    const selectedService = document.querySelector('input[name="service"]:checked');


    //validate fullname
    if (!fullname){
        alert("Please enter you full name");
        return;
    }

     //validate phone
    if (!phone){
        alert("Please enter you phone number");
        return;
    }
     //validate pickup date
    if (!pickupDate){
        alert("Please enter a pickup date");
        return;
    }

     //validate address
    if (!address){
        alert("Please enter your address");
        return;
    }

     //validate service selection
    if (!address){
        alert("Please select a service.");
        return;
    }

    // if all validation pass
    alert("Form is valid");

    const order = {
        id: generateOrderId(),
        name: fullname,
        phoneNumber: phone,
        emailAddress = emailMessage,
        service:selectedService.value,
        quantity: quantityOrdered,
        date: pickupDate,
        address: address,
        note: notes,
        stage: 1,
        timestamp: today

    };
    //Generate random id between 1000 and 9999
    
    localStorage.setItem("freshFold-order", JSON.stringify(order));
    
    document.querySelector("#dialog-order-id").textContent = order.id;
    document.querySelector("#order-confirm-dialog").showModal();   
    
})
function generateOrderId(){
    const num = Math.floor(Math.random() * 9000) + 1000;
    return `#FF-${num}`;
}

