# Intermediate CSS
## Favicons
Favicon is the icon that is shown on the left of the tab name when you open a webpage. You can create a favicon image from `favicon.cc`. Then after downloading, the file is named `favicon.ico`. Drag the favicon into the newly created image folder inside the project folder. And in the html file header section, add `<link rel="icon" href="images/favicon.ico">`. 

## HTML Divs
Each html element is treated as a box in CSS. A `div` is a special html element that allows us to divide our content in the website, so we can `structure each div separately`. By itself, it doesn't do anything unless you use css with it. div will have a height if it has content. 

For example, in the html file, we have:
```
<div class="">
    <h1>I'm Lisa</h1>
    <h4>I'm a developer. </h4>
</div>
```

And in css file, we have:
```
div {
    background-color: red;
}
```
By browser default, the `body` element has a margin of 8px. 

## The box model of website styling 
Even if the box (html element) has no height and width, it will have h and w to fit the content. Outside of the content, there is  a `padding` (that pushes the box outward, the outside edge of the padding is where the box ends), then a `border` (you can define its width and color etc.), then a `margin` (separtes boxes). Background color only affects the box area, so the margin and border's color are not defined by the background color of the element.  

## CSS Display property
By default, some html elements are block display, such as `<h1>` and `<p>`, and some elements default to other display properties. You can change the display property of any element. 

### Block
`block` elements take the whole width of the screen, effectivelly blocking other elements from sitting on its left or right. 

Common block elements: 
- Paragraphs `<p>`
- Headers `<h1>` to `<h6>`
- Divisions `<div>`
- Lists and list items `<ol>`, `<ul>`, `<li>`
- Forms `<form>`

For example, if you put two `<p>`s in html, and change their `background-color` to red, you will see that  each paragraph takes up the whole width of the screen, in red. 

You can change the width of block elements. 

### Inline
`inline` elements only takes up as much space as it needs to, in height and width. 

Common inline elements:
- Spans `<span>`
- Images `<img>` (kind of...)
- Anchors `<a>`

With inline elements, you cannot change the width. 

For example, `<p>I am a <span style="underline">programmer</span>.</p>`, then in the css file, you can define styles for "underline", and now all text will show up in the same line. 

### Inline-Block
If you want elements that can occupy the same line but also you can set their width, then you need `inline-block` display property. This is "like" how `<img>` elements behave. 

### None
`none` makes the element behaves as it does not exist. This can be useful if you want to hide something from the page, like answer to a quiz. An alternative to do this is to set the css property of `visibility` to `visibility=hidden;`, this would make this element disappear, but keeps its orginal position blank, taking up the space as it were still there. 

## HTML Display/positioning rules
- Content is everything
- Order of things shows up on screen comes from the html code
- Children sit on parents. 

## CSS Position property
### Static
All html elements are `static` position by default. Means they go along with the default html rules 

### Relative
`relative` position allows us to position the element relative to default (aka `static`). 

For example, if in css we have 
```
img {
    position: relative;
    left: 30px
}
```

Then this image will be pushed from left, therefore it moves rightward by 30px, compared with its default position. While other elements act as nothing has happened, as if the image were in its default position. 

When changing element's position property to `relative`, but do not specify any movement like `left`, it will affect nothing of the look of the element. 

### Absolute
`absolute` elements are placed relative to their parent which has a `relative` position property. For example, in html, you have a image inside a div, while in css file, you have: 
```
div {
    position: relative;
}
img {
    position: absolute;
    right: 30px;
}
```

Then the right edge of the image will have 30px distance from the right edge of the parent, which is the div. The parent can be the closest parent with a `relative` layout. 

Using `absolute` does affect the positon of other elements. As the `absolute` element is taken out of the flow of the html, and no longer considered as a part of the flow. 

### Fixed
`fixed` elements will stay as it is when you scroll the screen. This can be used when you have a navbar/sidebar that you want to be fixed during scrolling. 

## Work on the website
The easiest way to center everything on the screen is to add `text-align: center;` into the `body` selector. But if then you want to change the width of the block element such as `h1` to 10%, then it is no longer centered. So another way of horizontally centering an element is to add `margin: 0 auto;` into the `h1` selector. 

### Font styling in css
There are 2 major font families: `Serif` (looks old) and `Sans-serif`. To change font-family of `body` selector, add `font-family: sans-serif; ` in css. For most browsers, the default serif is the Times font, and the default sans-serif is the Arial font. 

To be more specifit of the font, can add the font in front of the more general font family: `font-family: verdana, sans-serif; `. This tells the browser to first look for verdana font, if the computer doesn't have verdana font, then it will default to whatever if the default font of sans-serif font that the system has - it potentially mean that your website looks different to what you see on your computer. 

There are so-called web-safe fonts, but in fact, no font is 100% safe. If you go to `cssfontstack.com`, you will see the installation rate for different fonts on different OS - none is 100%. 

To ensure everyone sees the exactly same font, would need font embedding. If go to `fonts.google.com`, can see a lot of font families to choose from, they are free for commercial use. If you click on a font, and select one of its styles, it will show you the `<link>` to add to the head section of html and what to add to css (like `font-family: 'Merriweather', serif;`). You can add a few fonts at once. The `<link>` specifies a location to grab it if users do not already have these fonts installed. 

### Lorem Ipsum
To place text paragraphs in a website before you have any content, could go to `loremipsumgenerator.com`. 

### icons
To find icons or images, could go to `flaticon.com`. To find animated Gifs, could go to `giphy.com`. 

### Font size
To set font size, use `font-size: 90px; `. On certain browsers, if user go to settings and change their default font sizes, then this font size doesn't change, because it is not a dynamic size. To make it dynamic, have 2 ways:  
1. Use percentage `font-size: 100%; `. 100% by default means 16px. So if we want 90px, considering 90/16=5.625, so need to set it to `font-size: 562.5%; `
2. Use em `font-size: 1em; `. Again, 1em is 16px. So 90px should be `font-size: 5.625em; `

Using dynamic font size makes your website accessible to everyone, like to users with visual impairments. If the user just use zoom, then it doesn't matter whether the font size if dynamic or not, it can always resize. 

Note that if we use `em` or `percentages`, then the font size is inherited. If in your `body`, you specify font-size is `2em`, then in `h1`, font-size is `2em`, then the actual size of `h1` becomes `4em`. In `CSS3`, there is `rem`, which is root em, means ignore the inherits, makes it less error-prone. 

### Floating
If we want the text to wrap around a image, need to change the `float` property of the image tag: `float: left; ` - this makes the image to be on the left and the text to sit on the right of the image. 

Float is one of the most commonly used and abused css properties. It has a lot of corner cases. It is only recommended to use for wrapping text, not other things. 

### Clear
If use `clear: left; ` on part of the text from prevoius step, then this part of the text will not wrap the image, instead, it will sit below the image. 





















