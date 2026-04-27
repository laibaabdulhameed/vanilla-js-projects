# 💰 Expense Tracker

A vanilla JS web app to track your income and expenses 
with a live dashboard, pie chart, and local storage.

## Features
- Add income and expense transactions
- Delete transactions
- Filter by type, category, and date
- Search by category
- Pie chart showing expenses by category
- Data persists after page refresh using localStorage

## What I Learned
- DOM manipulation and event listeners
- localStorage — saving and loading data
- Array methods — filter, map, reduce
- Single source of truth pattern
- Generating HTML dynamically with template literals
- Chart.js for data visualization
- BEM naming convention
- CSS Grid and Flexbox
- Debugging — reading console errors, fixing null issues

## Decisions I Made
- Used a single transactions array as source of truth
  — all UI rebuilds from this one array
- Separated concerns — addTransaction, renderList, 
  renderSummary, renderChart each have one job
- Used Chart.js instead of building pie chart from 
  scratch — right tool for the job

## Known Limitations
- No edit functionality yet
- Chart only shows expenses, not income breakdown
- No date range filtering
- Not production ready — built for learning vanilla JS
  before moving to frameworks

## Tech Used
- HTML5
- CSS3 (Grid, Flexbox, CSS Variables)
- Vanilla JavaScript (ES6+)
- Chart.js

## Project 05 of Vanilla JS Roadmap
Built with production habits — separate files, BEM, 
mobile first, semantic HTML, no var, error handling.