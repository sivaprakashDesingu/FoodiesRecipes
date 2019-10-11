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
    const { emailID } = request.query;
    console.log('Checking Is user already register or not =>', emailID);

    User.find({ emailId: emailID }, function (err, user) {
        console.log(user)
        if (err || user.length == 0) {
            response
                .status(400)
                .json({
                    "status": "failed",
                    "message": "Invalid User",
                    "data": null
                });
            return
        }else{
            console.log("user exist...")
            response
            .status(200)
            .json({
                "status": "Success",
                "message": "Valid User",
                "data": user
            });
        return
        }
        
    });
};

exports.register = function (request, response) {
    //console.log(request)
    const { emailId, fullName } = request.body;
    console.log('Register API CALL activated',emailId);
    const insertData = new User({
        emailId,
        fullName,
        accessToken: helper.generateToken()
    })

    insertData.save()
        .then(item => {
            User.find({ emailId: emailId }, function (err, user) {
                response
                    .status(200)
                    .json({
                        "status": "Success",
                        "message": "Registered Successfully",
                        "data": user
                    });
                return 
            });
        })
        .catch(err => {
            
            response
                .status(400)
                .json({
                    "status": "Failed",
                    "message": "Unable to register!!",
                    "data": err && err.message
                });
            return
        });
};
