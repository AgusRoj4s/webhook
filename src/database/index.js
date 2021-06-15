const mongoose = require('mongoose');
const databaseConfig = require('../config/database')

mongoose.connect(databaseConfig.uri, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});

const connection = mongoose.connection;

connection.once('open', () => {
    console.log('Database is connected');
});