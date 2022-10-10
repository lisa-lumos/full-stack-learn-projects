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
Components allow us to split up a large file or a complex web structure into smaller components, and we can reuse each of these components when we need the same functionality. 

React convention for function is to name is in Pacal case so that each word has the first letter capitalized. This allow the React to discern the custom components and the original html elements:
```
import React from "react";
import ReactDOM from "react-dom";

function Heading() {
  return <h1>My Favourite Foods</h1>;
}

ReactDOM.render(
  <div>
    <Heading />
    <ul>
      <li>Bacon</li>
      <li>Jamon</li>
      <li>Noodles</li>
    </ul>
  </div>,
  document.getElementById("root")
);
```
Note that the `Heading` component has no contents, so write it as a self-closing tag. Follow Airbnb Style Guide for React `https://github.com/airbnb/javascript/tree/master/react` for best practices. 

We can use a ES6 feature to import Heading component from a separate file. Inside the "src" folder, create a new file "Heading.jsx". The convention specifies that we usually leave index.js as a plain js file, even we use some React and some jsx in it; but we have all components separated into individual files with a jsx extension. 
```
import React from "react"

function Heading() {
  return (<h1>My Favourite Foods</h1>);
}

export default Heading;
```
And in index.js:
```
import React from "react";
import ReactDOM from "react-dom";
import Heading from "./Heading"

ReactDOM.render(
  <div>
    <Heading />
    <ul>
      <li>Bacon</li>
      <li>Jamon</li>
      <li>Noodles</li>
    </ul>
  </div>,
  document.getElementById("root")
);
```
Often, this is what you see in the index.js file:
```
import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

ReactDOM.render(<App />, document.getElementById("root"));
```
And a custom file called App.jsx in src/components folder, with other jsx files:
```
import React from "react";
import Heading from "./Heading";
import List from "./List";

function App() {
  return ( // Note the quote!
    <div>
      <Heading />
      <List />
      <List />
    </div>
  );
}

export default App;
```

## Javascript ES6 Import, Export and Modules
In index.js file:
```
import React from "react";
import ReactDOM from "react-dom";
import pi, {doublePi, triplePi} from "./math.js";

ReactDOM.render(
  <ul>
    <li>{pi}</li>
    <li>{doublePi()}</li>
    <li>{triplePi()}</li>
  </ul>,
  document.getElementById("root")
);
```
In math.js file, note that you can call the default export anything, but you cannot do this to the non-default imports:
```
const pi = 3.1415962;

function doublePi() {
  return pi * 2;
}

function triplePi() {
  return pi * 3;
}

export default pi; // This is the default exports
export { doublePi, triplePi }; // this is the non-default exports
```
Note that when working with Node, we are not sure that we can always use ES6, because the browser penetration of ES6 is something like 80% at the moment. 

## Local Environment Setup for React Development (for mac)
1. Install the latest version of Node. `node --version`. 
2. Install VSCode. Install Babel Javascript extension for highlighting, and Vscode-icons extension for file structure icons. 
3. Create a React app. `https://reactjs.org/docs/create-a-new-react-app.html`. 
```
npx create-react-app my-app
cd my-app
npm start
```
4. Run the app. Follow instructions in step 3. 

Go to VSCode and add this folder. Now delete all files in the public folder, except index.html. And in the src folder, we only keep index.js file. In the head section of index.html, only keep `<meta charset="utf-8" />` and `<title>React App</title>`, and in the body section, only keep `<div id="root"></div>`. Now link index.js into the body: `<script src="./src/index.js" type="text/jsx"></script>`. So now index.html file looks like this:
```
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="utf-8" />
  <title>React App</title>
</head>

<body>
  <div id="root"></div>
  <script src="./src/index.js" type="text/jsx"></script>
</body>

</html>
```
And in index.js, have this:
```
import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(
  <h1>Hello World!</h1>,
  document.getElementById("root")
);

```
When you download projects from websites, could use `npm-check-updates` to update the outdated packages. 

## React Props (Properties)
We can remove the hard coded part of react components, and instead pass values as `props` into them. This enables us to reuse the components. Customize React elements could have customized properties. It is almost like calling a function. For example, in index.js file:  
```
import React from "react";
import ReactDOM from "react-dom";

function Card(props) {
  return (
    <div>
      <h2>{props.name}</h2>
      <img src={props.img} alt="avatar_img" />
      <p>{props.tel}</p>
      <p>{props.email}</p>
    </div>
  );
}

ReactDOM.render(
  <div>
    <h1>My Contacts</h1>
    <Card
      name="Beyonce"
      img="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
      tel="+123 456 789"
      email="b@beyonce.com"
    />
    <Card
      name="Jack Bauer"
      img="https://pbs.twimg.com/profile_images/625247595825246208/X3XLea04_400x400.jpg"
      tel="+7387384587"
      email="jack@nowhere.com"
    />
  </div>,
  document.getElementById("root")
);
```
Note that you cannot add `className` as html attribute into customized elements, you can only add it to original html components. Because it will think this `className` is a customized property name. Note that if we need to pass javascript objects in props inside ReactDOM.render(), need to use curly braces such as {object.attribute}. Note that props are read-only. 

## More Moduler code, and React DevTools
In index.js:
```
import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

ReactDOM.render(<App />, document.getElementById("root"));
```
In App.jsx:
```
import React from "react";
import Card from "./Card";
import contacts from "../contacts";
import Avatar from "./Avatar";

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <Avatar img="https://pbs.twimg.com/profile_images/744849215675838464/IH0FNIXk.jpg" />
      <Card
        name={contacts[0].name}
        img={contacts[0].imgURL}
        tel={contacts[0].phone}
        email={contacts[0].email}
      />
      <Card
        name={contacts[1].name}
        img={contacts[1].imgURL}
        tel={contacts[1].phone}
        email={contacts[1].email}
      />
      <Card
        name={contacts[2].name}
        img={contacts[2].imgURL}
        tel={contacts[2].phone}
        email={contacts[2].email}
      />
    </div>
  );
}

export default App;
```
In Avator.jsx:
```
import React from "react";

function Avatar(props) {
  return <img className="circle-img" src={props.img} alt="avatar_img" />;
}

export default Avatar;
```
In Card.jsx:
```
import React from "react";
import Avatar from "./Avatar";
import Detail from "./Detail";

function Card(props) {
  return (
    <div className="card">
      <div className="top">
        <h2 className="name">{props.name}</h2>
        <Avatar img={props.img} />
      </div>
      <div className="bottom">
        <Detail detailInfo={props.tel} />
        <Detail detailInfo={props.email} />
      </div>
    </div>
  );
}

export default Card;
```
In Detail.jsx:
```
import React from "react";

function Detail(props) {
  return <p className="info">{props.detailInfo}</p>;
}

export default Detail;
```
In contacts.js:
```
const contacts = [
  {
    id: 1,
    name: "Beyonce",
    imgURL:
      "https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg",
    phone: "+123 456 789",
    email: "b@beyonce.com"
  },
  {
    id: 2,
    name: "Jack Bauer",
    imgURL:
      "https://pbs.twimg.com/profile_images/625247595825246208/X3XLea04_400x400.jpg",
    phone: "+987 654 321",
    email: "jack@nowhere.com"
  },
  {
    id: 3,
    name: "Chuck Norris",
    imgURL:
      "https://i.pinimg.com/originals/e3/94/47/e39447de921955826b1e498ccf9a39af.png",
    phone: "+918 372 574",
    email: "gmail@chucknorris.com"
  }
];

export default contacts;
```
`React DevTools` can show the React DOM tree, and we can see the props being passed around to each of the components. When you click on a component in the DOM tree, you can see all the props passed into it, this is useful for `debugging`. In Chrome, add `React Developer Tools` to the extensions. Next, open Chrom Developer Tools, at the end of the tools bar, there is a `*Components` tab. On the left of the Search bar, there is an icon that allow you to select components on the webpage. This tool can also be applied to other websites such as airbnb website. 

## Mapping Data to Components
Previously in App.jsx file:
```
import React from "react";
import Card from "./Card";
import contacts from "../contacts";

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>

      <Card
        name={contacts[0].name}
        img={contacts[0].imgURL}
        tel={contacts[0].phone}
        email={contacts[0].email}
      />
      <Card
        name={contacts[1].name}
        img={contacts[1].imgURL}
        tel={contacts[1].phone}
        email={contacts[1].email}
      />
      <Card
        name={contacts[2].name}
        img={contacts[2].imgURL}
        tel={contacts[2].phone}
        email={contacts[2].email}
      />
    </div>
  );
}

export default App;
```

In App.jsx file:
```
import React from "react";
import Card from "./Card";
import contacts from "../contacts";

function createCard(contact) {
  return (
    <Card
      key={contact.id}
      name={contact.name}
      img={contact.imgURL}
      tel={contact.phone}
      email={contact.email}
    />
  );
}

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      {contacts.map(createCard)}
    </div>
  );
}

export default App;
```

## Map, Filter, Reduce, find, findIndex
`map`: take each elem in the input array, do the same thing to each element, and return the result array:
```
var numbers = [3, 56, 2, 48, 5];

// way 1
function double(x) {
  return x * 2;
}
const newNumbers = numbers.map(double);

// way 2
const newNumbers = numbers.map(function (x) {
  return x * 2;
});

console.log(newNumbers);
```

`filter`: create a new array by keeping the elems that return true:
```
// returns an array of elems that are < 10
const newNumbers = numbers.filter(function(num) {
  return num < 10;
});
```

`reduce`: accumulate (sum up to) a value by doing something to each item in the array:
```
// return the sum of all elems
var newNumber = numbers.reduce(function (accumulator, curVal) {
    return accumulator + curVal;
})
```

`find`: find the first item that matches from an array:
```
const newNumber = numbers.find(function (num) {
  return num > 10;
})
```

`findIndex`: find the index of the first item that matches:
```
const newNumber = numbers.findIndex(function (num) {
  return num > 10;
})
```

## Javascript ES6 Arrow functions (the fact arrow)
```
var numbers = [3, 56, 2, 48, 5];
const newNumbers = numbers.map((x, y) => {return x * y});
const newNumbers = numbers.map(x => {return x * x});
const newNumbers = numbers.map(x => x * x);
```

It is a best practice in React include a set of curly braces when you return a component that has many different properties. 

For more info, refer to `https://hacks.mozilla.org/2015/06/es6-in-depth-arrow-functions/`. 

## React Conditional Rendering with Ternary Operator and AND Operator
if else statement can be converted into an expression in JS, like `condition ? do if true : do if false`. If no need to do anything on one side of ":", could set it as null. 
```
import React from "react";
import Login from "./Login";

var isLoggedIn = false;
const currentTime = new Date(2019, 11, 1, 9).getHours();

function App() {
  return (
    <div className="container">
      {isLoggedIn ? <h1>Hello</h1> : <Login />}
      {currentTime > 12 && <h1>Why are you still working?</h1>}
    </div>
  );
}

export default App;
```
The second row in above code checks if current time is larger than 12, if so, then it goes ahead and evaluates the <h1>, otherwise, the <h1> is not evaluated, so not displayed. 

## State in React
To make the app interactive and have changeable state, `UI = f(State)`. This is declarative programming. For example, if we want a number to increase everytime a button is clicked, having `<button onClick={increase}> click me </button>` will not change what is displayed on screen, an walkaround could be to re-render the whole website, but this is uneffective and wasteful. Hooks come to rescue - could create a function that contains a hook.  
```
import React, {useState} from "react"
function App() {
    const x = useState(123); // 123 is initial val of state
    console.log(x[0]); // will display 123
    return (
        <div className = "container">
            <h1>{x[0]}</h1>   {// this will change x on the page automatically}
        </div>
    )
}
```
If we destructure an array:
```
const [red, green, blue] = [9, 132, 227]; // example of destructuring
```

```
import React, {useState} from "react"
function App() {
    const [count, setCount] = useState(0); // 0 is initial val of state
    console.log(count); // will display 0
    
    function increase() {
        setCount(count + 1);
    }
    
    return (
        <div className = "container">
            <h1>{count}</h1>   {// this will change x on the page automatically}
            <button onClick={increase}>+<button>
        </div>
    )
}
```
More on destructuring:
- Use `const [name1, name2] = arrayToDestruct` to destructure an array, you can name each elem inside the array as you want
- Use `const {key1, key2} = objectToDestruct` to destructure an object, note that you cannot name each property as you want in key1 and key2, etc - they have to match exactly with the properties in the object. To take a field out of object and give it a different name, you have to use `const {key1: name1YouChoose, key2: name2YouChoose} = objectToDestruct`, this is useful to give a different name of a field of an object that you obtained from the web, such as public APIs. 
- To provide a default value for a undefined property in an object, `const {key1 = "defaultValYouChoose", key2} = objectToDestruct`. Using default values can make code robust. 
- To destructure an object inside an object, use `const {key1, key2, key3: {nestedKey1, nestedKey2}} = object`
- You do not need to destructure all the keys and vals in an object.
- What you destruct can also contain function names as elems. 

## Event Handling in React
To learn more about HTML event attributes: `https://www.w3schools.com/html/html_attributes.asp`. 

To make the h1 change after we click the "Submit" button, and to allow the button to change color when we hover over it: 
```
import React, {useState} from "react";

function App() {
  const [headingText, setHeadingText] = useState("Hello");
  const [isMousedOver, setMouseOver] = useState(false);

  function handleClick() {
    setHeadingText("Submitted");
  }

  function handleMouseOver() {
    setMouseOver(true);
  }

  function handleMouseOut() {
    setMouseOver(false);
  }

  return (
    <div className="container">
      <h1>{headingText}</h1>
      <input type="text" placeholder="What's your name?" />
      <button
        style={{ backgroundColor: isMousedOver ? "black" : "white" }}
        onClick={handleClick}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
```

## React Forms
To display what is typed in input in h1, this is called a controlled component `https://reactjs.org/docs/forms.html#controlled-components` - we have to set the value that comes out of state as the value attributes of our inputs, to keep a single source of truth: 
```
import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");

  function handleChange(event) {
    console.log(event.target.value);
    setName(event.target.value);
  }

  return (
    <div className="container">
      <h1>Hello {name}</h1>
      <input
        onChange={handleChange}
        type="text"
        placeholder="What's your name?"
        value={name} {// for  single source of truth}
      />
      <button>Submit</button>
    </div>
  );
}

export default App;
```

To add the full name to h1 after user click the submit button: 
```
import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [fullName, setFullName] = useState("");

  function handleChange(event) {
    console.log(event.target.value);
    setName(event.target.value);
  }

  function submitted() {
    setFullName(name);
  }

  return (
    <div className="container">
      <h1>Hello {fullName}</h1>
      <input
        onChange={handleChange}
        type="text"
        placeholder="What's your name?"
        value={name} 
      />
      <button onClick={submitted}>Submit</button>
    </div>
  );
}

export default App;
```

To do it inside a form component. The default behaviour of a form component is to refresh the page to submit or make a post/get request, so you need to modify the form's onsubmit atrribute, by adding `event.preventDefault();` to prevent the default behaviour to happen:
```
import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [fullName, setFullName] = useState("")

  function handleChange(event) {
    console.log(event.target.value);
    setName(event.target.value);
  }

  function submitted(event) { // need to catch the event
    setFullName(name);
    event.preventDefault();
  }

  return (
    <div className="container">
      <h1>Hello {fullName}</h1>
      <form onSubmit={submitted}>
      <input
        onChange={handleChange}
        type="text"
        placeholder="What's your name?"
        value={name} 
      />
      <button type="submit" onClick={submitted}>Submit</button>
      </form>
    </div>
  );
}

export default App;
```

## Class Components VS Functional Components
There used to be two ways of adding state into a react app. One way is by using functional components, like what we have done by far. But there's another way by using class, as it was required in order to have state at that time. `https://reactjs.org/docs/hooks-intro.html`. React recommends that you should start using hooks to write new code, because it is a much easier way of managing state, and easy to read. 

## Changing Commplex State (objects)
Note, avoid to tap into anything related to event inside the stateful setter, otherwise will get error: "synthetic event is resused". 
```
import React, { useState } from "react";

function App() {
  const [fullName, setFullName] = useState({
    fName: "",
    lName: ""
  });

  function handleChange(event) {
    const { value, name } = event.target;

    setFullName(prevValue => {
      if (name === "fName") {
        return {
          fName: value,
          lName: prevValue.lName
        };
      } else if (name === "lName") {
        return {
          fName: prevValue.fName,
          lname: value
        };
      }
    });
  }

  return (
    <div className="container">
      <h1>
        Hello {fullName.fName} {fullName.lName}
      </h1>
      <form>
        <input
          name="fName"
          onChange={handleChange}
          placeholder="First Name"
          value={fullName.fName}
        />
        <input
          name="lName"
          onChange={handleChange}
          placeholder="Last Name"
          value={fullName.lName}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
```

## JavaScript ES6 Spread Operator
```
const citrus = ["Lime", "Lemon", "Orange"];
const fruits = ["Apple", "Banana", "Coconut", ...citrus]; // append elems to it
const fruits = ["Apple", ...citrus, "Banana", "Coconut"]; // insert elems into it

const fullName = {
    fName: "lisa",
    lName: "lumos"
};
const user = {
    ...fullName, // insert key-val pairs in a object, into a new object
    id: 1,
    username: "lisa-lumos"
}
```
Using the spread operator, the code in the prev section can be simplified as: 
```
import React, { useState } from "react";

function App() {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setContact(prevValue => {
      return {
        ...prevValue,
        [name]: value
      };
    });
  }

  return (
    <div className="container">
      <h1>
        Hello {contact.fName} {contact.lName}
      </h1>
      <p>{contact.email}</p>
      <form>
        <input
          onChange={handleChange}
          name="fName"
          value={contact.fName}
          placeholder="First Name"
        />
        <input
          onChange={handleChange}
          name="lName"
          value={contact.lName}
          placeholder="Last Name"
        />
        <input
          onChange={handleChange}
          name="email"
          value={contact.email}
          placeholder="Email"
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;

```

## Manage a Component Tree
In App.jsx:
```
import React, { useState } from "react";
import ToDoItem from "./ToDoItem";

function App() {
  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([]);

  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }

  function addItem() {
    setItems(prevItems => {
      return [...prevItems, inputText];
    });
    setInputText("");
  }

  function deleteItem(id) {
    setItems(prevItems => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" value={inputText} />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((todoItem, index) => (
            <ToDoItem
              key={index}
              id={index}
              text={todoItem}
              onChecked={deleteItem}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
```

In ToDoItem.jsx:
```
import React from "react";

function ToDoItem(props) {
  return (
    <div
      onClick={() => {
        props.onChecked(props.id);
      }}
    >
      <li>{props.text}</li>
    </div>
  );
}

export default ToDoItem;
```















