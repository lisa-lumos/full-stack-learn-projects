# How does websites work

`HTML` specifies the structure of the website, `CSS` is for styling the website, `JavaScript` files allow your website to have behavior. 

To open `Chrome Developer Tools`, right click on a component of a website, and click `Inspect`. It will highlight the part of the corresponding code that you clicked on. You can edit the text in the code. But when you refresh the website, all your editing will be gone, because it makes a new request to the server and load a fresh copy of the site. 

# Tools needed to get started

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

# Introduction to HTML

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

# The anatomy of an HTML tag

## Tag omission

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
## HTML attributes

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

# Building a HTML website

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

In the boiler plate, `<!DOCTYPE html>` declares the document type, it specifies which version of the html is used, which is `html 5` here. `head` part holds info about the site and tells browser how to handle the site. Inside `head`, if we add a title as `<title>Lisa's Personal Site</title>`, now right click the file and click `Copy Full Path`, we can paste it to Chrome to open it. Now you can see the `Lisa's Personal Site` shows on the browser tab. 

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



















