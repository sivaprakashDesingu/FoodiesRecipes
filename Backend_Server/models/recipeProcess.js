var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var RecipeProcess = new Schema({
    id: {
        type: Number,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    steps: {
        type: Array,
        required: true,
    },
    recipeId:{
        type: Schema.Types.ObjectId,
        ref: "recipes"
    }
});


// Export the model
module.exports = mongoose.model('RecipeProcess', RecipeProcess);