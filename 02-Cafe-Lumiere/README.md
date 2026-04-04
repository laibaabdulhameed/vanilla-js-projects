# ☕ Cafe Lumiere

A responsive cafe website built with HTML, CSS, and JavaScript.
Project 02 from my Vanilla JS Projects series.

## Features

- Responsive navbar with hamburger menu
- Hamburger animates into X when open
- Smooth slide-in mobile dropdown
- Closes on outside click or link click
- Menu cards with hover effects
- Fully responsive on desktop, tablet, and mobile

## Concepts Learned

### HTML
- Semantic tags — nav, section, button
- Why hamburger uses button not div
- Importance of matching opening and closing tags

### CSS
- CSS variables with :root
- box-sizing border-box and why it matters
- Flexbox — flex-wrap, justify-content, align-items
- position fixed, absolute, relative differences
- transform translateY to hide and show mobile menu
- transition for smooth animations
- after pseudo-element for underline hover effect
- nth-child for hamburger X animation
- media queries for responsive design
- pointer-events none to block clicks on hidden elements
- display none vs opacity 0 difference

### JavaScript
- DOM manipulation — getElementById, querySelectorAll
- Event listeners — addEventListener click
- classList toggle, add, remove
- contains to detect outside clicks
- forEach to loop over NodeList

## 🐛 Bugs Fixed

- Missing closing div caused last 2 cards to break layout
- Typo transition width was written as with
- Typo mobil-menu did not match HTML class name
- padding 0 200px on about text broke mobile layout
- href links missing hash symbol
- flex-direction column removed from cards container

## Responsive Breakpoints

- Default — Desktop
- max-width 768px — Tablets and phones
- max-width 480px — Small phones

## How to Run

- Clone or download the project folder
- Open in VS Code
- Right click index.html and open with Live Server

Built by Laiba | April 2026 | Vanilla JS Projects 02
 
