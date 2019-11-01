var express = require('express');
var router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
var Recipe = require('./../controllers/Recipe');

// a simple test url to check that all of our files are communicating correctly.
router.get('/', Recipe.test);
router.get('/recipeAndRecipeCategoryList', Recipe.recipeAndRecipeCategoryList);
router.get('/recipDetails/:id',Recipe.recipeDetails)
router.get('/recipeListing/:id',Recipe.recipeListing)
module.exports = router;