const mongoose = require('mongoose');

var authorSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: {
        firstName: String,
        lastName: String
    }
});

var bookSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    title: String,
    type: {
        type: String,
        default: "book",
    },
    author: [authorSchema],
    publisher: String,
    address: String,
    year: Number
});

const evidenceSchema = mongoose.Schema({
    source: [bookSchema],
    research: [researchSchema],
    items: [evidenceItemSchema],
    statuses: [statusSchema]
});

module.exports = mongoose.model('BookEvidence', evidenceSchema);