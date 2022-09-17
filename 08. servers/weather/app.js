const express = require("express");
const https = require("https"); // native module inside node
const app = express();
const bodyParser = require("body-parser"); // parse html posts

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/index.html");    
});


app.post("/", function(req, res) {
    console.log("Post received. ");
    console.log(req.body.cityName);
    // const city = "London"; 
    const city = req.body.cityName; 
    const apiKey = "...";
    const unit = "metric";
    const url = "https://api.openweathermap.org/data/2.5/weather" 
                + "?q=" + city 
                + "&units=" + unit 
                + "&appid=" + apiKey;
    https.get(url, function(weatherRes) {
        // console.log(weatherRes);
        // console.log(weatherRes.statusCode); // for details look up http status code
        weatherRes.on("data", function(data) {
            // console.log(data); // will see hex representation of the data
            const weatherData = JSON.parse(data);
            // console.log(weatherData); // now can see the javascript object
            // console.log(JSON.stringify(weatherData)); // will show it in string format
            const temp = weatherData.main.temp; // access key value pairs in object
            const desc = weatherData.weather[0].description; // used chrome plugin to get path
            const icon = weatherData.weather[0].icon;
            const iconURL = "http://openweathermap.org/img/wn/" + icon + "@2x.png"
            // res.send("The temperature in London is " + temp + " degrees C. "); 
            // res.send("<h1>The temperature in London is " + temp + " degrees C. </h1>"); 
            res.write("<h1>The weather is currently " + desc + ". </h1>"); 
            res.write("<h1>The temperature in " + city + " is " + temp + " degrees C. </h1>"); 
            res.write("<img src='" + iconURL + "' alt='weatherIcon'>"); 
            res.send();
        });
    })
    // res.send("Server is running.");

});

app.listen(3000, function(){
    console.log("Server is running on port 3000."); 
});
























