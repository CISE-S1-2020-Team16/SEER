const mongoose = require('mongoose');
var authorSchema = require('./schemas/authorSchema');

var masterthesisSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    type: "masterthesis",
    title: String,
    authors: [{author: authorSchema}],
    school: String,
    year: Number,
    address: String,
    month: String
});

const evidenceSchema = mongoose.Schema({
    source: [masterthesisSchema],
    research: [researchSchema],
    items: [evidenceItemSchema],
    statuses: [statusSchema]
});

module.exports = mongoose.model('MasterEvidence', evidenceSchema);