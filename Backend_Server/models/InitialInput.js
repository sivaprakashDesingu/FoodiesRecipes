var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var InitialInput = new Schema({
    cookingSkill:String,
    isVegeterian:Boolean,
    userId:String
});


// Export the model
module.exports = mongoose.model('InitialInput', InitialInput);