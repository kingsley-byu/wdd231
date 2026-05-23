import { initNav } from './shared/nav.mjs';
import { setFooterInfo } from './shared/footer.mjs';

const latitude = 10.5222;
const longitude = 7.4383;
const apiKey = "2b3f713a857c58b805c48f575ba009e1";

// Convert Unix timestamp to readable time
function formatTime(unix) {
    return new Date(unix * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
}

// ===== EVENTS =====
async function getEvent() {
    try {
        const response = await fetch('data/members.json');
        if (!response.ok) throw Error(await response.text());
        const data = await response.json();
        displayEvent(data.comingEvents);
        displayBusinessCard(data.members);
    } catch (error) {
        console.log(error);
    }
}

function displayEvent(events) {
    const eventList = document.querySelector('#event-list');
    events.forEach((ev) => {
        const eventCard = document.createElement('div');
        eventCard.classList.add('event-card');

        let title = document.createElement('p');
        let date = document.createElement('p');
        let desc = document.createElement('p');

        title.classList.add('event-title');
        date.classList.add('event-date');

        title.textContent = ev.title;
        date.textContent = ev.date;
        desc.textContent = ev.description;

        eventCard.appendChild(title);
        eventCard.appendChild(date);
        eventCard.appendChild(desc);
        eventList.appendChild(eventCard);
    });
}

// ===== CURRENT WEATHER =====
async function getWeatherData() {
    try {
        const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${apiKey}`;
        const response = await fetch(url);
        if (!response.ok) throw Error(await response.text());
        const data = await response.json();
        displayWeatherData(data);
    } catch (error) {
        console.log(error);
    }
}

function displayWeatherData(data) {
    const container = document.querySelector('#weather-content');

    const topRow = document.createElement('div');
    topRow.classList.add('weather-top');

    const image = document.createElement('img');
    image.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    image.alt = data.weather[0].description;

    const temp = document.createElement('p');
    temp.classList.add('weather-temp');
    temp.textContent = `${data.main.temp}°C`;

    topRow.appendChild(image);
    topRow.appendChild(temp);

    const details = document.createElement('div');
    details.classList.add('weather-details');

    const fields = [
        `${data.weather[0].description}`,
        `High: ${data.main.temp_max}°C`,
        `Low: ${data.main.temp_min}°C`,
        `Humidity: ${data.main.humidity}%`,
        `Sunrise: ${formatTime(data.sys.sunrise)}`,
        `Sunset: ${formatTime(data.sys.sunset)}`
    ];

    fields.forEach(text => {
        const p = document.createElement('p');
        p.textContent = text;
        details.appendChild(p);
    });

    container.appendChild(topRow);
    container.appendChild(details);
}

// ===== FORECAST =====
async function getForecast() {
    try {
        const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&units=metric&appid=${apiKey}`;
        const response = await fetch(url);
        if (!response.ok) throw Error(await response.text());
        const data = await response.json();
        displayWeatherForecast(data);
    } catch (error) {
        console.log(error);
    }
}

function displayWeatherForecast(data) {
    const container = document.querySelector('#forecast-content');
    const dailyData = data.list.filter(item => item.dt_txt.includes("12:00:00"));

    const labels = ['Today', 'Tomorrow', 'Day After'];
    dailyData.slice(0, 3).forEach((day, i) => {
        const row = document.createElement('p');
        row.classList.add('forecast-row');
        row.innerHTML = `<span>${labels[i]}:</span> <strong>${day.main.temp}°C</strong> — ${day.weather[0].description}`;
        container.appendChild(row);
    });
}

// ===== BUSINESS SPOTLIGHTS =====
function displayBusinessCard(members) {
    const sectionTwo = document.querySelector('#business-info');

    const eligible = members.filter(m => m.membershipLevel >= 2);
    const selected = eligible.sort(() => Math.random() - 0.5).slice(0, 3);

    selected.forEach((cards) => {
        const businessCard = document.createElement('div');
        businessCard.classList.add('business-card');

        let name = document.createElement('h3');
        let tag = document.createElement('p');

        name.classList.add('business-name');
        tag.classList.add('business-tag');

        name.textContent = cards.companyName;
        tag.textContent = cards.tag;

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
        image.setAttribute('width', '80');
        image.setAttribute('height', '80');

        picture.appendChild(sourceLarge);
        picture.appendChild(sourceMedium);
        picture.appendChild(image);

        const info = document.createElement('div');
        info.classList.add('business-info-block');

        const cardBody = document.createElement('div');
        cardBody.classList.add('business-body');

        let email = document.createElement('p');
        let phone = document.createElement('p');
        let url = document.createElement('p');

        email.innerHTML = `<span>EMAIL:</span> ${cards.email}`;
        phone.innerHTML = `<span>PHONE:</span> ${cards.phoneNumber}`;
        url.innerHTML = `<span>URL:</span> <a href="${cards.website}" target="_blank">${cards.website}</a>`;

        info.appendChild(email);
        info.appendChild(phone);
        info.appendChild(url);

        cardBody.appendChild(picture);
        cardBody.appendChild(info);

        businessCard.appendChild(name);
        businessCard.appendChild(tag);
        businessCard.appendChild(cardBody);

        sectionTwo.appendChild(businessCard);
    });
}

// ===== INIT =====
initNav();
setFooterInfo();
getEvent();
getWeatherData();
getForecast();