const async = require('async');
const Recipe = require('../models/Recipe');
const RecipeCatagory = require('../models/RecipeCatagory');
const User = require('../models/user');
const helper = require("../helper/helper");



exports.test = function (req, res) {
    res.send('Recipe controller!');
};

function suggessoinReciebyCategory(string) {
    return function (callback) {
        RecipeCatagory.find({ CategoryName: { '$regex': string, '$options': 'i' } })
            .exec(function (err, categoryList) {

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

    });

};


exports.recipeDetails = function (request, response) {
    const { emailId } = request.userData
    const { id } = request.params
    console.log(`API for fetching Single Recipe => ${emailId}`);
    console.log(`Record matching for  => ${id}`)

    Recipe.find(
        { $and: [{ _id: `${id}` }, { postedBy: `${emailId}` }] }
        , function (err, results) {
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
        });
};

exports.recipeListing = function (request, response) {
    const { emailId } = request.userData
    const { id } = request.params
    console.log(`API for fetching Group of recipe by id, ${emailId}`);
    console.log(`Record matching for  + ${id}`)
    RecipeCatagory.find({ CategoryName: { '$regex': id, '$options': 'i' } })
        .exec(function (err, categoryList) {

            const ids = categoryList.map(function (data) {
                return data._id
            })
            Recipe.find().where('recipeCategoryId')
                .in(ids)
                .exec(function (err, recipes) {
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
                                "data": recipes
                            });
                        return
                    }
                })
        })
};