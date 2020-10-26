var express = require('express');
var router = express.Router();
let mongoose = require('mongoose');

//Connect to our Book Model
let Book = require('../models/book')

/* GET users listing. */
router.get('/', (req, res, next) => {
  Book.find((err, bookList)=>{
    if(err)
    {
      return console.error(err);
    }
    else
    {
        res.render('book', {title: 'Book List', BookList: bookList})
    }
  });
});

module.exports = router;