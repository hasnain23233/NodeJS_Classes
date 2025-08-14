📘 Node.js Backend Learning Guide – A to Z Topics

This repository is a complete learning guide for backend development with Node.js.
It covers Node.js fundamentals, server creation, request handling, Express.js, database integration (SQL & NoSQL), authentication, and advanced topics for building scalable web applications.

📚 Topics Covered
1. Introduction to Backend & Node.js

What is Backend Development?

Role of Backend in Web Applications

Frontend vs Backend

What is Node.js?

Node.js architecture (V8 Engine, Libuv, Event Loop)

Event-driven, Non-blocking I/O model

2. Node.js Fundamentals

Installing Node.js

REPL (Read-Eval-Print-Loop)

Global objects: __dirname, __filename, process

Modules in Node.js (CommonJS & ES Modules)

Importing and exporting modules

3. Core Node.js Modules

fs (File System) → Reading, Writing, Deleting files, Creating directories

path → Path handling (path.join, path.resolve)

http → Creating servers, handling requests/responses

url → Parsing URLs & query strings

events → EventEmitter

os → System information

4. Working with Files & CLI

Reading and writing files (Sync vs Async)

Appending & deleting files

Creating folders

Command line input with process.argv

Building CLI tools in Node.js

5. Server-Side Development

Creating a server with http.createServer()

Understanding req and res objects

Sending HTML, JSON, plain text

Setting Content-Type headers

Handling query params & dynamic URLs

6. npm & Packages

Installing and managing packages with npm

package.json and package-lock.json

Installing devDependencies

Using external modules (e.g., nodemon, chalk, dotenv)

7. Asynchronous Programming

Callbacks

Promises

async/await

Error handling in async code

8. Express.js Framework

What is Express & why use it?

Installing and setting up Express

Middleware (built-in, custom, third-party)

Serving static files (express.static())

Routing (GET, POST, PUT, DELETE)

Route parameters & query strings

9. Template Engines

EJS basics (<%= %> syntax)

Passing dynamic data to templates

Layouts & partials

Conditional rendering & loops

10. MVC Architecture

Model → Handles data logic

View → Handles UI templates

Controller → Handles requests & responses

Folder structure for MVC in Node.js

11. Databases

SQL

Introduction to SQL

Connecting MySQL/PostgreSQL with mysql2 or sequelize

CRUD operations in SQL

Parameterized queries

NoSQL (MongoDB)

Introduction to MongoDB & MongoDB Atlas

GUI with MongoDB Compass

Connecting using Mongoose

MongoDB CRUD with Mongoose (save, find, findById, findByIdAndUpdate, findByIdAndDelete)

12. Forms & Data Handling

Handling POST requests

Parsing form data (body-parser, express.urlencoded)

Saving form data to file or database

13. Authentication & Authorization

Sessions & Cookies (express-session)

JSON Web Tokens (JWT)

Protecting routes

Password hashing with bcrypt

14. File Uploads

Handling file uploads with multer

Uploading multiple files

Storing files locally vs cloud (AWS S3, Cloudinary)

15. Environment Variables

Using .env with dotenv

Keeping secrets safe

16. Advanced Topics

Error handling middleware in Express

API development with REST principles

Pagination & filtering in APIs

CORS handling

Nodemailer for sending emails

Rate limiting (express-rate-limit)

Security best practices (helmet, xss-clean)

17. Deployment

Preparing Node.js app for production

Deploying to Heroku, Vercel, or Railway

Deploying to VPS with PM2

💡 Pro Tip:
Tick each topic ✅ when completed in README so you always know your progress.
