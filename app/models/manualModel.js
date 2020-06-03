const mongoose = require('mongoose');
var authorSchema = require('./schemas/authorSchema');

var manualSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    type: "manual",
    title: String,
    authors: [{author: authorSchema}],
    organisation: String,
    address: String,
    year: Number
});

const evidenceSchema = mongoose.Schema({
    source: [manualSchema],
    research: [researchSchema],
    items: [evidenceItemSchema],
    statuses: [statusSchema]
});

module.exports = mongoose.model('ManualEvidence', evidenceSchema);