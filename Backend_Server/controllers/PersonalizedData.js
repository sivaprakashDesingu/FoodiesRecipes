var PersonalizedData = require('../models/PersonalizedData');
const helper = require("../helper/helper");
const Promise = require("bluebird");

//Simple version, without validation or sanitation

exports.test = function (req, res) {
    res.send('PersonalizedData controller!');
};

exports.save = function (request, response) {
    const userInput  = request.body;
    const { emailId } = request.userData
    console.log(request.body)
    console.log('PersonalizedData insert API =>', emailId);
    const insertData = new PersonalizedData({
        userLevel: userInput.cookingSkill,
        userType: userInput.isVegeterian,
        emailId: emailId
    })
    insertData.save()
        .then(item => {
            PersonalizedData.find({ emailId: emailId }, function (err, result) {
                response
                    .status(200)
                    .json({
                        "status": "Success",
                        "message": "Data stored",
                        "data": result[0]
                    });
                return
            });
        })
        .catch(err => {
            response
                .status(400)
                .json({
                    "status": "Failed",
                    "message": "Unable to store data!!",
                    "data": err && err.message
                });
            return
        });

};

exports.get = function (request, response) {
    const { emailId } = request.userData
    console.log('PersonalizedData Fetch API', emailId);
    PersonalizedData.find({ emailId: emailId }, function (err, result) {
        if (err || result.length == 0) {
            response
                .status(400)
                .json({
                    "status": "User not yet given",
                    "message": "No data found",
                    "data": null
                });
            return
        } else {
            response
                .status(200)
                .json({
                    "status": "Success",
                    "message": "User has Pesonalized data",
                    "data": result[0]
                });
            return
        }

    });
};

exports.update = function (request, response) {
    const { userInput } = request.body;
    const { emailId } = request.userData
    console.log(userInput)
    console.log('PersonalizedData Update API =>', emailId);
    let query = {
        "emailId": emailId,
    };
    let setValue = {
        "$set": { userLevel: userInput.cookingSkill, userType: userInput.isVegeterian }
    }

    PersonalizedData.updateMany(query, setValue, function (err, numAffected) {

        if (err) {
            response
                .status(400)
                .json({
                    "status": "Unable to update",
                    "message": "May cause the DUPLICATE value",
                    "data": null
                });
            return
        } else {
            PersonalizedData.find({ emailId: emailId }, function (err, result) {
                response
                    .status(200)
                    .json({
                        "status": "Success",
                        "message": "Data Updated",
                        "data": result[0]
                    });
                return
            });
        }
    })


}; 