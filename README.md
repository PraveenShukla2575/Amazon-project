# 🛒 Amazon Website Clone

## About This Project
This project is a fully functional front-end clone of the Amazon e-commerce website, built to master core and advanced JavaScript concepts. Following the curriculum from the "Super Simple Dev" JavaScript course, this repository demonstrates how a modern e-commerce platform is structured behind the scenes. 

Instead of relying on hard-coded HTML, this project is built dynamically. It fetches product data, renders the user interface on the fly, and manages complex state changes as users interact with the site. The goal of this project is to bridge the gap between basic JavaScript syntax and real-world software engineering principles like modularity, data management, and architectural design.

## Features
* **Dynamic Product Grid:** An interactive homepage displaying a catalog of products with images, ratings, and pricing.
* **Interactive Cart System:** Users can add items to their cart, select quantities, and see the cart notification update instantly.
* **Checkout & Order Calculation:** A dedicated checkout page that dynamically calculates item costs, shipping fees, tax rates, and the final order total.
* **Persistent Data:** The shopping cart data is saved locally, meaning users do not lose their selected items if they refresh the page.

---

## What I Learned & Used from JavaScript

This project relies heavily on vanilla JavaScript to handle logic and interactivity. Here are the core JS concepts utilized to build this application:

### 1. Dynamic DOM Manipulation
Instead of writing repetitive HTML for every single product, JavaScript is used to loop through data and generate the HTML structure dynamically (`innerHTML`). This makes the code scalable and easy to update.

### 2. Data Structures (Objects & Arrays)
Complex data—like product details (ID, name, price, image) and cart contents—are structured using Arrays and Objects. This project utilizes array methods like `.forEach()`, `.map()`, and `.filter()` to process and display this data efficiently.

### 3. ES6 Modules (Import / Export)
To keep the codebase clean and maintainable, the JavaScript is split into multiple files (e.g., separating the cart logic from the product data and the main UI logic). `import` and `export` statements are used to share code between these files, preventing massive, hard-to-read scripts.

### 4. Local Storage
To provide a realistic user experience, the `localStorage` API is used. Whenever a user adds an item to the cart or changes a quantity, the JavaScript converts the cart array into a JSON string (`JSON.stringify`) and saves it to the browser. Upon reload, it retrieves and parses (`JSON.parse`) the data to restore the cart state.

### 5. Event Handling & DOM Traversal
The project uses `addEventListener` to detect user clicks (like clicking "Add to Cart"). It also utilizes HTML `data-` attributes (dataset) to link specific buttons to specific product IDs, allowing the JavaScript to know exactly which item the user interacted with.

### 6. Managing Floating-Point Math
Handling money in JavaScript can cause precision errors (e.g., `0.1 + 0.2 = 0.30000000000000004`). This project implements best practices for financial calculations by converting currency to cents (integers) before doing math, and then converting it back to a formatted string for display.

---

## Tech Stack
* **HTML5:** Semantic structure and layout.
* **CSS3:** Styling, Flexbox, CSS Grid, and responsive design matching the Amazon UI.
* **JavaScript (ES6+):** Core logic, DOM manipulation, state management, and architecture.

---

> **⚠️ Note:** This is a front-end demonstration project built strictly for educational purposes. This website **does not support actual payments** and **does not have user authentication**. No real transactions can be processed.
