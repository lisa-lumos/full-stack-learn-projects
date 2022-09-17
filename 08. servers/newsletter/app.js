const express = require("express");
const https = require("https"); // native module inside node
const request = require("request");
const bodyParser = require("body-parser"); // parse html posts

const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public")); // so html can access css ect. files in this folder


app.get("/", function(req, res) {
    res.sendFile(__dirname + "/signup.html");    
});

app.post("/", function(req, res) {
    console.log("Post received. ");
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const email = req.body.email;
    console.log(firstName, lastName, email);
    
    const data = {
        members: [
            {
                email_address: email,
                status: "subscribed",
                merge_fields: {
                    FNAME: firstName,
                    LNAME: lastName
                }
            }
        ]
    };
    const jsonData = JSON.stringify(data);
    const url = "https://us12.api.mailchimp.com/3.0/lists/...";
    const options = {
        method: "post",
        auth: "lisa:..."
    }
    
    const request = https.request(url, options, function(response) {
        // give a response
        if (response.statusCode === 200) {
            res.sendFile(__dirname + "/success.html"); 
        } else {
            res.sendFile(__dirname + "/failure.html"); 
        }
        
        response.on("data", function(data) {
            console.log(JSON.parse(data));
        })
    });
    request.write(jsonData);
    request.end();
    // res.send("Server is running.");
});

app.post("/failure", function (req, res) {
    res.redirect("/");
})

// // for local deploy
// app.listen(3000, function(){
//     console.log("Server is running on port 3000."); 
// });

// for heroku deploy or local deploy
app.listen(process.env.PORT || 3000, function(){
    console.log("Server is running on port 3000."); 
});
