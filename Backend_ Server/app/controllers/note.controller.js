const CookingInitialData = require('../models/note_model.js');

// Create and Save a new Note
exports.create = (req, res) => {
    console.log("hi")
    // Validate request
    if (!req.body.content) {
        return res.status(400).send({
            message: "Note content can not be empty"
        });
    }


    // Create a Note
    const CookingInitialData = new CookingInitialData({
        cookingSkill: String,
        isVegeterian: false,
    });

    // Save Note in the database
    CookingInitialData.save()
        .then(data => {
            res.send('Product Created successfully')
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the Note."
            });
        });
};
// Retrieve and return all notes from the database.
exports.findAll = (req, res) => {
    CookingInitialData.find()
        .then(notes => {
            console.log(CookingInitialData.find());
            res.send(notes);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving notes."
            });
        });
};

// Find a single note with a noteId
exports.findOne = (req, res) => {

};

// Update a note identified by the noteId in the request
exports.update = (req, res) => {

};

// Delete a note with the specified noteId in the request
exports.delete = (req, res) => {

};
