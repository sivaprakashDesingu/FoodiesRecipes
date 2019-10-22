var Recipe = require('../models/Recipe');
var RecipeCatagory = require('../models/RecipeCatagory');
var User = require('../models/user');
//var Recipe = require('../models/Recipe');
const helper = require("../helper/helper");
const Promise = require("bluebird");

//Simple version, without validation or sanitation

exports.test = function (req, res) {
    res.send('Recipe controller!');
};


function escapeRegExp(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

exports.recipeAndRecipeCategoryList = function (request, response) {
    const { emailId } = request.userData
    const { q } = request.query
    console.log('API for fetching Category and Recipe list', emailId);
    console.log("Record matching for " + q)
    
    RecipeCatagory.find({CategoryName : {'$regex' : q, '$options' : 'i'}},function(err,result){
        console.log(result)
        Recipe.find({
            
        },function(err,result){
            
        })
    })
    response.send("nice")
};
