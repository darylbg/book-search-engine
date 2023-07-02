const mongoose = require('mongoose');

// set up mongodb atlas as mongodb compass is not working for me

mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://darylxcuf:73oBoUaC3OrAcPP0@cluster0.x0g7fmp.mongodb.net/googlebooks')
    .then(() => console.log('Connected to MongoDB Atlas'))
    .catch(error => console.error('Could not connect to MongoDB Atlas...', error));


module.exports = mongoose.connection;
