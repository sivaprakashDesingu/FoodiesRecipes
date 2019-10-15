var PersonalizedData = require('../models/PersonalizedData');
const helper = require("../helper/helper");
const Promise = require("bluebird");
//Simple version, without validation or sanitation
exports.test = function (req, res) {
    res.send('PersonalizedData controller!');
};

exports.save = function (request, response) {
    const { emailID } = request.query;
    console.log('PersonalizedData insert API =>', emailID);
};

exports.get = function (request, response) {
    //console.log(request)
    const { emailId, fullName } = request.body;
    console.log('PersonalizedData Fetch API', emailId);
    
};

exports.update = function (request, response) {
    const {emailId} =  request.userData
    console.log('PersonalizedData Update API', emailId);
    
}; 