var User = require('../models/user');
const helper = require("../helper/helper");
const Promise = require("bluebird");
//Simple version, without validation or sanitation
exports.test = function (req, res) {
    res.send('User controller!');
};

exports.userDetails = function (req, res) {
    User.find({}, function (err, user) {
        if (err) return next(err);
        res.send(user);
    })
};
exports.isLoggedIn = function (request, response) {
    //const { emailID } = request.params;
    const { emailID } = request.query;
    //response.send(request.query)
    // user.find({emailId:emailID})
    User.find({ emailId: emailID }, function (err, user) {
        if (err || user.length == 0) {
            response
            .status(400)
            .json({
                "status": "failed",
                "message": "Invalid User",
                "data": err && err.message
            });
        }
        response
            .status(200)
            .json({
                "status": "Success",
                "message": "Valid User",
                "data": user
            });

    });
};
exports.create = function (req, res) {
    res.send(helper.generateToken())
};
