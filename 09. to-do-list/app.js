const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js") // require a custom module

const app = express();
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

const mainItems = ["Buy Food", "Cook Food", "Eat Food"];
const workItems = [];

app.get("/", function(req, res) {
    // var today = new Date();
    // var options = {
    //     weekday: "long",
    //     day: "numeric", 
    //     month: "long"
    // }
    // var day = today.toLocaleDateString("en-US", options);
    
    // let day = date();   // if there's only one function in the module
    const day = date.getDate(); // if there are multple exported functions
    // renders list.ejs file, kindOfDay is key in ejs file, day is value
    res.render("list", {listTitle: day, items: mainItems}); 
    // // You can write multiple html tags and send alltogether
    // res.write("<h1>Hello</h1>");
    // res.write("<p>Today is Friday! </p>");
    // res.send();
    
    // res.send("Hello");
});


app.post("/", function(req, res) {
    // item = req.body.newItem;
    // console.log(item);
    if(req.body.buttonList === "Work"){
        workItems.push(req.body.newItem);
        res.redirect("/work");
    } else {
        mainItems.push(req.body.newItem);
        res.redirect("/");
    }
});

app.get("/work", function(req, res) {
    res.render("list", {listTitle: "Work", items: workItems});
})

// // deleted this because nothing in ejs posts to the work route
// app.post("/work", function(req, res) {
//     workItems.push(req.body.newItem);
//     res.redirect("/work");
// })


app.listen(3000, function(){
    console.log("Server started on port 3000. ");
});

