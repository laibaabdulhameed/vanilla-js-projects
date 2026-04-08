# Psychology Quiz App

A browser-based quiz app built with vanilla JavaScript, HTML, and CSS. Tests your knowledge of psychology with 10 carefully crafted questions.

## Demo

Open `index.html` in your browser or run with Live Server in VS Code.

## Features

- Popup welcome screen before the quiz starts
- 10 psychology questions with 4 options each
- Correct answer highlighted in green, wrong in red
- Correct answer always revealed after a wrong selection
- Buttons disabled after answering to prevent multiple clicks
- Progress bar updates with each question
- Score tracked throughout the quiz
- Result screen shown at the end with final score
- Restart button to play again
- Responsive design for mobile and desktop

## Project Structure

```
03-Quiz-app/
├── index.html       # HTML structure
├── style.css        # Styling and layout
├── script.js        # Quiz logic and DOM manipulation
└── data.js          # Array of questions, options and correct answers
```

## How It Works

1. User lands on the popup welcome screen
2. Clicking "Get Start!" hides the popup and shows the quiz card
3. `showQuestion()` renders the current question and options
4. Clicking an option runs answer checking logic:
   - Correct → button turns green, score increments
   - Wrong → button turns red, correct answer highlighted green
   - All buttons disabled after click
5. After 1 second, `currentIndex` increments and next question loads
6. After all 10 questions, `showResult()` displays the final score
7. Clicking Restart resets everything back to the start

## Concepts Used

- DOM selection with `querySelector` and `querySelectorAll`
- Event listeners and `onclick` handlers
- `classList.add()` and `classList.remove()` for dynamic styling
- `forEach` loop to iterate over buttons
- `setTimeout` for delayed question transitions
- `style.display` to show and hide elements
- ES6 modules (`import` / `export`) for data separation
- CSS custom properties (variables) for theming

## What I Learned Building This

- How to think in **state** — tracking `currentIndex` and `scoreCount`
- Why **event listeners pile up** inside loops and how `onclick` fixes it
- How **silent JS errors** happen (typos in CSS property names don't throw errors)
- Using **DevTools** to debug what is actually in the DOM vs what you expect
- The difference between writing JS that **creates UI** vs JS that **controls visibility**

## Setup

No dependencies or build tools needed.

```bash
# Clone or download the project
# Open with VS Code and run Live Server
# OR simply open index.html directly in your browser
```

## Author

Built by Laiba as a learning project to practice vanilla JavaScript DOM manipulation.