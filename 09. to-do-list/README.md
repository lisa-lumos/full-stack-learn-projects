# EJS, MongoDB
Embedded JavaScript templating (EJS). 

## Basics
Create a new project folder, initialize npm and install express and body-parser packages. To install EJS, `npm install ejs`. In app.js file, add `app.set("view engine", "ejs");`. Inside the project folder, create a new folder "views". This folder is where ejs go to to get files to render. Inside views folder, create a file "list.ejs", which will be the base template to create all our to do lists. 

Inside ejs file, to use a variable from app.js file, need to use `<%= key %>`. And in the app.js file, need to specify the key value pair object when render the ejs file: `res.render("list", {key: value}); `. 

## Running code inside the EJS template
For any code that is not html, that is control flowjavascript, need to add `<% javascript %>` to wrap it around. 
```
<!-- code inside ejs -->
<% if (kindOfDay === 6 || kindOfDay === 0) { %>
    <h1 style="color: green"><%= kindOfDay %>To Do List</h1>
<% } else { %>
    <h1 style="color: blue"> <%= kindOfDay %>To Do List</h1>
<% } %>
```

```
<ul>
    <% for (var i = 0; i < items.length; i++) { %>
        <li><%= items[i] %></li>
    <% } %>
</ul>

```

## Add css to the website
Express cannot see the css file in the project folder by default. So need to move css, javascript files into a folder called "public", and `app.use(express.static("public"));` in javascript file. 

## EJS Templating and Layouts
Notice that the post in form tag is always to the home route in ejs in our code. To identify in javascript which route clicked the button, in ejs define button as `<button type="submit" name="buttonList" value=%= listTitle %>>+</button>`. Then we can catch it in javascript via `eq.body.buttonList`, and handle the cases differently.

If we have same contents that we would like to display on different pages, ejs allows us to create layouts, or partials, by including headers and footers, that we can reuse. In the views folder, and create "header.ejs" and "footer.ejs" files. For the parts that will be repeated in all your websites including list.ejs, just copy and paste to the newly created files, in header.ejs:
```
<!DOCTYPE html>
<html lang="en" dir="ltr">

<head>
    <meta charset="utf-8">
    <title>To Do List</title>
    <link rel="stylesheet" href="css/styles.css">
</head>

<body>
```
and in footer.ejs file:
```
</body>

<footer>
    Copyright 2022
</footer>

</html>
```
Then in list.ejs file, at the header and footer loc, add 
```
<%- include("header"); -%>
```
and 
```
<%- include("footer"); -%>
```

## Node Module Exports
For example, to export our date module, create a date.js file in the project folder, and 
```
exports.getDate = function () {
    const today = new Date();
    const options = {
        weekday: "long",
        day: "numeric", 
        month: "long"
    }
    return today.toLocaleDateString("en-US", options);
}

exports.getDay = function () {
    const today = new Date();
    const options = {
        weekday: "long",
    }
    return today.toLocaleDateString("en-US", options);
}
```
and in app.js:
```
const date = require(__dirname + "/date.js") // require a custom module
const day = date.getDay(); // if there are multple exported functions
```

## npm and github
When downloading a project from github, and the "node_modules" folder is not there, you can still install them by `npm install` and the package.json file inside the project folder. 

## Express Routing Parameters
If you have a lot of routs and want to tap into from which rout a get request came from, in app.js:
```
const express = require("express");
const app = express();

app.get("/news/:topic", function(req, res) {
    console.log(req.params.topic); // will print out the topic string
});

app.listen("3000", function() {
    console.log("Server is running on port 3000. ");
})
```
Then for example, if you access it from `localhost:3000/news/politics`, then you can see "politics" show up in the console. 

## Lodash package
```
var _ = require("lodash");
const requestedTitle = _.lowCase(req.params.postName);

```

## MongoDB
Go to 'https://www.mongodb.com/', and register. Creat a free cluster and create log in info, and add your ip to whitelist. In terminal, `brew install mongosh`, then `mongosh "mongodb+srv://[yourServerName].mongodb.net/cluster0" --apiVersion 1 --username [yourUserName]`, and enter password. 

You can also download and install `MongoDB Community Server` to run MongoDB locally. `https://www.mongodb.com/docs/manual/tutorial/install-mongodb-on-os-x/`. 

## MongoDB CRUD Operations
Inside Mongo Shell, type `help` to see list of commands. Commonly used commands:
```
show dbs
use shopDB
db
db.products.insertOne({_id: 1, name: "Pen", price: 1.20})
show collections
db.products.insertOne({_id: 2, name: "Pencil", price: 0.08, stock: 12})
db.products.find()
db.products.find({name: "Pencil"})
db.products.find({price: {$gt: 1}})
db.products.find({_id: 1}, {name: 1})
db.products.find({_id: 1}, {name: 1, _id: 0})
db.products.updateOne({_id: 1}, {$set: {stock: 32}})
db.products.deleteOne({_id: 2})
use shopDB
db.dropDatabase()
```

## Relationships in MongoDB
```
db.products.insert(
    {
        _id: 3,
        name: "Eraser",
        price: 1.30,
        stock: 43,
        reviews: [
            {
                authorName: "Sally",
                rating: 5, 
                review: "Best eraser ever!"
            }, 
            {
                authorName: "John",
                rating: 5, 
                review: "Awesome eraser!"
            }
        ]
    }
)

{orderNumber: 1234, productsOrdered: [1, 2]}
```

## Native MongoDB Driver
`npm install mongodb`. For documentation, head to `https://www.mongodb.com/docs/drivers/node/current/`. People rarely use it. Mongoose is more commonly used. 

## Mongoose
`https://mongoosejs.com/`. Mongoose allows your Node.js app which speaks the language of Javascript objects to be able to talk to MongoDB database, which speaks in the language of documents and collections. It simplifies the writing of code.  
```
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/test');

const Cat = mongoose.model('Cat', { name: String });

const kitty = new Cat({ name: 'Zildjian' });
kitty.save().then(() => console.log('meow'));
```

```
const mongoose = require("mongoose");
const url = "mongodb+srv://[...].mongodb.net"
mongoose.connect(url + "/fruitDB");

const fruitSchema = new mongoose.Schema ({
    name: String,
    rating: Number,
    review: String
});

const Fruit = mongoose.model("Fruit", fruitSchema);

// const fruit = new Fruit({
//     name: "Apple",
//     rating: 7,
//     review: "Good fruit. "
// });
// fruit.save();

// const kiwi = new Fruit({
//     name: "kiwi",
//     score: 5,
//     review: "Alright. "
// }); 
// const orange = new Fruit({
//     name: "orange",
//     score: 5,
//     review: "orange Alright. "
// }); 
// const banana = new Fruit({
//     name: "banana",
//     score: 5,
//     review: "banana alright. "
// }); 
// Fruit.insertMany([kiwi, orange, banana], function(err) {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log("Successfully saved all fruits to fruitsDB");
//     }
// });

Fruit.find(function(err, fruits) {
    if (err) {
        console.log(err);
    } else {
        mongoose.connection.close();
        fruits.forEach(function(fruit) {
            console.log(fruit.name);
        })
    }
});
```
## Data Validation with Mongoose
```
const fruitSchema = new mongoose.Schema ({
    name: {
        type: String,
        required: [true, "Name is required. "]
    },
    rating: {
        type: Number,
        min: 1,
        max: 10
    },
    review: String
});
```

## Updating and Deleting data with Mongoose
```
Fruit.updateOne({_id: "63269a75c95eec4249087eab"}, {name: "Peach"}, function(err) {
    if (err) {
        console.log(err);
    } else {
        console.log("Successfully updated the document. ");
    }
});

Fruit.deleteOne({name: "Peach"}, function(err) {
    if (err) {
        console.log(err);
    } else {
        console.log("Successfully deleted the document. ");
    }
});
```

































