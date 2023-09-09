const express = require('express');
const jwt = require('jsonwebtoken');
let books = require("./booksdb.js");
const session = require('express-session');
const regd_users = express.Router();

let users = [];

const isValid = (username)=>{ //returns boolean
  let userswithsamename = users.filter((user) => {
    return user.username === username
  })
  if (userswithsamename.length > 0) {
    return true
  } else {
    return false
  }
}

const authenticatedUser = (username,password)=>{ //returns boolean
//write code to check if username and password match the one we have in records.
  let validusers = users.filter((user) => {
    return user.username === username && user.password === password
  })
  if (validusers.length > 0) {
    return true
  } else {
    return false
  }
}
const app = express();
app.use(session({secret:"fingerprint"}, resave=true, saveUninitialized=true))
app.use(express.json());
//only registered users can login
regd_users.post("/login", (req,res) => {
  const username = req.body.username
  const password = req.body.password
  if(!isValid(username)){
    return res.status(300).json({message: `invalid username and password !`})
  }
  if(authenticatedUser(username, password)){
    let accessToken = jwt.sign({
      data: password
    },'access', { expiresIn: '1h' });

    req.session.authorization ={
      accessToken, username
    }
    return res.status(200).json({message: "login successful !", accessToken})
  }else{
    return res.status(300).json({message: "invalid username and password !"});
  }
});

// Add a book review
regd_users.put("/auth/review/:isbn", (req, res) => {
  //Write your code here
  return res.status(300).json({message: "Yet to be implemented"});
});

module.exports.authenticated = regd_users;
module.exports.isValid = isValid;
module.exports.users = users;
