const Promise = require('bluebird');
const query = require('./../database');
var User = require('../models/user');

module.exports = {
    authendicate: function (request, response, next) {
        const { accesstoken } = request.headers;
        console.log(accesstoken)
        
        User.find({ accessToken: accesstoken }, function (err, user) {
            console.log(user.length)
            if (user.length >= 1) {
                request.userData = user[0]
                return next();
            } else {
                return response
                    .status(400)
                    .json({
                        "status": "UNAUTHORISED",
                        "message": "unknown user"
                    });
            }
        })
    }
}