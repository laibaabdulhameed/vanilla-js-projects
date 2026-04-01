☕ Café Lumière
A responsive café website built with vanilla HTML, CSS, and JavaScript.
This is project 02 from my Vanilla JS Projects series.
🌐 Live Preview
Open index.html in your browser or use Live Server in VS Code.
📁 Project Structure
02-Cafe-Lumiere/
├── index.html
├── style.css
└── script.js
✨ Features
Responsive navbar with hamburger menu
Smooth slide-in mobile dropdown
Hamburger ☰ animates into X when open
Closes on outside click or link click
Menu cards with hover effects
Fully responsive on desktop, tablet, and mobile
CSS transitions and animations throughout
💡 Concepts Learned
HTML
Semantic structure — <nav>, <section>, <button>
Why hamburger uses <button> not <div>
aria-label for accessibility
Importance of matching opening and closing tags
CSS
CSS variables with :root
box-sizing: border-box and why it matters
Flexbox — flex-wrap, justify-content, align-items
position: fixed, absolute, relative and their differences
transform: translateY() to hide/show mobile menu
transition for smooth animations
::after pseudo-element for underline hover effect
nth-child() for hamburger X animation
@media queries for responsive design — desktop first approach
pointer-events: none to block clicks on hidden elements
z-index for layering elements
display: none vs opacity: 0 difference
JavaScript
DOM manipulation — getElementById, querySelectorAll
Event listeners — addEventListener('click', ...)
classList.toggle(), classList.add(), classList.remove()
contains() to detect outside clicks
forEach to loop over NodeList
CSS transitions triggered by JS class changes
🐛 Bugs Fixed Along the Way
Missing </div> causing last 2 menu cards to fall outside flex container
transition: with 0.3 typo — should be transition: width 0.3s
.mobil-menu typo — class name didn't match HTML
padding: 0 200px on about text — broke layout on small screens
href="menu" missing # — links weren't scrolling to sections
flex-direction: column on cards container — removed for desktop rows
📱 Responsive Breakpoints
Breakpoint
Target
Default
Desktop
max-width: 768px
Tablets and phones
max-width: 480px
Small phones (iPhone SE)
🚀 How to Run
Clone or download the project folder
Open in VS Code
Right click index.html → Open with Live Server
*Built by Laiba | April 2026 | Vanilla JS Projects #02*