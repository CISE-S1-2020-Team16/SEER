const mongoose = require('mongoose');
var authorSchema = require('./schemas/authorSchema');

var conferenceSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    type: "conference",
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
    source: [conferenceSchema],
    research: [researchSchema],
    items: [evidenceItemSchema],
    statuses: [statusSchema]
});

module.exports = mongoose.model('ConferenceEvidence', evidenceSchema);