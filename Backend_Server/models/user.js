var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var User = new Schema({
    id: {
        type: Number,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    emailId: {
        type: String,
        required: true,
        unique: 'emailId'
    },
    fullName: {
        type: String,
        required: true
    },
    accessToken: {
        type: String,
        required: true,
        allowNull: false,
        unique: 'access_token'
    }
});


// Export the model
module.exports = mongoose.model('User', User);