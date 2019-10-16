const Promise = require('bluebird');
const query = require('./../database');
var User = require('../models/user');

module.exports = {
    authendicate: function (request, response, next) {
        const { accesstoken } = request.headers;
               
        User.find({ accessToken: accesstoken }, function (err, user) {
            if (user.length >= 1) {
                console.log("Authorized User.........")
                request.userData = user[0]
                return next();
            } else {
                console.log("UnAuthorized User.........")
                return response
                    .status(400)
                    .json({
                        "status": "UNAUTHORISED",
                        "message": err && err.message,
                        "data": err
                    });
            }
        })
    }
}