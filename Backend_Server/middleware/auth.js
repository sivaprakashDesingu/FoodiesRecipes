const Promise = require('bluebird');
const query = require('../db/mysqlConnector');

module.exports = {
    authendicate: function(request, response, next) {
        const { authtoken } = request.headers;
       
        if(!authtoken) {
            return response
                .status(400)
                .json({
                    "status": "UNAUTHORISED",
                    "message": "unknown user"
                });
        }
        const getUserQuery = `SELECT UserId FROM user_session WHERE authtoken = '${authtoken}'`;
        return query(getUserQuery)
            .then((result) => {
                if(result.length > 0) {
                    request.userData = result[0];
                    return next();
                }
                return Promise.reject();
            })
            .catch((err) => {
                return response
                    .status(400)
                    .json({
                        "status": "UNAUTHORISED",
                        "message": "unknown user",
                        "error": err
                    });
            });
    }
}