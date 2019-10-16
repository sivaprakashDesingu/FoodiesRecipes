
const uuid = require('uuid/v1');

module.exports = {
    generateToken: function() {
        return uuid();
    }
}