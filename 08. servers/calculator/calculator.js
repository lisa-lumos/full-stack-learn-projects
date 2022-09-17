const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({extended: true}));

const port = 3000;
app.listen(port, function() {
    console.log("Server started on port " + port);
});

app.get("/", function(req, res){ 
    res.sendFile(__dirname + "/index.html"); // __dirname is the path for the folder to reach this js file
})

app.post("/", function(req, res){
    var num1 = Number(req.body.num1); // convert text to number. num1 came from name attribute in html input tag
    var num2 = Number(req.body.num2);
    var result = num1 + num2;
    res.send("The result of the calculation is " + result);
});

app.get("/bmiCalculator", function(req, res) {
    res.sendFile(__dirname + "/bmiCalculator.html");
})

app.post("/bmiCalculator", function(req, res) {
    var weight = parseFloat(req.body.weight);
    var height = parseFloat(req.body.height);
    var bmi = weight / (height * height);
    res.send("Your BMI is " + bmi);
})









