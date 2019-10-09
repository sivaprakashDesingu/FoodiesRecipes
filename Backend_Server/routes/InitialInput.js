var express = require('express');
var router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
var product_controller = require('../controllers/InitialInput');


// a simple test url to check that all of our files are communicating correctly.
router.get('/test', product_controller.test);


router.post('/create', product_controller.InitialInput_create);

router.get('/get', product_controller.InitialInput_details);




module.exports = router;