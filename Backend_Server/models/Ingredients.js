var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Ingredient = new Schema({
    id: {
        type: Number,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    Items: {
        type: Array,
        required: true,
    },
    recipeId:{
        type: Schema.Types.ObjectId,
        ref: "recipes"
    }
});


// Export the model
module.exports = mongoose.model('Ingredient', Ingredient);