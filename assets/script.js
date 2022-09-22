var requestUrl = "https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}";

fetch(requestUrl)
.then(function(response){
    return response.json();
})
.then(function(data){
    console.log(data)
});