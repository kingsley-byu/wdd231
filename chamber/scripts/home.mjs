const latitude = 10.5222;
const longitude = 7.4383;

const urlPage = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=2b3f713a857c58b805c48f575ba009e1`;


async function getWeatherData() {
  try {
    const response = await fetch(urlPage);
    if (response.ok){
        const data = await response.json();
        console.log(data);
        displayWeatherData(data);
        
    } else throw Error(await response.text());
    }
    catch (error) {
        console.log(error);
    };
    
}

async function getEvent(){
   try {
     const response = await fetch('data/members.json');
     if (response.ok) {
        const data = await response.json();
        console.log(data);
        displayEvent(data);

     } else throw Error(await response.text());
   }
   catch (error) {
    console.log(error);
   }

}
getEvent();// Event call
getWeatherData();// weather call
const sectionOne = document.querySelector('#event');
const displayEvent = (events) => {
events.forEach((comingEvents) => {
const eventCard = document.createElement('div');
let event= document.createElement('h2');
let eventTitle = document.createElement('p');
let eventDate= document.createElement('p');
let eventDescription= document.createElement('p');
eventCard.appendChild(event);
eventCard.appendChild(eventTitle);
eventCard.appendChild(eventDate);
eventCard.appendChild(eventDescription)

sectionOne.appendChild(eventCard);

//Add textContent
event.textContent = 'Events';
eventTitle.textContent = `Title: ${comingEvents.title}`;
eventDate.textContent = `Date: ${comingEvents.eventDate}`;
eventDescription.textContent = comingEvents.description;

    });
};
    // Event card




//Current weather
function displayWeatherData() {
const currentWeather = document.createElement('div');
const weather= document.createElement('h2');
const weatherCard = document.createElement('div');
let imageDiv = document.createElement('div');
const weatherDiv = document.createElement('div');
let image= document.createElement('img');
let fareihite = document.createElement('p');
let cloudy= document.createElement('p');
let high= document.createElement('p');
let low= document.createElement('p');
let humidity= document.createElement('p');
let sunrise= document.createElement('p');
let sunset= document.createElement('p');

//Add classList to the  weather divs
weatherCard.classList.add('weather-cards');
weatherDiv.classList.add('weather-info');// this is the div containing the info such as  high, low, humidity etc

//Append the weather info to the sub-div (high, low, humidity)
weatherDiv.appendChild(fareihite);
weatherDiv.appendChild(cloudy);
weatherDiv.appendChild(high);
weatherDiv.appendChild(low);
weatherDiv.appendChild(humidity);
weatherDiv.appendChild(sunrise);
weatherDiv.appendChild(sunset);
imageDiv.appendChild(image);

weatherCard.appendChild(imageDiv);
weatherCard.appendChild(weatherDiv);

currentWeather.appendChild(weather);
currentWeather.appendChild(weatherCard);// overall weather card

sectionOne.appendChild(currentWeather);




//Weather forecast
let weatherForecast = document.createElement('div');
let weatherHeading= document.createElement('h2');
let today= document.createElement('p');
let nextDay= document.createElement('p');
let TwoDayAfter= document.createElement('p');

// Append the 3 information to the weather forecast div
weatherForecast.appendChild(weatherHeading);
weatherForecast.appendChild(today);
weatherForecast.appendChild(nextDay);
weatherForecast.appendChild(TwoDayAfter);
sectionOne.appendChild(weatherForecast);
}







//Business card

const sectionTwo = document.querySelector('#business-info');
let eventCard = document.createElement('div');// main div
let name= document.createElement('h2');//append to main div
let tag = document.createElement('p');//append to main div
const subDiv = document.createElement('div');//imagediv
let image = document.createElement('p');//append to image div
let info = document.createElement('div');// info div
let email = document.createElement('p');//append to info div
let phone = document.createElement('p');//append to info div
let url = document.createElement('p');//append to info div
// Add classList 
eventCard.classList.add('business-name');
info.classList.add('business-information')
//append business cards
subDiv.appendChild(image);
info.appendChild()







