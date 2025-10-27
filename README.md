# Frontend Mentor - News homepage solution


## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)




## Overview

### The challenge

Users should be able to:

- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![](./screenshot.jpg)



### Links

- Solution URL: []
- Live Site URL: [https://sayon-okai.github.io/news-homepage-main/]

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- CSS Grid
- Mobile-first workflow
- Js



### What I learned

I was able to used css and jQuery to style and add interactivity to side bar

```css
  .sidebar {
    position: fixed;
    top: 0;
    right: 0;
    height: 100vh;
    width: 250px;
    z-index: 999;
    background-color: #fff;
    display: none;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding-top: 10%;
}
```
```js


function showSideBar() {
    $(".sidebar").css("display", "flex");
}

function hideSideBar() {
    $(".sidebar").css("display", "none");
}


```

## Author

- Frontend Mentor - [Sayon-okai](https://www.frontendmentor.io/profile/Sayon-okai)
- GitHub - [Sayon-okai](https://github.com/Sayon-okai)



