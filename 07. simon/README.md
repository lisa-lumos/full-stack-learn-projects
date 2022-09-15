# jQuery
jQuery is a JavaScript Library. It makes code shorter with less repitition, for example, `document.querySelector('h1')` can be written with jQuery as `$("h1")`. 

## Incorporate jQuery in to Websites
Go to `https://jquery.com/`, click on "download", and scroll down to see `Using jQuery with a CDN`, and click on `Google CDN`. Using CDN means that if user's browser already have a copy cached locally, they will no longer need to download it again. Copy what is under the `3.x snippet`: `<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.1/jquery.min.js"></script>` and paste it above the javascript link in the `body` sectiion in the html. The ordering is important because if javascript link is on top, the browser will execute what is in the code first, and cannot understand all jQuery expressions inside. 

Now in javascript file, if we have `$("h1").css("color", "red"); `, then the text in `h1` will be red. 

## Select Elements with jQuery
```
$("h1"); // select all "h1"s
$("h1.round") // select all "h1"s that has a "round" class
$("button"); // select all buttons
```

## Manipulate Styles with jQuery
```
$("h1").css("color", "green"); // set color of all h1s to green
console.log($("h1").css("color")); // show the color of h1
console.log($("h1").css("font-size"));
$("h1").css("font-size", "5rem"); 
$("button"); // select all buttons
```
To separate behaviour from styles, add a class to h1 using jQuery:
```
$("h1").addClass("big-title"); // adds one class to h1
$("h1").removeClass("big-title"); // removes one class from h1
$("h1").addClass("big-title margin-50"); // adds two classes to h1
$("h1").hasClass("margin-50"); // return whether h1 has class margin-50
```
and in css if you have
```
.big-title {
    color: red;
    font-size: 2rem;
}

.margin-50 {
    margin: 50px;
}
```

## Manipulate Text with jQuery
```
$("h1").text("Hello"); // change text of all "h1"s
$("button").text("Don't click me! "); // change text of all buttons
$("h1").html("<em>hey</em>"); // similar to innerHTML in javascript
```

## Manipulate Attributes with jQuery
```
console.log($("img").attr("src")); 
$("img").attr("src"); // shows attribute
$("a").attr("href", "https://www.yahoo.com"); // set attribute
$("h1").attr("class"); // displays all classe applied to h1
```
Note that class is also an html attribute. 

## Add Event Listeners with jQuery
```
// on click of h1, its color changes to purple
$("h1").click(function() {
    $("h1").css("color", "purple");
});

// on click of any button on the page, h1 color changes to purple
$("button").click(function() {
    $("h1").css("color", "purple");
});

// on typing in the input box, log the key in keypress event
$("input").keypress(function(event) {
    console.log(event.key);
});

// on typing in the webpage, log
$(body).keypress(function(event) {
    console.log(event.key);
});
// or:
$(document).keypress(function(event) {
    console.log(event.key);
});

$("h1").on("mouseover", function() {
    $("h1").css("color", "purple");
});

$("h1").on("click", function() {
    $("h1").css("color", "purple");
});
```

## Adding and Removing HTML Elements with jQuery
```
$("h1").before("<button>New</button>"); // add a button before the h1 element
$("h1").after("<button>New</button>"); // ... after ...
$("h1").prepend("<button>New</button>"); // add a button inside the h1 element, before the content of h1
$("h1").append("<button>New</button>"); // ... afrer the content of h1
$("button").remove(); 
```

## Website Animations with jQuery
```
$("h1").on("click", function() {
    $("h1").hide();
}); 
$("h1").show();
$("h1").toggle();
$("h1").fadeOut();
$("h1").fadeIn();
$("h1").fadeToggle();
$("h1").slideUp();
$("h1").slideDown(); // good for drop down menu
$("h1").slideToggle();
$("h1").animate({opacity: 0.5}); // allow to use custom css (with numeric val) for animation
$("h1").slideUp().slideDown().animate({opacity: 0.5}); // you can also chain them in order
```

















