# Frontend Mentor - Results summary component solution

This is a solution to the [Results summary component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/results-summary-component-CE_K6s0maV). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page
- **Bonus**: Use the local JSON data to dynamically populate the content

### Screenshot

![Implementation for the Results summary component coding challenge based on the design](./desktop-design-implemented.png)


### Links

- Solution URL: [Github Repo](https://github.com/lasse-cs/Results-Summary-Component)
- Live Site URL: [Live URL](https://lasse-cs.github.io/Results-Summary-Component/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Mobile-first workflow

### What I learned

In this project, I learnt about using media queries and HSL colours.
I am happy with the custom properties on each card to define the colour and icon of the form

```css
.summary-card#type {
  --card-color: var(--type-color);
  --card-icon: var(--type-icon);
}

.summary-card {
  background-color: var(--card-color);
  ...
}
```

