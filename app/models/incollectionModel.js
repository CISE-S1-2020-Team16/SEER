const mongoose = require('mongoose');
var authorSchema = require('./schemas/authorSchema');

var incollectionSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    type: "incollection",
    title: String,
    booktitle: String,
    authors: [{author: authorSchema}],
    editors: [{editor: authorSchema}],
    year: Number,
    publisher: String,
    address: String,
    pages: {
        from: Number,
        to: Number
    }
});

const evidenceSchema = mongoose.Schema({
    source: [incollectionSchema],
    research: [researchSchema],
    items: [evidenceItemSchema],
    statuses: [statusSchema]
});

module.exports = mongoose.model('IncollectionEvidence', evidenceSchema);