const express = require('express');
let books = require("./booksdb.js");
let isValid = require("./auth_users.js").isValid;
let users = require("./auth_users.js").users;
const public_users = express.Router();


public_users.post("/register", (req,res) => {
  //Write your code here
  const username = req.body.username
  const password = req.body.password
  const newuser = {
    "username" : username,
    "password" : password
   }
  if(users.includes(username)){
    return res.status(300).json({ message: `User ${username}  already exists` })
  }else{
    if(isValid(username)){
      users.push(newuser)
      return res.status(300).json({message: `User ${username} registered successfully`})
    }else{
      return res.status(300).json({message: "Invalid username"})
    }
  }
});

// Get the book list available in the shop
public_users.get('/',function (req, res) {
    
  return res.status(300).json(JSON.stringify(books, null, 4))
});

// Get book details based on ISBN
public_users.get('/isbn/:isbn',function (req, res) {
   const ISBN = req.params.isbn
   return res.status(300).json(books[ISBN])
 });
  
// Get book details based on author
public_users.get('/author/:author',function (req, res) {
  //Write your code here
  const author = req.params.author
  const filteredBooks = []

  for (const key in books) {
    if (books.hasOwnProperty(key)) {
      const book = books[key]
      if (book.author === author) {
        filteredBooks.push(book)
      }
    }
  }
  return res.status(300).json(filteredBooks);
});

// Get all books based on title
public_users.get('/title/:title',function (req, res) {
  //Write your code here
  const title = req.params.title
  const filteredBooks = []
  for (const key in books) {
    if (books.hasOwnProperty(key)) {
      const book = books[key]
      if (book.title === title) {
        filteredBooks.push(book)
      }
    }
  }
  return res.status(300).json(filteredBooks);
});

//  Get book review
public_users.get('/review/:isbn',function (req, res) {
  //Write your code here
  const ISBN = req.params.isbn
  return res.status(300).json(books[ISBN].reviews)
});

module.exports.general = public_users;
