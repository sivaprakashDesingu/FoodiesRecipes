var express = require('express');
var router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
var personalizedData = require('../controllers/PersonalizedData');

// a simple test url to check that all of our files are communicating correctly.
router.get('/', personalizedData.test);
router.get('/get', personalizedData.get);
router.post('/save', personalizedData.save);
router.post('/update', personalizedData.update);

module.exports = router;