const mongoose = require('mongoose');

const mongoDbUrl = process.env.MONGODB_URL;

mongoose.connect(mongoDbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});