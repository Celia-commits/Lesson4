/*let weather = {
    paris: {
    temp: 19.7,
    humidity: 80
},
    tokyo: {
    temp: 17.3,
    humidity: 50
},
    lisbon: {
    temp: 30.2,
    humidity: 20
},
    "san francisco": {
    temp: 20.9,
    humidity: 100
},
    oslo: {
    temp: -5,
    humidity: 20
}
};

weather.paris.temp = Math.round(weather.paris.temp);
weather.tokyo.temp = Math.round(weather.tokyo.temp);
weather.lisbon.temp = Math.round(weather.lisbon.temp);
weather["san francisco"].temp = Math.round(weather["san francisco"].temp);
weather.oslo.temp = Math.round(weather.oslo.temp);

let fahrenheitParis = (weather.paris.temp * 9/5) + 32;
fahrenheitParis = Math.round(fahrenheitParis);
let fahrenheitTokyo = (weather.tokyo.temp * 9/5) +32;
fahrenheitTokyo = Math.round(fahrenheitTokyo);
let fahrenheitLisbon = (weather.lisbon.temp * 9/5) +32;
fahrenheitLisbon = Math.round(fahrenheitLisbon);
let fahrenheitSanFrancisco = (weather["san francisco"].temp * 9/5) +32;
fahrenheitSanFrancisco = Math.round(fahrenheitSanFrancisco);
let fahrenheitOslo = (weather.oslo.temp * 9/5) +32;
fahrenheitOslo = Math.round(fahrenheitOslo);


let city = prompt("Enter a city:");
city = city.trim();
city = city.toLowerCase();
city = city.replace(/[""]/g, '');


if(city === "paris") {
    alert(`It is currently ${weather.paris.temp}°C (${fahrenheitParis}°F) in ${city} with a humidity of ${weather.paris.humidity}%`);
} else if (city === "tokyo") {
    alert(`It is currently ${weather.tokyo.temp}°C (${fahrenheitTokyo}°F) in ${city} with a humidity of ${weather.tokyo.humidity}%`);
} else if (city === "lisbon") {
    alert(`It is currently ${weather.lisbon.temp}°C (${fahrenheitLisbon}°F) in ${city} with a humidity of ${weather.lisbon.humidity}%`);
} else if(city === "san francisco") {
    alert(`It is currently ${weather["san francisco"].temp}°C (${fahrenheitSanFrancisco}°F) in ${city} with a humidity of ${weather["san francisco"].humidity}%`);
} else if(city === "oslo") {
    alert(`It is currently ${weather.oslo.temp}°C (${fahrenheitOslo}°F) in ${city} with a humidity of ${weather.oslo.humidity}%`);
} else {
    alert(`Sorry, we don't know the weather for this city, try going to https://www.google.com/search?q=weather+${city}`);
} */


/*Feature 1
function newHeading (event) {
    event.preventDefault();
    let input = document.querySelector(".search-input");
    let heading = document.querySelector(".current-city");
    heading.innerHTML = input.value;
}

let citySearch = document.querySelector("form");
citySearch.addEventListener("submit", newHeading);
*/

//Feature 2
function currentTime(){
    let time = document.querySelector(".real-time");
    let now = new Date();
    
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let day = days[now.getDay()];
    let actualHour = now.getHours().toString().padStart(2, '0');
    let actualMinutes = now.getMinutes().toString().padStart(2, '0');
    
    time.innerHTML = `${day} ${actualHour}:${actualMinutes}`;
}

let time = document.querySelector(".search-button");
time.addEventListener("click", currentTime);

/////////////////////////////////////////////////API////////////////////////////////////////////////////////////////////////
function displayWeather(response) {
    let heading = document.querySelector(".current-city");
    heading.innerHTML = response.data.city;

    let degrees = document.querySelector(".degrees");
    let tempValue = Math.round(response.data.temperature.current);
    degrees.innerHTML = tempValue;

    let iconUrl = response.data.condition.icon_url;
    let weatherIcon = document.querySelector(".emoji");
    weatherIcon.setAttribute("src", iconUrl);
    weatherIcon.setAttribute("alt", response.data.condition.description);
    weatherIcon.innerHTML = `<img src="${iconUrl}" alt="${response.data.condition.description}`;
    
}

function handleSearch(event){
    event.preventDefault();
    let input = document.querySelector(".search-input");
    let city = input.value;

    let apiKey = "cb4b5c34a3d226503of16c3598tb1fa5";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayWeather);
}

let citySearch = document.querySelector("form");
citySearch.addEventListener("submit", handleSearch);





