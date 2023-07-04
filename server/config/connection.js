const mongoose = require('mongoose');
require('dotenv').config();


// set up mongodb atlas as mongodb compass is not working for me
const uri = process.env.ATLAS_URI;
mongoose.connect(uri)
    .then(() => console.log('Connected to MongoDB Atlas'))
    .catch(error => console.error('Could not connect to MongoDB Atlas...', error));


module.exports = mongoose.connection;
