const mongoose = require('mongoose');

var authorSchema = mongoose.Schema({
    name: {
        firstName: String,
        lastName: String
    }
});