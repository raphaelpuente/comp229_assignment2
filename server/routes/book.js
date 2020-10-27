let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

//Connect to our Book Model
let Book = require('../models/book')
let bookController = require('../controllers/book');
const book = require('../models/book');

/* GET users listing. */
router.get('/', bookController.displayBookList);

/* GET ROUTE for displaying ADD page - CREATE OPERATION */
router.get('/add', bookController.displayAddPage);

/* GET ROUTE for processing ADD page - CREATE OPERATION */
router.post('/add', bookController.processAddPage);

/* GET ROUTE for displaying EDIT page - UPDATE OPERATION */
router.get('/edit/:id', bookController.displayEditPage); 

/* GET ROUTE for processing EDIT page - UPDATE OPERATION */
router.post('/edit/:id', bookController.processEditPage);

/* GET ROUTE for performing DELETE page - DELETE OPERATION */
router.get('/delete/:id', bookController.performDelete);

module.exports = router;