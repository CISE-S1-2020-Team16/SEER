const mongoose = require('mongoose');
var authorSchema = require('./schemas/authorSchema');

var proceedingsSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    type: "proceedings",
    editors: [{editor: authorSchema}],
    title: String,
    series: String,
    volume: Number,
    publisher: String,
    address: String, 
    year: Number
});

const evidenceSchema = mongoose.Schema({
    source: [proceedingsSchema],
    research: [researchSchema],
    items: [evidenceItemSchema],
    statuses: [statusSchema]
});

module.exports = mongoose.model('ProceedingsEvidence', evidenceSchema);