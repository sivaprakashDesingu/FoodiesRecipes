module.exports = (app) => {
    const CookingInitialData = require('../controllers/note.controller.js');

    // Create a new Note
    app.post('/notes', CookingInitialData.create);

    // Retrieve all Notes
    app.get('/notess', CookingInitialData.findAll);

    // Retrieve a single Note with noteId
    app.get('/notes/:noteId', CookingInitialData.findOne);

    // Update a Note with noteId
    app.put('/notes/:noteId', CookingInitialData.update);

    // Delete a Note with noteId
    app.delete('/notes/:noteId', CookingInitialData.delete);
}