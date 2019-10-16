var express = require('express');
var router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
var userControll = require('../controllers/user');


// a simple test url to check that all of our files are communicating correctly.
router.get('/test', userControll.test);
router.get('/user', userControll.userDetails);
router.get('/isLoggedIn',userControll.isLoggedIn)
router.post('/register',userControll.register)


module.exports = router;