# Bootstrap
`Bootstrap` is a front-end library which is free and open source. Front-end basically is what user sees. In the back-end, there's server, databases, etc. Bootstrap can make your website `responsive`: it can have a different layout depends on the device you use, like mobile, iPad, desktop etc. Also, with Bootstrap, you get a lot of `pre-styled elements` that you can simply drop in to your code. 

To play with Bootstrap, you can go to `codeply.com`. 

For example, to create a button with Bootstrap in html: `<button class="btn btn-primary">Hello World</button>`

## Intro
To see more about how it works, go to `getbootstrap.com`, and download the source code for Bootstrap. Unzip the file, and find the folder called "CSS", and open `bootstrap.css` file. It contains a lot of pre-defined styles for html elements. 

To put the botton inside a navbar with a dark background color:
```
<div class="navbar bg-dark">
    <button class="btn btn-primary">Hello World</button>
</div>
```

## How to install Bootstrap
Copy the link into the head section of html file: `<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-iYQeCzEYFbKjA/T2uDLTpkwGzCiq6soy8tYaI1GyVh/UjpbCx/TYkiZhlZB6+fzT" crossorigin="anonymous">`, and the `script` links also. Another way is to just copy their `starter template`. 

And now, if we add `<h1">Hello World</h1>` inside the body section of html, we can see that it is already styled by Bootstrap. 

## Wireframing
This can be done with `balsamiq.com`. 

## Bootstrap Grid Layout System
A div could have different size based on screen size (width is 12 units): 
```
<div class="row">
    <div class="col-lg-3 col-md-4 col-sm-6" style="background-color:yellow; border: 1px solid">
        col-lg-3 col-md-4 col-sm-6
    </div>
    <div class="col-lg-3 col-md-4 col-sm-6" style="background-color:yellow; border: 1px solid">
        col-lg-3 col-md-4 col-sm-6
    </div>
    <div class="col-lg-3 col-md-4 col-sm-6" style="background-color:yellow; border: 1px solid">
        col-lg-3 col-md-4 col-sm-6
    </div>
    <div class="col-lg-3 col-md-4 col-sm-6" style="background-color:yellow; border: 1px solid">
        col-lg-3 col-md-4 col-sm-6
    </div>
</div>
```

Any screen size that is not specified, is 100% by default. 

## Bootstrap containers
When you change the width of the browser, this container jumps in size to fit the current width. 
```
<div class="container" style="background-color: red;">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
</div>
```
While the fluid container always adapt to the width of the screen, always taking 100% of width. 
```
<div class="container-fluid" style="background-color: yellow;">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
</div>
```

## Font Awesome icons
To add an apple icon to html, go to `fontawewsome.com`, search for apple, first follow instructions to add `fontawesome` to the website, then add `<i class="fa-brands fa-apple"></i>`. 

To rotate an image, use `tranform: rotate(35deg); `. 

## Bootstrap Carousel
It is like a slide show for you to slide through different contents. 

```
<div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-100" src="..." alt="First slide">
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="..." alt="Second slide">
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="..." alt="Third slide">
    </div>
  </div>
</div>
```

## Bootstrap Cards
A `card` is a flexible and extensible content container. It includes options for headers and footers, a wide variety of content, contextual background colors, and powerful display options. 
```
<div class="card" style="width: 18rem;">
  <img class="card-img-top" src="..." alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
```

To look for other snippets created using Bootstrap, such as log in pages etc., go to `bootsnipp.com`. 

## CSS Z-Index and Stacking Order
The default `z-index` for all elements is 0. The elements with same z-index show up in the order defined in the html. The elem with a highter z-index will show up on top. For example, the element with a `z-index: 1; ` sits on top of elements without a z-index defined. 

z-index only works if the elements have a `position` property defined as `absolute` or `relative`, or `fixed`. It won't work if the `position` is `static`. 

## Media Query Breakpoints
Google rankings are affected by whether a website is mobile-friendly or not. You can check whether your website is mobile-friendly by `Mobile-Friendly Test` by Google. To solve this problem, some people will make a separate mobile site, which is a lot of work. The second solution is to make your website `responsive`. 

For example, you have a `<h1>Hello World</h1>` as a website, if you want the color of `h1` to be red only when the page is printed, in css, you can have 
```
@media print{
    h1 {
        color: red;
    }
}
```

Similarly, if the screen width is larger than 900px, the changes inside the media will be activated: 
```
h1 {
    font-size: 30px;
}
@media screen (min-width: 900px) {
    // change something, like
    h1 {
        font-size: 60px;
    }
}
```
If the screen width is larger than 900px and smaller than 1000px, the changes inside the media will be activated: 
```
h1 {
    font-size: 30px;
}
@media screen (min-width: 900px) and (max-width: 1000px){
    // change something, like
    h1 {
        font-size: 60px;
    }
}
```
For fine-tuning, you will be using css media queries a lot. 

To direct the anchor tag to the `footer` that has an id named "footer" `<a class="nav-link" href="#footer">Contact</a>`. In URL, this is equivalent of appending "#footer" to the end of original URL. 

## Code Refactoring
1. Readability
2. Modularity
3. Efficiency
4. Length

## Combining Selectors in CSS
You can target a few selectors at once: 
```
h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: "Montserrat", sans-serif;
  font-weight: bold;
}
```
aka
```
selector1, selector2 {
    ...
}
```

Hierarchical selectors: to target the ".container-fluid" class inside the the tag that has an id of "title": 
```
#title .container-fluid {
  padding: 3% 15% 10%;
}
```
aka
```
selector1 selector2 {
    ...
}
```
where selector1 is belongs to parent and selector2 belongs to the child. It is going to look for all the selector2s that is contained in a selector 1, and apply the style. 

Combined selectors: 
```
h1#title {
    color: red;
    // the h1 which has an id of "title" will be colored red
}
```
aka
```
selector1.selector2 {
    ...
}
selector1#selector2 {
    ...
}
```

## Selector Priority
`id selectors` > `class selectors` > `tag selectors`

Inside the one selector, the last row wins. 

Use ids very sparringly. Try to be specifit and try to apply one one class to html elements. 

















