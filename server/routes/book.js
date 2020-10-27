let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

let passport = require('passport');
let bookController = require('../controllers/book');
const book = require('../models/book');

function requireAuth(req, res, next)
{
    if(!req.isAuthenticated())
    {
        return res.redirect('/login')
    }
    next();
}

/* GET users listing. */
router.get('/', requireAuth, bookController.displayBookList);

/* GET ROUTE for displaying ADD page - CREATE OPERATION */
router.get('/add', requireAuth, bookController.displayAddPage);

/* GET ROUTE for processing ADD page - CREATE OPERATION */
router.post('/add', requireAuth, bookController.processAddPage);

/* GET ROUTE for displaying EDIT page - UPDATE OPERATION */
router.get('/edit/:id', requireAuth, bookController.displayEditPage); 

/* GET ROUTE for processing EDIT page - UPDATE OPERATION */
router.post('/edit/:id', requireAuth, bookController.processEditPage);

/* GET ROUTE for performing DELETE page - DELETE OPERATION */
router.get('/delete/:id', requireAuth, bookController.performDelete);

module.exports = router;