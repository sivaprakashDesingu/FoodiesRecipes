const mongoose = require('mongoose');

const userInitialState = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    cookingSkill:String,
    isVegeterian:Boolean,
});

module.exports = mongoose.model('userInitialState', userInitialState);