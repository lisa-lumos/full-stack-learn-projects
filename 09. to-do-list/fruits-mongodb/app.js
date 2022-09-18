const mongoose = require("mongoose");
const url = "mongodb+srv://....mongodb.net"
mongoose.connect(url + "/fruitDB");

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

// Fruit.updateOne({_id: "63269a75c95eec4249087eab"}, {name: "Peach"}, function(err) {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log("Successfully updated the document. ");
//     }
// });

// Fruit.deleteOne({name: "Peach"}, function(err) {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log("Successfully deleted the document. ");
//     }
// });

























