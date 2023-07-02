const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/googlebooks');
// mongodb://localhost:27017
// mongodb://localhost:27017

module.exports = mongoose.connection;
