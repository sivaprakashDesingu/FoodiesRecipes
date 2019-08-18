const mongoose = require('mongoose');

const CookingInitialData = mongoose.Schema({
    cookingSkill:String,
    isVegeterian:Boolean,
})

module.exports = mongoose.model('CookingInitialData', CookingInitialData);