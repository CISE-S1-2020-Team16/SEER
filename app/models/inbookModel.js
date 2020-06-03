const mongoose = require('mongoose');
var authorSchema = require('./schemas/authorSchema');

var inbookSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    type: "inbook",
    authors: [{author: authorSchema}],
    title: String,
    booktitle: String,
    year: Number,
    publisher: String,
    address: String,
    pages: {
        from: Number,
        to: Number
    }
});

const evidenceSchema = mongoose.Schema({
    source: [inbookSchema],
    research: [researchSchema],
    items: [evidenceItemSchema],
    statuses: [statusSchema]
});

module.exports = mongoose.model('InbookEvidence', evidenceSchema);