
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");

const cities = document.querySelector(".city");
const temp = document.querySelector(".temp");
const humidity = document.querySelector(".humidity");
const wind = document.querySelector(".wind");
const weatherIcon = document.querySelector(".weather-icon");

const api_key = "ef411b048c420f8169ad5b2fcc2940f4";
const url = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";


async function checkWeather(city) {
    const response = await fetch(url + city + `&appid=${api_key}`);

    if (response.status == 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    } else {
        var data = await response.json();

        console.log(data);

        cities.innerHTML = data.name;
        temp.innerHTML = Math.round(data.main.temp) + "°C";
        humidity.innerHTML = data.main.humidity + "%";
        wind.innerHTML = data.wind.speed + "km/h";

        if (data.weather[0].main == "Clouds") {
            weatherIcon.src = "weather-img/img/clouds.png";
        } else if (data.weather[0].main == "Clear") {
            weatherIcon.src = "weather-img/img/clear.png";
        } else if (data.weather[0].main == "Rain") {
            weatherIcon.src = "weather-img/img/rain.png";
        } else if (data.weather[0].main == "Drizzle") {
            weatherIcon.src = "weather-img/img/drizzle.png";
        } else if (data.weather[0].main == "Mist") {
            weatherIcon.src = "weather-img/img/mist.png";
        }

        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
    }


}

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
})
