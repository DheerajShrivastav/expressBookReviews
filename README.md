# Online Book Review Application - Backend

This is the backend server-side application for the "Online Book Review Application" project, which is part of the "Back-end Application Development with Node.js and Express" course on edX by IBM.

## Project Overview

In this project, you will assume the role of a back-end developer working for an online retailer that sells books. Your primary task is to develop a server-side application that stores, retrieves, and manages book ratings and reviews. This application will be used to provide various features for users, including:

- Retrieving a list of all books available in the bookshop
- Searching for specific books and retrieving their details based on the book's ISBN code, author names, and titles
- Retrieving reviews and comments for specified books
- User registration
- User login
- Adding a new review for a book (for logged-in users only)
- Modifying a book review (for logged-in users, but they can only modify their own reviews)
- Deleting a book review (for logged-in users, but they can only delete their own reviews)
- Allowing multiple users to access the application simultaneously to view and manage different book reviews simultaneously

This project involves developing a RESTful web service using Node.js and Express.js. A front-end developer in your team is working on the web-based client-side application that will communicate with this server-side application using REST.

## Getting Started

To start working on this project, follow these steps:

1. Fork the skeleton code repository into your own GitHub account.
2. Clone the forked repository locally into your development environment.
3. Install the necessary dependencies by running `npm install` in the project directory.

## Project Structure

The project structure includes several directories and files:

- **`controllers/`**: This directory contains the route handlers for different API endpoints.

- **`models/`**: Here, you define the data models used in the application.

- **`routes/`**: This directory holds the route definitions for the various API endpoints.

- **`tests/`**: You can write your tests in this directory using a testing framework like Mocha and Chai.

- **`utils/`**: This directory contains utility functions or modules that can be used throughout the project.

- **`app.js`**: The main application file where you configure and start the Express server.

## Implementing Features

Following are the features as HTTP methods in the Express server:

- Retrieve a list of all books.
- Search for books based on ISBN code, author names, and titles.
- Retrieve reviews/comments for specified books.
- User registration.
- User login.
- Adding a new review for a book (logged-in users only).
- Modifying a book review (logged-in users can modify only their own reviews).
- Deleting a book review (logged-in users can delete only their own reviews).

## Authentication

You will also implement Session and JWT (JSON Web Token) authentication to ensure that certain operations are accessible only to logged-in users.

## Enhancing Concurrency

To improve the user experience, you should enhance your code using Promises, Callbacks, or Async/Await functions to allow multiple users to interact with the application simultaneously. This ensures that users do not have to wait for each other's operations to complete.

## Testing

implemented features are thoroughly tested using tools like Postman and write unit tests for your code using a testing framework.



