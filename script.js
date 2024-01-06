let locationTextInput = document.querySelector("#location-text-input");

const searchBtn = document.querySelector("#search-btn");

let weatherImg = document.querySelector(".weather > img");
let weatherTemperature = document.querySelector(".temperature");
let weatherDescription = document.querySelector(".description");
let weatherHumadity = document.querySelector(".info-humadity > span");
let weatherWind = document.querySelector(".info-wind > span");

let weatherBox = document.querySelector(".weather-box");
let weatherDetails = document.querySelector(".weather-details");
let notFound = document.querySelector(".not-found");
let container = document.querySelector(".container");


weatherBox.style.display = "none";
weatherDetails.style.display = "none";

searchBtn.addEventListener("click", function () {
    const APIKey = "a4da9a1b9d0713bd99c7c52711c6082c";
    const cityName = locationTextInput.value;

    if (cityName === "") {
        return;
    }
 
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${APIKey}`)
        .then(response => response.json())
        .then(data => {
            if (data.cod === "404") {
                weatherBox.style.display = "none";
                weatherDetails.style.display = "none";
                notFound.style.display = "flex";
                container.style.height = "400px";
            } else {
                weatherBox.style.display = "flex";
                weatherDetails.style.display = "flex";
                notFound.style.display = "none";
                container.style.height = "555px";
            }

            weatherTemperature.innerHTML = (273 - data.main.temp.toFixed(0));
            weatherDescription.innerHTML = data.weather[0].description.toUpperCase();
            weatherWind.innerHTML = data.wind.speed + "Km/h";
            weatherHumadity.innerHTML = data.main.humidity + "%";

            switch (data.weather[0].main) {
                case "Clear":
                    weatherImg.src = "./weather-pics.png/sunny.png";
                    break;

                case "Rain":
                    weatherImg.src = "./weather-pics.png/rain.png";
                    break;
                case "Snow":
                    weatherImg.src = "./weather-pics.png/snow.png";
                    break;
                case "Clouds":
                    weatherImg.src = "./weather-pics.png/clouds.png";
                    break;
                case "Mist":
                    weatherImg.src = "./weather-pics.png/mist.png";
                    break;
                case "Haze":
                    weatherImg.src = "./weather-pics.png/mist.png";
                    break;
                default:
                    weatherImg.src = "./weather-pics.png/clouds.png"
            }
        });

});



