'use strict';

function getWeather() {
    let city = document.getElementById('city').value;
    let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=5d066958a60d315387d9492393935c19`;

    fetch(url)
    .then(response => {
        if(!response.ok){
            return Promise.reject('На жаль, але інформації по даному місту не існує. Введіть інше, будь ласка.');
        }
        return response.json();
    })
    .then(data => {
        displayWeather(data);
    })
    .catch(error => {
        alert(error)
    });
}

function displayWeather(data) {
    let infoAboutWeather = document.getElementById('infoAboutWeather');

    let temperature = data.main.temp;
    let pressure = data.main.pressure;
    let description = data.weather[0].description;
    let humidity = data.main.humidity;
    let windSpeed = data.wind.speed;
    let windDirection = data.wind.deg;
    let iconCode = data.weather[0].icon;

    let iconUrl = `https://openweather.org/img/w/${iconCode}.png`;

    let html = `<p>Temperature: ${temperature}</p>
    <p>Pressure: ${pressure}</p>
    <p>Description: ${description}</p>
    <p>Humidity: ${humidity}</p>
    <p>Wind Speed: ${windSpeed}</p>
    <p>Wind Direction: ${windDirection}</p>
    <img src="${iconUrl}" alt="Weather Icon">`;

    infoAboutWeather.innerHTML = html;
}