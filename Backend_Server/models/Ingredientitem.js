var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var IngredientItem = new Schema({

    name: {
        type: String,
        required: true,
    },
    tag:{
        type: String,
        required: false,
    },
    image:{
        type: String,
        required: false,
    }
});


// Export the model
module.exports = mongoose.model('IngredientItem', IngredientItem);