var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PersonalizedData = new Schema({
    id: {
        type: Number,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    userLevel: {
        type: String,
        required: true,
        unique: 'emailId'
    },
    userType: {
        type: Boolean,
        required: true
    },
    emailId: {
        type: String,
        required: true,
        allowNull: false,
        unique: 'access_token'
    }
});


// Export the model
module.exports = mongoose.model('PersonalizedData', PersonalizedData);