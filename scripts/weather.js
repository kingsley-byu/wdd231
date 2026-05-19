const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const caption = document.querySelector('figcaption');

const url = 'https://api.openweathermap.org/data/2.5/weather?lat=49.75&lon=6.63&units=metric&appid=2b3f713a857c58b805c48f575ba009e1';
async function apiFetch(){
    try { 
        const response = await fetch(url);
        if (response.ok) {
        const data = await response.json();
        console.log(data);
        displayResult(data);

        } else {
            throw Error(await response.text());
        }
    }
    catch (error) {
       console.log(error);
    }
    
}
apiFetch();

function displayResult(data) {
    currentTemp.innerHTML = `${data.main.temp}&deg;C`;
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
   let description = data.weather[0].description;
   weatherIcon.setAttribute('src', iconsrc);
   weatherIcon.setAttribute('alt',data.weather[0].description)
   caption.textContent = `${description}`;
}




