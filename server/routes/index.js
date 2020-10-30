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

/* GET DISPLAY Log in page. */
router.get('/login', indexController.displayLoginPage);

/* GET PROCESS Log in page. */
router.get('/login', indexController.processLoginPage);

/* GET DISPLAY Register page. */
router.get('/register', indexController.displayRegisterPage);

/* GET PROCESS Register page. */
router.get('/register', indexController.processRegisterPage);

/* GET PERFORM Log out page. */
router.get('/logout', indexController.performLogout);



module.exports = router;
