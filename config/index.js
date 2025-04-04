const mongoose = require('mongoose');

const DB_URI = "mongod://localhost/test";

const option = {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
};

mongoose.connect(DB_URI, option);

module.exports = mongoose;