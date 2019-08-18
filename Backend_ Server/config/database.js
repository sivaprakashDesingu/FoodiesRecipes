
const MONGO_USERNAME = 'admin';
const MONGO_PASSWORD = 'admin123';
const MONGO_HOSTNAME = 'localhost';
const MONGO_PORT = '27017';
const MONGO_DB = 'cookingrecipe';
const url = `mongodb://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_HOSTNAME}:${MONGO_PORT}/${MONGO_DB}?authSource=admin`;
//'mongodb://localhost:27017/admin'
module.exports = {
    url: url,
    db: MONGO_DB
}