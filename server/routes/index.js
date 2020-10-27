let express = require('express');
let router = express.Router();

let indexController = require('../controllers/index')

/* GET Default page. */
router.get('/', indexController.displayHomePage);

/* GET Home page. */
router.get('/home', indexController.displayHomePage);


/* GET About page. */
router.get('/about', indexController.displayAboutPage);

/* GET Projects page. */
router.get('/projects', indexController.displayProjectsPage);


/* GET Services page. */
router.get('/services', indexController.displayServicesPage);


/* GET Contact page. */
router.get('/contact', indexController.displayContactPage);


/* GET Login page. */
router.get('/login', indexController.displayLoginPage);



module.exports = router;
