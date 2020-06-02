const mongoose = require('mongoose');

var statusSchema = mongoose.Schema({
    statusid: String,
    status: String,
    date: Date,
    username: String,
    comment: String
});