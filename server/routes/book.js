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
        res.render('book/list', {title: 'Book List', BookList: bookList});
    }
  });
});

/* GET ROUTE for displaying ADD page - CREATE OPERATION */
router.get('/add', (req, res, next) => {
  res.render('book/add', {title: 'Add'});

});

/* GET ROUTE for processing ADD page - CREATE OPERATION */
router.post('/add', (req, res, next) => {
  let newBook = Book({
    "first": req.body.first,
    "last": req.body.last,
    "number": req.body.number,
    "email": req.body.email
  });

  Book.create(newBook, (err, Book) =>{
    if(err)
    {
      console.log(err);
      res.end(err);
    }
    else
    {
      res.redirect('/book-list')
    }
  });

});

/* GET ROUTE for displaying EDIT page - UPDATE OPERATION */
router.route('/edit/:id', (req, res, next) => {
  let id = req.params.id;

  Book.findById(id, (err, bookToEdit) =>{
    if(err)
    {
      console.log(err);
      res.end(err);
    }
    else
    {
      res.render('book/edit', {title: 'Edit Book', book: bookToEdit});
    }
  });

});

/* GET ROUTE for processing EDIT page - UPDATE OPERATION */
router.post('/edit/:id', (req, res, next) => {
  let id = req.params.id
  let updatedBook = Book({
    "_id": id,
    "first": req.body.first,
    "last": req.body.last,
    "number": req.body.number,
    "email": req.body.email
  });

  Book.updateOne({_id: id}, updatedBook, (err) => {
    if(err)
    {
      console.log(err);
      res.end(err);
    }
    else
    {
      res.redirect('/book-list')
    }
  })

});

/* GET ROUTE for performing DELETE page - DELETE OPERATION */
router.get('/delete/:id', (req, res, next) => {
  let id = req.params.id;

  Book.remove({_id: id}, (err) => {
    if(err)
    {
      console.log(err);
      res.end(err);
    }
    else
    {
      res.redirect('/book-list')
    }
  })

});

module.exports = router;