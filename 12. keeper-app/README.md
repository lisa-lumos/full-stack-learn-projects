# React.js
React is a `JavaScript library` for building `user interfaces`. It is a `front end` framework. It makes it easy to create repetitive elements. You can break down a very complex user interface structure into a `component tree`, with each of the component `reusable` and `customizable`. It also vastly simplifies the structure of your website. 

It is effectively like creating your own custom HTML elements. React combines a small amount of html, css and javascript together in to a single component so that each component has its own styling, functionality. We can also have component `listening` for changes in the server and updating itself and its own appearance and data, and talk to the server independently. 

React is also able to render changes effectively  because it compares changes, and makes your app more interactive and much faster.  

## JSX and Babel
In the html file, `<div id="root"></div>` is the root of your React app, everything we create using React is going to be inserted in this div. 

The html file in "public" folder contains below contents, and will not be modified. All code will be written in JavaScript using React. 
```
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>JSX</title>
    <link rel="stylesheet" href="styles.css" />
  </head>

  <body>
    <div id="root"></div>
    <script src="../src/index.js" type="text/javascript"></script>
  </body>
</html>
```
For index.js file inside the "src" folder, install `react` and `react-dom` dependencies. 
```
import React from "react";
import ReactDOM from "react-dom";

ReactDOM.render(
  <div>
    <h1>Hello World!</h1>
    <p>This is a paragraph.</p>
  </div>,
  document.getElementById("root")
);

```
Babel is a Javascript compiler. It can take next gen JavaScript like es6, 7, 8, with arrow functions, map functions, etc, to a version of JavaScript that every browser can understand. 

Note that when we use the `render` method, it can only take a single html element. So if we need to render a few elements, we can enclose all of them into a single `div` element. 

## Javascript Expressions in JSX
JSX lets us add html inside a javascript, and then insert javascript inside that html. 
```
import React from "react";
import ReactDOM from "react-dom";

const fName = "Lisa";
const lName = "Lumos";

ReactDOM.render(
  <div>
    <h1>Hello {fName + " " + lName}!</h1>
    <p>Your lucky number is {Math.floor(Math.random()*10)}</p>
  </div>,
  document.getElementById("root")
);
```
You can put expressions inside curly braces, but statements like if-else wouldn't work. The part `{fName + " " + lName}` can be replaced by `{fName} {lName}`, or ``{`${fName} ${lName}`}``. 

## JSX Attributes, and Styling React Elements
We are writing html inside javascript, to the file is no longer a plain old javascript file, it is a jsx file. To let the browser know it,in html file, we need to change `<script src="../src/index.js" type="text/javascript"></script>` to `<script src="../src/index.js" type="text/JSX"></script>`. 

To include css in jsx file: 
```
import React from "react";
import ReactDOM from "react-dom";

const img = "https://picsum.photos/200";

ReactDOM.render(
  <div>
    <h1 className="heading">My Favourite Foods</h1>
    <img alt="random" src={img + "?grayscale"} />

    <img
      className="food-img"
      alt="bacon"
      src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-190621-air-fryer-bacon-0035-landscape-pf-1567632709.jpg?crop=0.645xw:0.967xh;0.170xw,0.0204xh&resize=480:*"
    />
  </div>,
  document.getElementById("root")
);
```
Note that instead of `class`, we use attributes like `className`, which is camel cased. 

And in css file:
```
.heading {
  color: red;
}

.food-img {
  height: 100px;
  width: 100px;
}
```

## Inline Styling for React Elements
You might want to change the styles of html element on the fly while you app is running, this is when inline styling becomes useful. 
```
import React from "react";
import ReactDOM from "react-dom";

const customStyle = {
  color: "red",
  fontSize: "20px",
  border: "1px solid black"
};

customStyle.color = "blue";

ReactDOM.render(
  <h1 style={customStyle}>Hello World!</h1>,
  document.getElementById("root")
);

```

## React Components





