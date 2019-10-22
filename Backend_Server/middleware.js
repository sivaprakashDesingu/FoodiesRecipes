const auth = require('./middleware/auth')

module.exports = (middleware) => {
    middleware.use("/api/user/user", auth.authendicate);
    middleware.use('/api/user/personalized/*',auth.authendicate)
    middleware.use('/api/recipe/*',auth.authendicate)
};