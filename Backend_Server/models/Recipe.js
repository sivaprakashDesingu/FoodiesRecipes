var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var RecipeCatagory = require('./RecipeCatagory')
var Recipe = new Schema({
    id: {
        type: Number,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    recipeTitle: {
        type: String,
        required: true,
    },
    Recipetags: {
        type: Array,
        required: true
    },
    recipeCategoryId:[{
        type: Schema.Types.ObjectId,
        ref: RecipeCatagory
    }],
    cookTime: {
        type: String,
        required: true,
    },
    recipeCuisienId:{
        type:String,
        required:false,
    },
    recepeType:{
        type:Boolean,
        required:true,
    },
    availaleStreaming:{
        type: String,
        required: true,
    },
    postedBy :{
        type: String,
        required: true,
        allowNull: false,
    },
    postedOn:{
        type:String,
        required: true
    }
    /*recipes: {
        RecipeId: {
            type: Schema.Types.ObjectId,
            primaryKey: true
        },
        recipeTitle: {
            type: String,
            required: true
        },
        Recipetags: {
            type: Array,
            required: true
        },
        cookTime: {
            type: String,
            required: true,
        },
        recipeCategoryId: [{
            type: Schema.Types.ObjectId,
            ref: RecipeCatagory
        }],
        recipeCuisienId: {
            type: String,
            required: false,
        },
        recepeType: {
            type: Boolean,
            required: true,
        },
        availaleStreaming: {
            type: String,
            required: true,
        },
        postedOn: {
            type: String,
            required: true
        }
    },
    user: {
        postedBy: {
            type: String,
            required: true,
            allowNull: false,
            unique: 'postedBy'
        },
    }*/
});


// Export the model
module.exports = mongoose.model('Recipe', Recipe);