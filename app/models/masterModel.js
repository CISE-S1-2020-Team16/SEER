const mongoose = require('mongoose');

var authorSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: {
        firstName: String,
        lastName: String
    }
});

var masterthesisSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    title: String,
    type: {
        type: String,
        default: "masterthesis"
    },
    journal: String,
    year: Number,
    volume: Number,
    number: Number,
    pages: {
        from: Number,
        to: Number
    } 
});

const evidenceSchema = mongoose.Schema({
    source: [masterthesisSchema],
    research: [researchSchema],
    items: [evidenceItemSchema],
    statuses: [statusSchema]
});

module.exports = mongoose.model('MasterEvidence', evidenceSchema);