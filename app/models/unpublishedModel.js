const mongoose = require('mongoose');
var authorSchema = require('./schemas/authorSchema');

var unpublishedSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    type: "unpublished",
    title: String,
    authors: [{author: authorSchema}],
    year: Number,
});

const evidenceSchema = mongoose.Schema({
    source: [unpublishedSchema],
    research: [researchSchema],
    items: [evidenceItemSchema],
    statuses: [statusSchema]
});

module.exports = mongoose.model('UnpublishedEvidence', evidenceSchema);