const mongoose = require('mongoose');
var authorSchema = require('./schemas/authorSchema');

var defaultEvidenceSchema = mongoose.Schema({
    authors: [{author: authorSchema}],
    title: String,
    DOI: String
});

const evidenceSchema = mongoose.Schema({
    source: [defaultEvidenceSchema],
    research: [researchSchema],
    items: [evidenceItemSchema],
    statuses: [statusSchema]
});

module.exports = mongoose.model('Evidence', evidenceSchema);