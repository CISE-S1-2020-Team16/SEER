const mongoose = require('mongoose');
//Not sure if I need to import schemas?
var authorSchema = require('./schemas/authorSchema');

var bookletSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    type: "booklet",
    title: String,
    authors: [{author: authorSchema}],
    howpublished: String,
    month: Number,
    year: Number
});

const evidenceSchema = mongoose.Schema({
    source: [bookletSchema],
    research: [researchSchema],
    items: [evidenceItemSchema],
    statuses: [statusSchema]
});

module.exports = mongoose.model('BookletEvidence', evidenceSchema);