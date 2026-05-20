const sectionOne = document.querySelector('#event');
// Event card
const eventCard = document.createElement('div');
const event= document.createElement('h2');
const = document.createElement('');
const = document.createElement('');

//Current weather
const currentWeather = document.createElement('div');
const weather= document.createElement('h2');
const weatherCard = document.createElement('div');
const imageDiv = document.createElement('div');
const weatherDiv = document.createElement('div');
const image= document.createElement('img');
const fareihite = document.createElement('p');
const cloudy= document.createElement('p');
const high= document.createElement('p');
const low= document.createElement('p');
const humidity= document.createElement('p');
const sunrise= document.createElement('p');
const sunset= document.createElement('p');

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

weatherCard.appendChild(imageDiv);
weatherCard.appendChild(weatherDiv);

currentWeather.appendChild(weatherCard);// overall weather card

sectionOne.appendChild(currentWeather);




//Weather forecast
const weatherForecast = document.createElement('div');
const weatherHeading= document.createElement('h2');
const today= document.createElement('p');
const nextDay= document.createElement('p');
const TwoDayAfter= document.createElement('p');

// Append the 3 information to the weather forecast div
weatherForecast.appendChild(weatherHeading);
weatherForecast.appendChild(today);
weatherForecast.appendChild(nextDay);
weatherForecast.appendChild(TwoDayAfter);
sectionOne.appendChild(weatherForecast);


//Business card
const sectionTwo = document.querySelector('business-info');
const eventCard = document.createElement('div');
const name= document.createElement('h2');
const tag = document.createElement('p');
const info = document.createElement('div');
const imageDiv2 = document.createElement('p');
const email = document.createElement('p');
const phone = document.createElement('p');
const url = document.createElement('p');
// Add classList 
eventCard.classList.add('business-name');
info.classList.add('business-information')
//append business cards
eventCard.appendChild(name);
eventCard.appendChild(tag);

info.appendChild(imageDiv2);
info.appendChild(email);
info.appendChild(phone);
info.appendChild(url);

sectionTwo.appendChild(eventCard);
sectionTwo.appendChild(info);



