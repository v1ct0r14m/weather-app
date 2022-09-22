var apiUrl = "api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}";

var listEl = document.getElementById("data");

// var requestUrl = "https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}";

fetch(apiUrl)
.then(function(response){
    //convert to JSON object
    return response.json();
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
