# Frontend Mentor - Expenses chart component solution

This is a solution to the [Expenses chart component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/expenses-chart-component-e7yJBUdjwt). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Frontend Mentor - Expenses chart component solution](#frontend-mentor---expenses-chart-component-solution)
  - [Table of contents](#table-of-contents)
  - [Overview](#overview)
    - [The challenge](#the-challenge)
    - [Screenshot](#screenshot)
    - [Links](#links)
  - [My process](#my-process)
    - [Built with](#built-with)
    - [What I learned](#what-i-learned)
  - [Author](#author)
 


## Overview

### The challenge

Users should be able to:

- View the bar chart and hover over the individual bars to see the correct amounts for each day
- See the current day’s bar highlighted in a different colour to the other bars
- View the optimal layout for the content depending on their device’s screen size
- See hover states for all interactive elements on the page
- **Bonus**: Use the JSON data file provided to dynamically size the bars on the chart

### Screenshot

![](/images/desktop-active%20-%20screenshoot.png)
![](/images/mobile-active%20-%20screenshoot.png)


### Links

- Solution URL: <a href="https://github.com/hernanruscica/Frontend_mentor_expenses-chart-component">Solution repository</a>
- Live Site URL: <a href="https://hernanruscica.github.io/Frontend_mentor_expenses-chart-component/">Live Demo</a>

## My process

First the html structure with the BEM styles. 
Second the styles trying to get more similar with the demo design. I created modifiers for the BEM styles, to show the 
larger bar and hide the label of the bar amounts. Also to get a bigger font size and other colors.
Third the javascript. I use the fetch function to load the json file, once the file is all readed, i call one function to 
draw the data in the chart. it includes the name of the days, the amount, and an acumulator to show the total of the month.
The bar works with the height attribute in pixels, multiplicated by a scale factor.
Finally i use the mouseover and mouseout events to triggers the bars info show and hide.

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- BEM styles
- DOM manipulation
- json files 

### What I learned

This project is a good practice to remenber the json file readings and data manipulations.


## Author

- Website - [Cesar Hernan Ruscica](https://github.com/hernanruscica)
- Frontend Mentor - [@hernanruscica](https://www.frontendmentor.io/profile/hernanruscica)

