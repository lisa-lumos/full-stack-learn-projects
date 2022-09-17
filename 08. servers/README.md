# Node.js, Express.js, APIs
Node.js allows us to use JavaScript to interact directly with the hardware of the computer, or a server. 

## Install Node.js on Mac
Go to `https://nodejs.org/en/` and download the LTS version. After installation, type `node --version` in the terminal, if you see the version number, then the installation is successful.

## How to use Node
If we create a index.js file that contains `console.log("Hello"); `, then in terminal, type `node index.js`, we can see it returns a "Hello". 

## The Node Read Evaluation Print Loops (REPL)
Inside the terminal: 
```
$ Node
> console.log("Hello");
> .exit
```

## Native Node Modules
`https://nodejs.org/dist/latest-v16.x/docs/api/` shows all packages in Node. 
Here is an example in index.js: 
```
// jshint esversion:6
const fs = require("fs");
fs.copyFileSync("file1.txt", "file2.txt"); // copy file1 to file2
```
It copies the contents in file1 into file2 when you execute `node index.js`. 

## Node Package Manager (NPM) and External Modules
NPM `https://www.npmjs.com/` contains modules written by someone else - reusable code that you can incorporate in your project. NPM comes with the installation of Node. Inside terminal, run `npm init` and fill in the information:
```
package name: (08.-) test
version: (1.0.0) 
description: This is a test
entry point: (index.js) 
test command: 
git repository: 
keywords: 
author: Lisa
license: (ISC) 
About to write to /Users/lisa/Desktop/full-stack-projects/full-stack-learning-projects/08. /package.json:

{
  "name": "test",
  "version": "1.0.0",
  "description": "This is a test",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "Lisa",
  "license": "ISC"
}
```
This will create a JSON file containing a description of all your NMP packages. Once we install more packages, more thing will be added to this JSON file. 

Now go to npm website, and search for "superheroes", we can see instructions on how to use the package. In terminal, run `npm install superheroes`, it will install the package and we can see its name in the dependencies field of the JSON file. Now in index.js file, if you have 
```
const superheroes = require("superheroes");
var name = superheroes.random();
console.log(name);
```
And run it in terminal using `node index.js`, you can see names generated randomly. 

Inside the "node_modules" folder, you can see a list of modules that we have installed, and their dependencies. 

## Express.js
Express is a Node framework. It make you write less repetitive code when you are building web application. 

## Creating a Server with Express
Create a new project folder. To install Express, in terminal, type `npm install express`. Then in the server.js file:
```
const express = require("express");
const app = express();
const port = 3000;
app.listen(port, function() {
    console.log("Server started on port " + port);
});
```
Now if type `node server.js` in terminal, you can see the message that the server is up and running. 

If we access the server by going to `localhost:3000` in the browser, can see the `Cannot GET /` message. 

## the Get Request
Now need to handle requests and responses. 
```
const express = require("express");
const app = express();
const port = 3000;

app.listen(port, function() {
    console.log("Server started on port " + port);
});

app.get("/", function(request, response){ // can also write as (req, res)
    // console.log(request); // restart the server, and open it in browser, and look at what happens in console
    // response.send("Hello"); // restart the server, and open it in browser, can see "Hello"
    response.send("<h1>hello world<h1>"); // this will send an h1 to the browser
})
```
Inside app.get(), the "/" is the route that the server respond to, which means when we get a request from a browser that is targeting this route, which is the home route, we will respond with this callback function. We can also target a different route:
```
app.get("/contact", function(req, res) {
    res.send("Contact me via nam@email.com");
})
```
So now if we go to `localhost:3000/contact` in the browser, we can see the corresponding message. 

## Nodemon
Nodemon reloads your server automatically after each edit. To install it, go to terminal and type `sudo npm install -g nodemon`. To start the server using nodemon: `nodemon server.js`. 

## Make a Calculator that runs on server
Crete a new project folder, and intialize node, install express. And install body-parser `npm install body-parser`, this allows us to parse the requests that are sent via the post method. 

Inside html file:
```
<!DOCTYPE html>
<html lang="en" dir="ltr">
    <head>
        <meta charset="utf-8">
        <title>Calculator</title>
    </head>
    <body>
        <h1>Calculator</h1>
        <!-- The form will sent post request to home route loc -->
        <form class="" action="/" method="post"> 
            <input type="text" name="num1" placeholder="First number">
            <input type="text" name="num2" placeholder="Second number">
            <button type="submit" name="submit">Calculate</button>
        </form>
    </body>
</html>
```

Inside calculator.js: 
```
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
```

## BMI Calculator
To add a new route that calculates BMI into the previous server, create a file bmiCalculator.html: 
```
<!DOCTYPE html>
<html lang="en" dir="ltr">
    <head>
        <meta charset="utf-8">
        <title>BMI Calculator</title>
    </head>
    <body>
        <h1>BMI Calculator</h1>
        <form action="/bmiCalculator" method="post">
            <input type="text" name="weight" placeholder="Weight">
            <input type="text" name="height" placeholder="Height">
            <button type="submit" name="button">Calculate BMI</button>
        </form>
    </body>
</html>
```
And inside calculator.js file, add:
```
app.get("/bmiCalculator", function(req, res) {
    res.sendFile(__dirname + "/bmiCalculator.html");
})

app.post("/bmiCalculator", function(req, res) {
    var weight = parseFloat(req.body.weight);
    var height = parseFloat(req.body.height);
    var bmi = weight / (height * height);
    res.send("Your BMI is " + bmi);
})
```

After you start the server, if you you now go to `localhost:3000/bmiCalculator`. 

## Application Programming Interfaces (APIs)
An API is a set of commands, functions, protocols and objects that programmers can use to create software or interact with an external system. 

## API Endpoints, Paths, Parameters and Authentication
If we go to `https://kanye.rest/`, we can see a simple API's endpoint, which is `https://api.kanye.rest`. If we put this link into the browser, the browser will make a `get` request to the API, and will get a response. 

You also can have `Paths` and `Parameters` to get the specific data you want from an external server. If we go to `https://sv443.net/jokeapi/v2/`, which is a joke API an allow you to specify what type of jokes you want, etc. Here is an example of a url: `https://v2.jokeapi.dev/joke/Programming`, where the endpoint is `https://v2.jokeapi.dev/joke`, and the `Programming` is the path. Another example: `https://v2.jokeapi.dev/joke/Any?contains=Debugging`, where we search for a joke that contains a specifit search string. Other examples: `https://v2.jokeapi.dev/joke/Programming?contains=Debugging`, `https://v2.jokeapi.dev/joke/Programming?format=txt&contains=Debugging`. The first query follows a question mark, and every subsequent query follows an ampersand. 

Every time you make a request through the API, they need to be able to identify you as the developer, so they can keep track of your usage data, then charge you or limit you. For example, go to `https://openweathermap.org/api` for this weather API, and sign up to get your API key. If we go to their API doc for "Current Weather Data", we can see there are a lot of ways to call the API, such as city name, etc. For example, `https://api.openweathermap.org/data/2.5/weather?q=London&appid={API key}` will get the weather in London. `https://api.openweathermap.org/data/2.5/weather?q=London&units=metric&appid=...` will show the temperature in metric units. Note that the order you put these parameters doesn't matter, as long as they are separated by ampersands or if its at the beginning, the question mark. 

When testing APIs, `POSTMAN` is often used. When you enter KEY-VALUE pairs, they are automatically added to your url, you can also click on the ckeck box to add or remove pairs. When you click on 'Send', you will get an response fromt the API. 

## JavaScript Object Notation (JSON)
The data you get back from the weather API is in JSON format (can be chosen to be xml or html or other formats too), for example:
```
{
    "weather": [
        {
            "id": 803,
            "main": "Clouds",
            "description": "broken clouds",
            "icon": "04d"
        }
    ],
    "base": "stations",
    "main": {
        "temp": 16.55,
        "feels_like": 15.46,
        "temp_min": 14.49,
        "temp_max": 17.85,
        "pressure": 1017,
        "humidity": 46
    },
    "visibility": 10000,
    "name": "London",
    "cod": 200
}
```

## Make a weather app using the Weather API
Now create a new project folder, and initialize npm, use npm to install express package. 

To view a string JSON data in Chrome, install `JSON View Pro` Chrom plugin. Then whenever you get a JSON response from an API call, the JSON data will be nicely formatted automatically, and you can copy path for a key by clicking on the key, for example, `main.temp`. 

In index.html file:
```
<!DOCTYPE html>
<html lang="en" dir="ltr">
    <head>
        <meta charset="utf-8">
        <title>Weather App</title>
    </head>
    <body>
        <form action="/" method="post">
            <label for="cityInput">City Name: </label>
            <input id="cityInput" type="text" name="cityName" value="">
            <button type="submit">Go</button>
        </form>
    </body>
</html>
```
And in app.js file:
```
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
```

## The Mailchimp API
Go to bootstrap website and go to examples tab, and find a `Sign-in` page under "Custom Conponents" section. Right click it and `View Page Source` and copy the whole html contents, and paste in locally in "signup.html" file. Then add bootstrap links properly in the head and body section. Next, create a css file and link it from html. Note that to get the contents of the css file, you need to click it in the link `signin.css` in the html source page in the browser. 

In head section, change the title to `<title>Newsletter Signup</title>`. More edits see the signup.html, styes.css and app.js file. 

Head to `https://mailchimp.com/`, register and get your API key. 

## Deploy Server on Heroku
Register an account on `heroku.com`, go to `Node.js` documentation, install Heroku on the local machine as well its dependencies if any. Create a "Procfile" in the project folder, and put `web: node app.js` inside. In the project folder, in the terminal, `git init`, `git add .`, `git commit -m "Update"`, `heroku create`, `git push heroku main`. And your code is deployed on Heroku. 































