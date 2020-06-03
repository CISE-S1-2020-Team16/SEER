const mongoose = require('mongoose');
var authorSchema = require('./schemas/authorSchema');

var inproceedingsSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    type: "inproceedings",
    title: String,
    authors: [{author: authorSchema}],
    booktile: String,
    series: String,
    year: Number,
    pages: {
        from: Number,
        to: Number
    },
    publisher: String,
    address: String
});

const evidenceSchema = mongoose.Schema({
    source: [inproceedingsSchema],
    research: [researchSchema],
    items: [evidenceItemSchema],
    statuses: [statusSchema]
});

module.exports = mongoose.model('InproceedingsEvidence', evidenceSchema);