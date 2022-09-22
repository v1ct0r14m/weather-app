let weather = {
    "apiKey": "1aa9e2f867c7bb69b42d05b93ecab9c5"
}

var apiUrl = "https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}";

var listEl = document.getElementById("data");

// var requestUrl = "https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}";

fetchWeather: function () {
    fetch(
        "https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}"     
.then(response) => response.json();
})
.then(function(data){
    //display in html
    var docArray = data.respons.docs;
    for(var i = 0; i ,docArray.length; i++) {
        var listItem = document.createElement("li");
        listItem.textConent = docArray[i].data;
        listEl.appendChild(listItem);
    }
    // console.log(data)
});


//.catch(function(error) {
    //console.log(error);
//});
