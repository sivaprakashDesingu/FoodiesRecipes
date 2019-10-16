var InitialInput = require('../models/InitialInput');

//Simple version, without validation or sanitation
exports.test = function (req, res) {
    res.send('Initial Data controller!');
};

exports.InitialInput_details = function (req, res) {
    InitialInput.find({}, function (err, product) {
        if (err) return next(err);
        res.send(product);
    })
};

