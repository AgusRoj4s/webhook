const databaseConfig = {
    uri: process.env.MONGO_DB_URL || 'mongodb://localhost/webhook',
};
module.exports = databaseConfig;