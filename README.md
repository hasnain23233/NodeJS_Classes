# 📘 Node.js Backend Learning Guide

This repository is a complete guide for learning backend development with **Node.js**. It covers essential Node.js concepts, server-side logic, file system handling, asynchronous behavior, and Express.js for building robust web applications.

---

## 📚 Topics Covered

### 1. 📥 Introduction to Backend
- What is Backend Development?
- Role of Backend in Web Apps
- Frontend vs Backend

### 2. 📁 File System in Node.js
- `fs` module usage
- Reading, writing, deleting files
- Creating directories

### 3. 🖥️ REPL (Read-Eval-Print-Loop) Example
- What is REPL?
- Using REPL for testing small snippets
- Working with variables/functions interactively

### 4. 🔧 Fundamentals of Node.js
- V8 JavaScript Engine
- Event-driven architecture
- Non-blocking I/O model

### 5. ⚙️ Core Modules and Global System
- Built-in modules (`http`, `fs`, `path`)
- Global objects: `__dirname`, `__filename`, `process`, `global`

### 6. 🌐 Creating Server in Node.js
- Using `http.createServer()`
- Handling requests and responses
- Listening on a port

### 7. 📩 Understanding Request and Response Parameters
- What is `req` and `res` in Node.js?
- Reading URL, headers, methods
- Sending status codes and responses

### 8. 📦 External Packages and `package.json`
- Installing packages using `npm`
- Managing dependencies
- Role of `package.json` and `package-lock.json`

### 9. 📤 Understanding Server Responses
- Using `res.write()`, `res.end()`
- Sending HTML, JSON, plain text
- Content-Type headers

### 10. 📥 Understanding Server Request Parameters
- Extracting URL parameters
- Handling query strings
- Using `url` module to parse incoming requests

### 11. 💻 Getting Input from Command Line
- Accessing `process.argv`
- Creating CLI tools with Node.js

### 12. 📨 Handling Form Requests in Node.js
- Collecting data from POST requests
- Parsing form data (manually or with modules like `body-parser`)

### 13. 📝 Creating Files with Requested Data
- Writing dynamic content to file
- Logging input into `.txt` or `.json` format
- Overwriting or appending data

### 14. 🔁 Asynchronous vs Synchronous
- Difference between sync and async code
- Using callbacks
- Promises and `async/await` examples

### 15. ✍️ CRUD with File System
- Create: Writing new files
- Read: Reading file contents
- Update: Overwriting/appending
- Delete: Removing files and folders

### 16. 🛣️ Path and Global Modules
- Working with `path.join()`, `path.resolve()`
- Safely managing file paths
- Understanding Global Modules in Node.js

---

## ⚡ Express.js Basics

### 17. 🚀 Introduction to Express
- What is Express?
- Why use Express over vanilla Node.js?

### 18. ⚙️ Adding Middleware
- What is middleware?
- Using custom and built-in middleware
- Example: Logging requests, parsing data

### 19. 🛤️ Handling Routes
- Defining `GET`, `POST`, `PUT`, `DELETE` routes
- Organizing routes using Router
- Sending responses and status codes

---
### 20. 🧩 Using Tailwind CSS with Static Files
- How to configure Tailwind CSS in a Node.js + Express setup  
- Serving static CSS and JS using `express.static()`  
- Example structure for `public/` folder  

### 21. 🌐 Dynamic UI using `.EJS`
- Setting up `EJS` as view engine  
- Passing dynamic data from backend to frontend  
- Embedding JavaScript logic directly into HTML  

### 22. ❓ What is EJS?
- EJS stands for **Embedded JavaScript Templating**  
- It allows you to generate HTML markup with plain JavaScript  
- Similar to templating engines like Handlebars, Pug, etc.  

### 23. 🧠 Model-View-Controller (MVC) Architecture
- MVC is a design pattern for organizing backend projects  
- **Model** – handles data and business logic  
- **View** – displays content (EJS templates)  
- **Controller** – handles routes and input/output logic  
- Benefits: Scalability, separation of concerns, cleaner code  

### 24. 🧭 Dynamic Paths and Model Deep Dive
- How to handle dynamic routes like `/user/:id`, `/product/:slug`  
- Extracting params using Express  
- Integrating model logic to fetch specific data  
- Deep dive into organizing models for reusability  

---

## ✅ Requirements

- Node.js v18+
- Express.js
- EJS and Tailwind CSS setup
- Basic understanding of JavaScript & HTML

---

## 👨‍💻 Author

**Hasnain Khushi**  
📧 hasnainkhushii@gmail.com  
🔗 [GitHub](https://github.com/hasnain23233)  
📍 Gilgit, Pakistan


## ✅ Requirements

- Node.js (v18+)
- Basic knowledge of JavaScript
- Text editor like VS Code

---

## 🚀 How to Use

```bash
git clone https://github.com/your-username/nodejs-backend-intro.git
cd nodejs-backend-intro
npm install
node index.js
