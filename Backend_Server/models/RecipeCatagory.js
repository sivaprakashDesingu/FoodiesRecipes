var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var RecipeCatagory = new Schema({
    id: {
        type: Number,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    CategoryName: {
        type: String,
        required: true,
    },
});


// Export the model
module.exports = mongoose.model('RecipeCatagory', RecipeCatagory);