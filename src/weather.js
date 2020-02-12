
const API_KEY = "0636d6a6233b90c8482e24676f522407";
const COORDS = 'coords';
const weatherContainer = document.querySelector(".js-weather");

function init() {
    loadCoords();
}

init();

function loadCoords() {
    const loadCoords = localStorage.getItem(COORDS);
    if (loadCoords === null) {
        askForCoords();
        loadCoords();
    } else {
        const coords = JSON.parse(loadCoords);
        getWeather(coords.latitude, coords.longitude);
    }
}

function getWeather(lat, lon) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=Metric`
    ).then(response => {
        return response.json()
    }
    ).then(
        json => {
            const temp = json.main.temp;
            const place = json.name;
            weatherContainer.innerText = temp + place;
        }
    )

}

function askForCoords() {
    navigator.geolocation.getCurrentPosition(handleSuccess, handleError);
}

function handleSuccess(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    const coordsObj = {
        latitude,
        longitude
    }

    saveCoords(coordsObj);
}

function handleError() {
    console.log("can't load geo location");
}

function saveCoords(coordsObj) {
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}