const mongoose = require('mongoose');
var authorSchema = require('./schemas/authorSchema');

var techreportSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    type: "techreport",
    title: String,
    authors: [{author: authorSchema}],
    institution: String,
    address: String,
    number: String,
    year: Number,
    month: String,
    DOI: String
});

const evidenceSchema = mongoose.Schema({
    source: [techreportSchema],
    research: [researchSchema],
    items: [evidenceItemSchema],
    statuses: [statusSchema]
});

module.exports = mongoose.model('TechreportEvidence', evidenceSchema);