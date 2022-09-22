let weather = {
    "apiKey": "1aa9e2f867c7bb69b42d05b93ecab9c5",
fetchWeather: function (city) {
    fetch(
        "https://api.openweathermap.org/data/2.5/weather?q="
         + city 
         + "&units=imperial&appid="
         + this.apiKey     
    )
        .then((response) => response.json())
        .then((data) => this.displayWeather(data));
    },
    displayWeather: function(data) {
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
        console.log(name,icon,description,temp,humidity,speed);
        document.querySelector(".city").innerHTML = "weather in " + name;
        //document.querySelector(".description").innerHTML = description;
        document.querySelector(".temp").innerHTML = temp + "°";
        document.querySelector(".humidity").innerHTML = "humidity: " + humidity + "%";
        document.querySelector(".wind").innerHTML = "windspeed: " + speed + " m/h";
    
    }
};









