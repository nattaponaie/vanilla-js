function loadLocation(callback) {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(callback)
    }
}

function setTemperatureDegree(degree = 'Unknown') {
    const element = document.querySelector('.temperature-degree')
    element.textContent = degree === 'Unknown' ? degree : `${degree}c`
}

function setTemperatureDesc(desc = 'Unknown') {
    const element = document.querySelector('.temperature-desc')
    element.textContent = desc
}

function setTemperatureIcon(icon = 'Unknown') {
    const element = document.querySelector('.icon');
    element.src = icon === 'Unknown' ? 
    'https://icons.iconarchive.com/icons/papirus-team/papirus-apps/96/weather-icon.png' 
    : `http://openweathermap.org/img/wn/${icon}@2x.png`
}

function setContinent(continent = 'Unknown') {
    const element = document.querySelector('.continent')
    element.textContent = continent;
}

function setCountry(country = 'Unknown') {
    const element = document.querySelector('.country')
    element.textContent = country
}

async function fetchWeather(geoLocation) {
    const lat = geoLocation?.coords?.latitude;
    const lng = geoLocation?.coords?.longitude;
    const accessKey = 'eb276a1614ab7fb8e9fd59221afc25b5'
    const apiUrl = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${accessKey}&units=metric`;
    
    const result = await (await fetch(apiUrl)).json();
    return result;
}

async function fetchLocationDetails(geoLocation) {
    const lat = geoLocation?.coords?.latitude;
    const lng = geoLocation?.coords?.longitude;
    const accessKey = '82b42f52e4e1be6339f15c059b18c69a'
    const apiUrl = `http://api.positionstack.com/v1/reverse?access_key=${accessKey}&query=${lat},${lng}`

    const result = await (await fetch(apiUrl)).json();

    const location = result?.data?.length > 0 && result?.data[0];
    return location;
}

async function LoadDetails(geoLocation) {
    const fetchWeatherTask = fetchWeather(geoLocation);
    const fetchLocationDetailsTask = fetchLocationDetails(geoLocation);

    const [weatherDetails, location] = await Promise.all([fetchWeatherTask, fetchLocationDetailsTask]);

    setTemperatureDegree(weatherDetails?.main?.temp)

    const weather = weatherDetails?.weather?.length > 0 && weatherDetails?.weather[0];
    setTemperatureDesc(weather?.description)
    setTemperatureIcon(weather?.icon)
    
    
    setContinent(location.continent)
    setCountry(location.country)
}

window.addEventListener("load", loadLocation(LoadDetails)); 