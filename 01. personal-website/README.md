# Introduction to HTML and CSS
## How does websites work

`HTML` specifies the structure of the website, `CSS` is for styling the website, `JavaScript` files allow your website to have behavior. 

To open `Chrome Developer Tools`, right click on a component of a website, and click `Inspect`. It will highlight the part of the corresponding code that you clicked on. You can edit the text in the code. But when you refresh the website, all your editing will be gone, because it makes a new request to the server and load a fresh copy of the site. 

## Tools needed to get started

`Chrome` and `Atom` (the code editor). 

Inside `Atom`, go to `Preferences`, and install following packages:
- atom-ternjs
- autoclose-html-plus
- emmet
- csslint
- pigments
- language-ejs
- atom-beautify
- atom-html-preview
- sublime-style-column-selection
- linter-eslint

## Intro to HTML

`HTML` is the foundation of all websites. You can create a website using just HTML. 

HTML = HyperText Markup Language

Go to `codepen.io` to experiment. 

`Heading elements` only go from `h1` to `h6`. 

```
<h1>The Adventures of Sherlock Holmes</h1>
<br>
<h3>by</h3>
<h2>Sir Arthur Conan Doyle</h2>
```
To find the documentation of heading elements, could search `headings html mdn`, also could use `w3 schools`, or `devdocs.io`. 

`<br>` is a line break. It doesn't need both open and close tag. It is a `Self-closing tag`. 

## The anatomy of an HTML tag

### Tag omission

For example, in `<h1>Hello World! </h1>`, `<h1>` is the start tag, and `</h1>` is the end tag. `Hello World! ` is the content. But `<br>` is a `Self-closing tag`.

Check documentation `Tag omission` part for details for a particular HTML element.

`<hr>` is a horizontal rule, it is a self-closing tag. 

```
<hr>
<h1>The Adventures of Sherlock Holmes</h1>
<br>
<h3>by</h3>
<h2>Sir Arthur Conan Doyle</h2>
<hr>
```

If you want to duplicate an html element that you see on some website, you could right click on it and `Inspect` the HTML and CSS code behind it. 

### HTML attributes
In `<hr size="3" noshade>`, `hr` is the `HTML element`, but `size="3"` or `noshade` is the `HTML Attribute`, which specifies modifications to the defaults of this element. To know what attributes an specific HTML element has, and how to use them, could go to the documentation and check out the `Attributes` section. 

```
<hr size="3", noshade>
<h1>The Adventures of Sherlock Holmes</h1>
<br>
<h3>by</h3>
<h2>Sir Arthur Conan Doyle</h2>
<hr size="3", noshade>
```

```
<center>
    <hr size="3", noshade>
    <h1>The Adventures of Sherlock Holmes</h1>
    <br>
    <h3>by</h3>
    <h2>Sir Arthur Conan Doyle</h2>
    <hr size="3", noshade>
</center>
```
Comments in HTML: `<!-- This is a comment -->`. 

## Building a HTML website

### HTML boiler plate
If want to see what a website looked like many years ago, could go to `web.archive.org`. 

Create a project folder `HTML - Personal Site`. Inside this folder, create a new file `index.html`. Open this file in Atom.

type `html` and hit `enter` key, we will get the boiler plate: 
```
<!DOCTYPE html>
<html lang="en" dir="ltr">
    <head>
        <meta charset="utf-8">
        <title></title>
    </head>
    <body>
        
    </body>
</html>
``` 

In the boiler plate, `<!DOCTYPE html>` declares the document type, it specifies which version of the html is used, which is `html 5` here.

### `head` section
 `head` part holds info about the site and tells browser how to handle the site. Inside `head`, if we add a title as `<title>Lisa's Personal Site</title>`, now right click the file and click `Copy Full Path`, we can paste it to Chrome to open it. Now you can see the `Lisa's Personal Site` shows on the browser tab. 

`<meta charset="utf-8">` tells the browser that our webpage is encoded using the `UTF-8` encoding system, which includes all symbols that are included in the `Unicode` character set, including `emojis`. Which means that you can include emojis in the title and body of the html website. 

There are other attributes in the `meta` tag, such as:
```
<head>
    <meta charset="UTF-8">
    <meta name="description" content="Free Web tutorials">
    <meta name="keywords" content="HTML, CSS, JavaScript">
    <meta name="author" content="John Doe">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
```
These meta-tags tell the browser how it should display the webpage, also `give information to search engines about the content of the website` - when you Google this site, in the preview, you see `Free Web tutorials` right after your website name. 

### `body` section
To add contents to the body of the website, inside the `body` section, add a `heading` element: `<h1>Lisa</h1>`. 

The `<p>` tag is the paragraph tag, which formats the text inside as a paragraph. An example: `<p>I am a developer. </p>`.

To italicize text using HTML: `<em>Text</em>`, and to bold text: `<strong>Text</strong>`. 

```
<p>I am a developer. </p>
<p><em>I am a developer. </em></p>
<p><em>I am a <strong>developer</strong>. </em></p>
```

### HTML Lists
To create a bullet list, use the `<ul>` (unordered list) tag: 
```
<h3>Programming Languages</h3>
<ul>
    <li>Java</li>
    <li>Python</li>
</ul>
```

To create an ordered list, use the `<ol>` (ordered list) tag: 
```
<h3>Programming Languages</h3>
<ol>
    <li>Java</li>
    <li>Python</li>
</ol>
```

You can next the two types of list inside each other. 

### HTML Image elements
To include an image in your html site, use `<img src="lisa.png" alt="Lisa img">`. Where the `img` is the html tag; and `src` is its image source attribute, it can be a local image, or a URL that fetches an image from the internet; `alt` is the alternative text in case the browser cannot display the image. Google scans/indexes this alternative text. 

To find the URL of an image, in Google images, just right click the image and click "Copy Image Address", then it becomes: `<img src="https://image.shutterstock.com/image-vector/emoji-sunglasses-smiley-face-vector-260nw-691545478.jpg" alt="Lisa img">`. 

Website `imageonline.co` allow you to edit your local image. 

### HTML Links and Anchor Tags
Hyptertext is a bunch of text documents that can be linked together using hyperlinks. When you click on the link there and it takes you to another different text document. 

In `<a href="https://...">Hello</a>`, `a` is the html element, and `href` is the html attribute, and `https://...` is the link destination, `Hello` is the link text (underlined and highlighted in blue). 

In the project folder, if create a new html file, e.g.: "hobbies.html", then you can link it from the "index.html" using `<a href="hobbies.html">My Hobbies</a>` 

### HTML Tables
```
<table>
    <thead>
        <tr>
            <th>Year</th>
            <th>Work</th>
        </tr>
    </thead>
    
    <tbody>
        <tr>
            <td>2020-2021</td>
            <td>Student</td>
        </tr>
        <tr>
            <td>2021-2022</td>
            <td>Developer</td>        
        </tr>
    </tbody>
</table>
```
where `thead` means table head section, `tr` means table row, `th` means table head, `tbody` means table body section, and `td` means table data. `thead` and `tbody` are there because sometime we need to style the head and body differently.

### HTML Forms
```
<form class="" action="index.html" method="post">
    <label> Your name: </label>
    <input type="text" name="Your email" value="">
    
    <!--
    <label> Your password: </label>
    <input type="password" name="" value="">
    -->

    <label> Your email: </label>
    <input type="email" name="Your name: " value="">
    <label> Your message: </label>
    <textarea name="name" rows="10", cols="30"></textarea>
    <input type="color" name="" value="">
    
    <br>
    
    <label>Do you want to sign up to the email list?</label>
    <input type="checkbox" name="" value="">
    <input type="submit" name="">
</form>
```
There are other input type attributes, like file, date, radio, range, etc. If change the `action` attribute of the `form` into `mailto:lisa@email.com`, and add `enctype="text/plain"`, you will see your default email app pop up, contains content of this form, able to send it to this email address.

To get the full functionality of `form` component, will need JavaScript. 

## Intro to CSS
CSS - Cascading style sheets. Used to structure the website. 

### Inline CSS
To change the background color: `<body style="background-color: blue;">`, where `backgound-color` is a CSS property. Could also use hex value for the color: `<body style="background-color: #EAF6F6;">`

### Internal CSS
Inside the `head` section of the html file, add:
```
<style>
    body {
        background-color: #EAF6F6;
    }
</style>
```

And inside the `body` section, remove the inline CSS so only `<body>` is left.

To also change the style of the `<hr>`:  

```
<style>
    body {
        background-color: #EAF6F6;
    }
</style>
```

Note: no website is completely unstyled. Even before we add any CSS code, there's already some default CSS being applied by the browser. Can search "browser default css" to find them. 

To find how to change border style, search "boarder style css mdn". 

```
<style>
    body {
        background-color: #EAF6F6;
    }
    
    hr {
        background-color: white;
        border-style: none;
        height: 2px; 
        width: 100px; <!-- may not want a hard-coded val for diff screen sizes, so can use a percentage like 30% -->
    }
    
    img {
        height: 20px;
    }
</style>
```

To view boxes of each elements in Chrome, get `Pesticide for Chrome` plugin. In its settings, turn on "Allow access to file URLs". 

To change `<hr>` to a few gray dots:
```
hr {
    border-style: dotted none none;
    width: 10%;
    border-color: grey;
    border-width: 10px;
}
```

### External CSS
To reuse this style across all website pages. 

Create a new folder "CSS" in the project folder, and add a new file "styles.css" and move below css code to this file.
```
body {
    background-color: #EAF6F6;
}

hr {
    background-color: white;
    border-style: none;
    height: 2px; 
    width: 100px; <!-- may not want a hard-coded val for diff screen sizes, so can use a percentage like 30% -->
}
```
In the html header section, add this link to this external css file: `<link rel="stylesheet" href="css/styles.css">`

To change the color of the text of the h1 tag, add this to the css file:
```
h1 {
    color: #66BFBF;
}
```

In terms of `priority`, inline css > internal css > external css. It is best practice to implement all styles inside the external css. 

















