const auth = require('./middleware/auth')

module.exports = (middleware) => {
    middleware.use("/api/user/user", auth.authendicate);
};