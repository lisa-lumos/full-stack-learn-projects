# JavaScript and the Document Object Model (DOM)
## Open the JavaScript Console in Chrome
Inside Chrome, `View` -> `Developer` -> `Developer Tools`, on the top bar, click on `Console`. Inside, type:
```
alert("Hello");
```
You will see that it brings up a pop up, which has the message of "Hello". 
```
alert("Hello"); // then hold "shift" key and hit "enter" to enter a new line
alert("World");
```
It will execute the first alert, then second. 

To write JavaScript code inside Chrome, click on the `Sources` in the top bar, in the bar below the top bar, click the `>>` icon, and select `Snippets`. Click `New snippet` and rename the file as `hello.js`, a new window will show up. If we type below code inside the editor, and hit run button at the bottom of the editor:
```
alert("Hello"); 
alert("World");
```
It again will execute the first alert, then second. 

`https://github.com/rwaldron/idiomatic.js` shows how to JavaScript guidelines. 

## JavaScript Variables 
```
var yourName = prompt("What is your name?");
alert("Hello " + yourName + " !");
var lth = yourName.length;
yourNamePrefix3 = yourName.slice(0, 3);
var x = 5;
x++;
var a = Math.floor(1.5);
var n = Math.random(); // Generates a rand num in range [0, 1)
console.log(typeof(a));
```

To clear the cache that stores variables in the console, press and hold refresh button, and click `Empty Cache and Hard Reload`. 

## JavaScript Functions
```
var c = aPlusb(1, 2);

function aPlusb(a, b) {
    var result = a + b;
    console.log(result);
    return result;
}
```

## JavaScript Control Statements
```
var a = Math.rand();
if (a === 0) {
    console.log("a is 0.");
} else {
    console.log("a is not 0.");
}
```
The difference between `==` and `===` is that: `==` converts the variable values to the same type before performing comparison. This is called type coercion. `===` does not do any type conversion (coercion) and returns true only if `both values and types are identical` for the two variables being compared.

```
var a = 0;
while (a < 10) {
    a++;
}
for (var i = 0; i < 10; i++) {
    // do something
}
```


## JavaScript Comparators
```
// ===    is equal to
// !==    is not equal to
// >      is greater than
// <      is lesser than
// >=     is greater or equal to 
// <=     is lesser or equal to 
```

## Combining Comparators
```
// &&    and
// ||    or
// !     not
```

## JavaScript Arrays
```
var guestList = ["person1", "person2", "person3"];
console.log(guestList[0]);
if (guestList.includes("person2")) {
    console.log("guestList contains person2. ");
}
guestList.push("person4");
guestList.pop();
```

## Adding JavaScript to websites
### Inline JavaScript
In the html file, if you have `<body> onload="alert('Hello')"</body>`, it means an alert window will pop up the moment the page is loaded. This inline JavaScript. It is not recommended to use it this way. 

### Internal JavaScript
In the html file, 
```
<script type="text/javascript">
    alert("Hello");
</script>
```
The brower will read html file line by line, and when it hits the JavaScript code, it will run it. 

### External JavaScript
In the html file, 
```
<script src="index.js" charset="utf-8"></script>
```
it will link to the index.js file in the project folder. And in the JavaScript file, you have `alert("Hello"); `. 

The place where you place the `<script>` tag matters. For CSS, we put the link in the `<head>` element, because it needs to load CSS first to use the styles inside to style the contents in the website. With JavaScript, it is the opposite: if we start to change an html element that doesn't exist yet, it will fail. If in index.js, you have `document.querySelector("h1").innerHTML = "GoodBye"; `, and the `script` tag is below the `h1` tag in the html, then the JavaScript works, but if the order is reversed in html, it will not work - you will see an error in the console. 

So the best practice is to always put the `script` tag at the end, right before the closing tag of `body` tag. Another benefits of this is that if you have a lot of JavaScript code to run, at least your website contents will show up first, so your website seems a lot faster. 

## The Document Object Model (DOM)
If we need to change the contents of our website on the fly, for example, when the user clicks a button, we need to respond by changing the appearance of the website. This is what DOM solves. It catalogs the webpage into individual objects that we can select and manipulate. The task of converting an html file into a DOM is by the browser, it turns the html elements into a tree structure so you can select and manipulate them. 
```
<html>
    <head>
        <title>My Website</title>
    </head>
    <body>
        <button>Alert</button>
    </body>
</html>
```
=> a tree: 
```
  document
     |
    html
    /  \
 head  body 
  |      |
title  button
```
If you get an `HTML Tree Generator` Chrome plugin, you will be able to see the tree structure of any website in Chrome. 

In the JavaScript Console in Chrome, if you type `document; ` and hit enter, you will see document object including the whole contents of the html file is returned. And if you type in `document.firstElementChild; `, it will return the everything inside the html. And if you go further with `document.firstElementChild.firstElementChild; `, it will return the `head` part of the website. And `document.firstElementChild.lastElementChild; ` returns the `body` of the website. 

If you give the `h1` object inside the `body` to a variable `var heading = document.firstElementChild.lastElementChild.firstElementChild; `, then `heading.innnerHTML = "Goodbye"; `, then you see that you have changed the text inside the `h1` in the website. You also type `heading.style.color = "red"; `. 

If you want to target the html element that has a selector of "input": `document.querySelector("input").click()`, then you get the checkbox checked. 

So the objects inside the DOM can have `properties` and `methods`. `Properties` describe the object, and `methods` decides what the object can do. You can use the dot notation to set or get the property of an object, or call a method inside the object. For example, the properties of our button object contains `innerHTML`, `style`, `firstChild`, etc., and its methods includes `click()`, `appendChild()`, `setAttribute()`, etc. 

There are various ways of selecting HTML elements with JavaScript. 

`document.getElementsByTagName("li"); ` will return an array that contains all the list items in the document. The array doesn't have a `style` property. So if we want to change the color of list item, we need to select the item in the array first: `document.getElementsByTagName("li")[0].style.color = "purple"; `. `document.getElementsByTagName("li").length; ` returns the length of the array. 

`document.getElementsByClassName("btn"); ` returns an array of the elements with the specified class. 

`document.getElementById("btn"); ` returns the single object (html element) with the specified id. 

`document.querySelector("h1"); ` returns the first object (html element) with the specified selector. `document.querySelector("#id"); `; `document.querySelector(".btn"); `. If instead of only the first element, you need all matched elements to be returned, use `querySelectorAll`. 

`document.querySelector("li a"); ` returns the ancher tag inside the list item. 

`document.querySelector("li.item"); ` returns the list html element who has a "item" class. 

Among all ways, `querySelector` and `querySelectorAll` allow for more complex queries, because we can combine selectors. So they are used most common. 

## Changing styles of html elements with JavaScript
JavaScript naming conventions tend to be camel cased, which is standard for naming methods and properties in JavaScript. It is same with the css properties in JavaScript. You can find all the property names in the `HTML DOM Style Object` documentation. Also, the value you asign it to must be strings, even if it orginally is a number, like `document.querySelector("h1").style.fontSize = "10rem"; `, `document.querySelector("h1").style.padding = "30%"; `, `document.querySelector("h1").style.visibility = "hidden"; `, 
`document.querySelector("button").style.backgroundColor = "yellow"; `. 

## Decouple the css from our JavaScript
So far, we have been changing the style of website with only JavaScript file, instead of using css files. This is not good practice. We could use `classList` property for it. 

`document.querySelector("button").classList; ` returns a list of classes that are attached to this `button` html element. If we want to add an class named "invisible" to this button element, we could use `document.querySelector("button").classList.add("invisible"); `. And if in our css file, we have 
```
.invisible {
    visibility: hidden;
}
```
We can then see that the button disappears. 

In this way, we can keep all of our styles inside our css file, but we can turn it on and off using JavaScript. 

If then we want to remove the class named "invisible" from this button element, we could use `document.querySelector("button").classList.remove("invisible"); `. And you see the button reappears. We can also use `document.querySelector("button").classList.toggle("invisible"); `, which means if the class is applied, remove it; and if the class is not applied, then add it. 

## Text manipulation and the Text Content Property
Before this, we have been using `innerHTML` like `document.querySelector("h1").innerHTML = "GoodBye"; `, `document.querySelector("h1").innerHTML = "<em>GoodBye</em>"; ` to change the everything inside the html tag. But imagine if we have a `strong` tag in side the html like this: `<h1><strong>Hello</strong></h1>`. Then `document.querySelector("h1").textContent = "GoodBye"; ` can actually set the content of the text only.

## Manipulating HTML Element Attributes
If we have an html element which is a link: `<a href="https://www.google.com">Google</a>`, if we want to change the `href` to point to "Bing" instead, we can use `document.querySelector("a").setAttribute("href") = "https://www.bing.com"; `. `document.querySelector("a").attributes; ` will show all the attributes attached to this tag. `document.querySelector("a").getAttribute("href"); ` will show the content of the attribute.








