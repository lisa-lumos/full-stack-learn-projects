# Introduction to CSS (...continued)

## CSS Syntax
`selector { property: value; }`, e.g.: `h1 { color: red; }`

When you have multiple styles added to a tag, it is best practice to keep them `in alphabetical order`, so it is easy to find. 

### Tag Selectors
If want to change backgound color of a image to red, by using the HTML tag name as the selector, add this to css:
```
img {
  background-color: red;
}
```

We can find a list of available CSS properties from `developer.mozilla.org`. 

## CSS Selectors
To find more images to link to, go to `emojipedia.org`. If want this image to have a different background color, 

### Class Selectors
The class attribute allows us to differentiate all of our HTML elements. In the html file, add a class attribute to each image tag: 
```
<img class="bacon" src="https://emojipedia-us.s3.amazonaws.com/thumbs/240/apple/271/bacon_1f953.png" alt="bacon-img">
<img class="broccoli" src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/271/broccoli_1f966.png" alt="broccoli-img">
```
And in the css file, instead of using the previous tag selector, add a dot to the class attribute name:
```
/*------------------------- class selectors -------------------------*/
.bacon {
  border-color: red;
}
.broccoli {
  border-color: green;
}
```

### ID Selectors
In the html file, add an id attribute to the h1 so it becomes: `<h1 id="heading">I Love Bacon</h1>`. In the css file, add a # to the id attribute name: 
```
/*------------------------- id selectors -------------------------*/
#heading {
  color: blue;
}
```
You can only have `a single instance` of one particular id name inside a single page (such as one navigation bar on top of a page). While you can have unlimited instances of the same class name inside a single page. 

Because class and id selectors are more specific than tag selectors, so they can override it; and tag selectors override the default styles from the browser. 

An html element could have more than one class, but only one id. For example, in the html file you have `<img class="bacon round" src="https://emojipedia-us.s3.amazonaws.com/thumbs/240/apple/271/bacon_1f953.png" alt="bacon-img">`, which means you have both "bacon" class and "round" class applied to this img tag. And in css you have `round { border-radius: 100%; }`

### Pseudo class
HTML elements can have different states, e.g.: when you `hover` over an image or piece of text. You can change the state of the element by using the pseudo classes that have a colon : in front of them. 

To make the image have a gold color when you hover over it, in the css file, add:
```
img:hover {
    background-color: gold;
}
```









