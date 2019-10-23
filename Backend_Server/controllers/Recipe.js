var Recipe = require('../models/Recipe');
var RecipeCatagory = require('../models/RecipeCatagory');
var User = require('../models/user');
var async = require('async');
const helper = require("../helper/helper");
const Promise = require("bluebird");

//Simple version, without validation or sanitation

exports.test = function (req, res) {
    res.send('Recipe controller!');
};

function suggessoinReciebyCategory(string) {
    return function (callback) {
        RecipeCatagory.find({ CategoryName: { '$regex': string, '$options': 'i' } })
            .exec(function (err, categoryList) {
                //console.log(categoryList)
                const ids = categoryList.map(function (data) {
                    return data._id
                })
                Recipe.find().where('recipeCategoryId')
                    .in(ids)
                    .exec(function (err, recipes) {
                        callback(null, { categoryList, recipes });
                    })
            })
    }
}

function suggestionRecipe(string) {
    return function (callback) {
        Recipe.find({ recipeTitle: { '$regex': string, '$options': 'i' } })
            .exec(function (err, list) {
                callback(null, list);
            })
        
    }

}

exports.recipeAndRecipeCategoryList = function (request, response) {
    const { emailId } = request.userData
    const { q } = request.query
    console.log('API for fetching Category and Recipe list', emailId);
    console.log("Record matching for " + q)

    async.parallel({

        suggestionRecipeByCategory: suggessoinReciebyCategory(q),
        suggestionRecipe: suggestionRecipe(q)

    }, function (err, results) {
        if (err) {
            response
                .status(400)
                .json({
                    "status": "Failed",
                    "message": "Error",
                    "data": err | err.message
                });
            return
        } else {
            response
                .status(200)
                .json({
                    "status": "Ok",
                    "message": "Success",
                    "data": results
                });
            return
        }
        // results now equals to: results.one: 'abc\n', results.two: 'xyz\n'
    });

};
