const mongoose = require('mongoose');
var authorSchema = require('./schemas/authorSchema');

var miscSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    type: "misc",
    title: String,
    authors: [{author: authorSchema}],
    howpublished: String,
    year: Number,
    note: String
});

const evidenceSchema = mongoose.Schema({
    source: [miscSchema],
    research: [researchSchema],
    items: [evidenceItemSchema],
    statuses: [statusSchema]
});

module.exports = mongoose.model('MiscEvidence', evidenceSchema);