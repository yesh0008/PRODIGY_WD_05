const apiKey = "d8b558e279f533d0beb297531f6bdf08";
const url =
  "https://api.openweathermap.org/data/2.5/weather?q=mumbai&appid=d8b558e279f533d0beb297531f6bdf08";

const searchBtn = document.getElementById("searchBtn");
const searchBox = document.getElementById("searchBox");
const locBtn = document.getElementById("locBtn");



async function getWeather(city) {
  const response = await fetch(
    "https:api.openweathermap.org/data/2.5/weather?q=" +
      `${city}` +
      "&appid=d8b558e279f533d0beb297531f6bdf08&units=metric"
  );
  var data = await response.json();
  document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".wind").innerHTML = data.wind.speed + " KMPH";
  document.querySelector(".water").innerHTML = data.main.humidity;
  console.log(data);
  console.log(data.main.temp);
  var icon = data.weather[0].main;
  searchBox.value = "";
  if (icon == "Clear") {
    document.querySelector(".image").src = "clear.png";
  } else if (icon == "Clouds") {
    document.querySelector(".image").src = "clouds.png";
  } else if (icon == "Snow") {
    document.querySelector(".image").src = "snow.png";
  } else if (icon == "Rain") {
    document.querySelector(".image").src = "rain.png";
  } else if (icon == "Drizzle") {
    document.querySelector(".image").src = "drizzle.png";
  } else if (icon == "Thunderstron") {
    document.querySelector(".image").src = "rain.png";
  } else if (icon == "Haze") {
    document.querySelector(".image").src = "mist.png";
  } else {
    document.querySelector(".image").src = "clear.png";
  }
}

async function getWeatherLocation(lat, long) {
  const response = await fetch(
    "https://api.openweathermap.org/data/2.5/weather?lat=" +
      `${lat}` +
      "&lon=" +
      `${long}` +
      "&appid=d8b558e279f533d0beb297531f6bdf08&units=metric"
  );
  var data = await response.json();
  document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".wind").innerHTML = data.wind.speed + " KMPH";
  document.querySelector(".water").innerHTML = data.main.humidity;
  console.log(data);
  console.log(data.main.temp);
  var icon = data.weather[0].main;
  searchBox.value = "";
  if (icon == "Clear") {
    document.querySelector(".image").src = "clear.png";
  } else if (icon == "Clouds") {
    document.querySelector(".image").src = "clouds.png";
  } else if (icon == "Snow") {
    document.querySelector(".image").src = "snow.png";
  } else if (icon == "Rain") {
    document.querySelector(".image").src = "rain.png";
  } else if (icon == "Drizzle") {
    document.querySelector(".image").src = "drizzle.png";
  } else if (icon == "Thunderstron") {
    document.querySelector(".image").src = "rain.png";
  } else if (icon == "Haze") {
    document.querySelector(".image").src = "mist.png";
  } else {
    document.querySelector(".image").src = "clear.png";
  }
}

searchBtn.addEventListener("click", () => {
  getWeather(searchBox.value);
});

searchBox.addEventListener("keypress", () => {
  if (event.key === "Enter") {
    event.preventDefault();
    getWeather(searchBox.value);
  }
});

locBtn.addEventListener("click", () => {
  if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const lat = position.coords.latitude;
        const lng = position.coords.longitude;

      

        getWeatherLocation(lat, lng);
      },

      (error) => {
        console.error("Error getting user location:", error);
      }
    );
  } else {
    console.error("Geolocation is not supported by this browser.");
    
  }
});
