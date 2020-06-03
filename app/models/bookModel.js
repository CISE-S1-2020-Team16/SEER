const mongoose = require('mongoose');
var authorSchema = require('./schemas/authorSchema');

var bookSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    type: "book",
    title: String,
    authors: [{author: authorSchema}],
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