const latitude = 10.5222;
const longitude = 7.4383;
const apiKey = "2b3f713a857c58b805c48f575ba009e1";
const urlPage = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${apiKey}`;




async function getEvent(){
   try {
     const response = await fetch('data/members.json');
     if (response.ok) {
        const data = await response.json();
        console.log(data);
        displayEvent(data.comingEvents);
        displayBusinessCard(data.members);

     } else throw Error(await response.text());
   }
   catch (error) {
    console.log(error);
   }

}


const sectionOne = document.querySelector('#event');
const displayEvent = (events) => {
let eventHeading = document.createElement('h2');
eventHeading.textContent = 'Events';
sectionOne.appendChild(eventHeading);
events.forEach((comingEvents) => {
const eventCard = document.createElement('div');
let eventTitle = document.createElement('p');
let eventDate= document.createElement('p');
let eventDescription= document.createElement('p');
eventCard.appendChild(eventTitle);
eventCard.appendChild(eventDate);
eventCard.appendChild(eventDescription)

sectionOne.appendChild(eventCard);

//Add textContent
eventTitle.textContent = `Title: ${comingEvents.title}`;
eventDate.textContent = `Date: ${comingEvents.date}`;
eventDescription.textContent = comingEvents.description;

    });
};




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
//Current weather
function displayWeatherData(data) {
const currentWeather = document.createElement('div');
const weather= document.createElement('h2');
const weatherCard = document.createElement('div');
let imageDiv = document.createElement('div');
const weatherDiv = document.createElement('div');
let image= document.createElement('img');
let fahrenheit = document.createElement('p');
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
weatherDiv.appendChild(fahrenheit);
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

// Add textContent to the element
weather.textContent = 'Current Weather';
image.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
fahrenheit.textContent= `Temp: ${data.main.temp}°C`;
cloudy.textContent = `${data.weather[0].description}`
high.textContent= `Max temp: ${data.main.temp_max}°C`;
low.textContent =  `Min temp: ${data.main.temp_min}°C`;
humidity.textContent = `Humidity: ${data.main.pressure}`;
sunrise.textContent = `Sunrise: ${data.sys.sunrise}`;
sunset.textContent = `Sunset: ${data.sys.sunset}`;

}



async function getForecast() {
   
    const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&units=metric&appid=${apiKey}`;

    try {
        const response = await fetch(url);
        if (response.ok) {
        const data = await response.json();
        console.log(data);
        displayWeatherForecast(data); 
        } else throw Error(await response.text())
        
    } catch (error) {
        console.log(error);
    }
}
//Weather forecast
function displayWeatherForecast(data) {

let weatherForecast = document.createElement('div');
let weatherHeading= document.createElement('h2');
let today= document.createElement('p');
let nextDay= document.createElement('p');
let TwoDayAfter= document.createElement('p');

// Add textContent to the weather forecast information

weatherHeading.textContent = 'Weather Forecast';

const dailyData = data.list.filter(item =>
    item.dt_txt.includes("12:00:00")
);
today.textContent = `Today: ${dailyData[0].main.temp}°C,  ${dailyData[0].weather[0].description}`;
nextDay.textContent = `Tomorrow: ${dailyData[1].main.temp}°C,  ${dailyData[1].weather[0].description}`;;
TwoDayAfter.textContent = `Day After: ${dailyData[2].main.temp}°C,  ${dailyData[2].weather[0].description}`;;

// Append the 3 information to the weather forecast div
weatherForecast.appendChild(weatherHeading);
weatherForecast.appendChild(today);
weatherForecast.appendChild(nextDay);
weatherForecast.appendChild(TwoDayAfter);

sectionOne.appendChild(weatherForecast);


   
}




//Business card
function displayBusinessCard(members){
const sectionTwo = document.querySelector('#business-info');
const eligibleMembers = members.filter(member =>
    member.membershipLevel >= 2
);

const shuffled = eligibleMembers.sort(() => Math.random() - 0.5);
const selectedMembers = shuffled.slice(0, 3);

selectedMembers.forEach((cards) => {
        
let name= document.createElement('h2');//append to main div
let tag = document.createElement('p');//append to main div
const businessCard = document.createElement('div');// main div
const subDiv = document.createElement('div');//imagediv

let picture = document.createElement('picture');

let sourceLarge = document.createElement('source');
sourceLarge.setAttribute('srcset', `${cards.imageFile}-large.webp`);
sourceLarge.setAttribute('media', '(min-width: 1000px)');

let sourceMedium = document.createElement('source');
sourceMedium.setAttribute('srcset', `${cards.imageFile}-medium.webp`);
sourceMedium.setAttribute('media', '(min-width: 640px)');

let image = document.createElement('img');
image.setAttribute('src', `${cards.imageFile}-small.webp`);
image.setAttribute('alt', `portrait of ${cards.companyName}`);
image.setAttribute('loading', 'lazy');
image.setAttribute('width', '200');
image.setAttribute('height', '150');       

       

let info = document.createElement('div');// info div
let email = document.createElement('p');//append to info div
let phone = document.createElement('p');//append to info div
let url = document.createElement('p');//append to info div
// Add classList 
businessCard.classList.add('business-name');
info.classList.add('business-information')

//Add textContent
name.textContent = cards.companyName;
tag.textContent = cards.tag;
picture.textContent = cards.imageFile;
email.textContent = cards.email;
url.textContent = cards.website;
//append business cards

info.appendChild(email);
info.appendChild(phone);
info.appendChild(url);
// Append the images to the picture element
picture.appendChild(sourceLarge);
picture.appendChild(sourceMedium);
picture.appendChild(image);
// Append the picture div to the subDiv
subDiv.appendChild(picture);
businessCard.appendChild(subDiv);
businessCard.appendChild(info);

sectionTwo.appendChild(name);
sectionTwo.appendChild(tag);
sectionTwo.appendChild(businessCard);


    });
};

getEvent();// Event call
getWeatherData();// weather call
getForecast()





