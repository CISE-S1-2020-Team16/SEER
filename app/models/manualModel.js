const mongoose = require('mongoose');

var authorSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: {
        firstName: String,
        lastName: String
    }
});

var manualSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    type: {
        type: String,
        enum: {manual}
    },
    title: String,
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
    source: [manualSchema],
    research: [researchSchema],
    items: [evidenceItemSchema],
    statuses: [statusSchema]
});

module.exports = mongoose.model('ManualEvidence', evidenceSchema);