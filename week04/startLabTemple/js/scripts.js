import { temples } from "../data/temples.js";

//console.log(temples);

import { url } from "../data/temples.js";

//console.log(url);

const myDialog = document.querySelector("#mydialog");
const showHere = document.querySelector("#showHere");
const button = document.querySelector("#mydialog button");
const myTitle = document.querySelector("#mydialog h2");
const  myInfo = document.querySelector("#mydialog p");

button.addEventListener("click", () => myDialog.close())

function displayItems(data) {
   console.log(data)
   data.forEach(x => {
    console.log(x)
    const photo = document.createElement("img");
    photo.src = `${url}${x.path}`;
    photo.alt = x.name;
    photo.addEventListener("click",() => showStuff(x));
    showHere.appendChild(photo);
   })
}
displayItems(temples)

function showStuff(x) {
   myTitle.innerHTML = x.name
   myInfo.innerHTML = `Dedicated ${x.dedicated} by ${x.person} as temple number ${x.number}`;
   myDialog.showModal();
}


