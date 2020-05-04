const weather = document.querySelector('.js-weather');

const API_KEY = 'f3e3d807b2919a6625e90d1f2cbec0dc';
const COORDS = 'coords';

function getWeather(lat, lng) {
    fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
    ).then(function(response) {
        return response.json();
    }).then(function(json){
        const temperature = json.main.temp;
        const place = json.name;
        weather.innerText = `${temperature}°C at ${place}`;
    });
}

function saveCoords(obj) {
    localStorage.setItem(COORDS, JSON.stringify(obj));
}

function handleGeoSuccess(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordObj = {
        latitude: latitude,
        longitude: longitude
    };
    saveCoords(coordObj);
    getWeather(latitude, longitude);
}

function handleGeoError() {
    console.log("error");
}

function askForCoords() {
    navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);
}

function loadcoords() {
    const loadedCoords = localStorage.getItem(COORDS);
    if(loadedCoords === null){
        askForCoords();
    } else {
        const parseCoords = JSON.parse(loadedCoords);
        getWeather(parseCoords.latitude, parseCoords.longitude);
    }
}

function init() {
    loadcoords();
}

init();