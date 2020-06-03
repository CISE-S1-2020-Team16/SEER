const mongoose = require('mongoose');
var authorSchema = require('./schemas/authorSchema');

var phdSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    type: "phdthesis",
    title: String,
    authors: [{author: authorSchema}],
    school: String,
    address: String,
    year: Number,
    month: String
});

const evidenceSchema = mongoose.Schema({
    source: [phdSchema],
    research: [researchSchema],
    items: [evidenceItemSchema],
    statuses: [statusSchema]
});

module.exports = mongoose.model('PhdthesisEvidence', evidenceSchema);