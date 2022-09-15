# Advanced JavaScript and DOM Manipulation 

## Adding Event Listeners to a Button
To add event listener to a button, in javascript file, add 
```
document.querySelector("button").addEventListener("click", handleClick); 

function handleClick() {
    alert("I got clicked!");
}
```
Now the website shows up an alert every time the button is clicked. Note that when we specify the function name when we add event listener, we do not add the parenthesis. This is because adding parenthesis makes the function to get called straight up the moment the event listener is added. It is the idea of passing a function as an input so it can be called at a later time. 

Most people will write the above code into an anonymous function:
```
document.querySelector("button").addEventListener("click",  function () {
    alert("I got clicked!");
});
```
Now, to add this event listener to all of our buttons in the page:
```
var buttonObjects = document.querySelectorAll(".drum");
for (var i = 0; i < buttonObjects.length; i++) {
    buttonObjects[i].addEventListener("click",  function () {
        alert("I got clicked!");
    });
}
```

## Higher Order Functions and Passing Functions as Arguments
If we go to `en.wikipedia.org/wiki/JavaScript`, and right click on the title `JavaScript`, and click `Inspect`, we can see that this `span` is also called `$0`: `<span class="mw-page-title-main">JavaScript</span> ==$0`. This means this `span` can be accessed from the console using this `$0` variable. So if we type `$0; ` in the Console and hit enter, we can see the `span` element is returned. Now, if I type `$0.innerHTML = "JavaRound"; ` in the console, the text in the span in the webpage is changed by me on the fly. 

Now, if we add an event listener to this span by typing in the console:
```
$0.addEventListener("click", function () {
    console.log("I got clicked. ");
});
```
Then each time we click the span text in the webpage, the console will log "I got clicked. ". 

Adding an event listener takes two inputs, the first one specifies what it should listen to, and the second one specifies what if should do if the event happens. Here we are passing a function as an input. 

Another example passing a function as input: 
```
function add(num1, num2) {
    return num1 + num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function calculator(num1, num2, operator) {
    return operator(num1, num2);
}

// call like this:
calculator(3, 5, add);
calculator(3, 5, multiply);
```
We can use the `debugger` in the console to see the calling process. 

`Higher order functions` are functions that can take other functions as inputs. 

## How to Play Sounds on a Website
```
var buttonObjects = document.querySelectorAll(".drum");
for (var i = 0; i < buttonObjects.length; i++) {
    buttonObjects[i].addEventListener("click",  function () {
        var audio = new Audio('sounds/tom-1.mp3');
        audio.play();
    });
}
```

To give a button with a class "w" in html a background image:
```
.w {
    background-image: url("images/image.png");
}
```

Now, if we want to know which button was clicked, we need to use `this`:
```
var buttonObjects = document.querySelectorAll(".drum");
for (var i = 0; i < buttonObjects.length; i++) {
    buttonObjects[i].addEventListener("click",  function () {
        console.log(this); // will show which button object triggered this event
        console.log(this.innerHTML); // will show the text on the button tag
        this.style.color = "white"; // changes the text of the button that got clicked to white
    });
}
```

## JavaScript Objects
```
// below is a JavaScript Object: 
var bellboy1 = {
    name: "Timmy",
    age: 19,
    hasWorkPermit: true,
    languages: ["French", "English"]
};

var houseKeeper1 = {
    yearsOfExperience: 12,
    name: "Jane",
    cleaningRepertoire: ["bathroom", "lobby", "bedroom"]
}

console.log(houseKeeper1.name);

// Constructor Function (the factory)
// Note: the first letter of function name has to be capitalized
function BellBoy (name, age, hasWorkPermit, languages) {
    this.name = name;
    this.age = age;
    this.hasWorkPermit = hasWorkPermit;
    this.languages = languages;
}

// initialize a new object
var bellBoy2 = new BellBoy("Tom", 20, false, ["English"]);
```

## Switch Statements in JavaScript
```
function playSound(key) {
    switch (key) {
        case "w":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
        case "a":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
        default:
            console.log(key);
            break;
    }
}
```

## Objects with methods inside
```
// below is a JavaScript Object with a method inside: 
var bellboy1 = {
    name: "Timmy",
    age: 19,
    hasWorkPermit: true,
    languages: ["French", "English"],
    moveSuitcase: function () {
        alert("May I take your suitcase?");
        pickUpSuitcase();
        move();
    }
};

bellBoy1.moveSuitcase();

// Constructor Function
function BellBoy (name, age, hasWorkPermit, languages) {
    this.name = name;
    this.age = age;
    this.hasWorkPermit = hasWorkPermit;
    this.languages = languages;
    this.moveSuitcase = function () {
        alert("May I take your suitcase?");
        pickUpSuitcase();
        move();
    }
}
```

## Using Keyboard Event Listeners to Check for Key Presses
If we want to play the sound when we press the corresponding keys on the keyboard, we can add an event listener to the entire `document`, and pass the `event` that triggered the event listener: 
```
document.addEventListener("keydown", function(event) {
    console.log(event); // shows the event object that triggered the event
    console.log(event.key); // shows the key value in the event object that triggered the event
    playSound(event.key);
    buttonAnimation(event.key);
})
```

## Callback Function
The `callback function` allows us to wait for something to happen, then it gets executed. For example, the second argument in the `addEventListener` function is a callback function. 

## Adding Animation to Websites
We want the button to flash when we click on it. 
```
function buttonAnimation(currentKey) {
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function() {
        activeButton.classList.remove("pressed");
    }, 100);
}
```
And in css file, we have:
```
.pressed {
    box-shadow: 0 3px 4px 0 #dbedf3;
    opacity: 0.5;
}
```

