const mongoose = require('mongoose');

var researchSchema = mongoose.Schema({
    question: String,
    resmethod: String,
    metric: String,
    participants: String
});