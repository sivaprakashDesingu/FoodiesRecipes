var InitialInput = require('../models/InitialInput');

//Simple version, without validation or sanitation
exports.test = function (req, res) {
    res.send('Greetings from the Test controller!');
};

exports.InitialInput_create = function (req, res) {
    var data = new InitialInput(
        {
            cookingSkill:'Beginner',
            isVegeterian:false,
            serSessionID:"234r324kkjsfjsdokfjsfjor3rm"
        }
    );

    data.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send('InitialInput Created successfully')
    })
};

exports.InitialInput_details = function (req, res) {
    InitialInput.find({}, function (err, product) {
        if (err) return next(err);
        res.send(product);
    })
};

