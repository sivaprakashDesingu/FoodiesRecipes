var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var User = new Schema({
    id:{
        type: Number,
        required: true
    },
    fullName: {
        type: String,
        required: true
    },
    emailId: {
        type: String,
        required: true
    },
});


// Export the model
module.exports = mongoose.model('User', User);