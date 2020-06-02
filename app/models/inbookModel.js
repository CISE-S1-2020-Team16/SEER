const mongoose = require('mongoose');

var authorSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: {
        firstName: String,
        lastName: String
    }
});

var inbookSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    title: String,
    booktitle: String,
    type: {
        type: String,
        default: "inbook",
    },
    publisher: String,
    address: String,
    year: Number,
    pages: {
        from: Number,
        to: Number
    }
});

const evidenceSchema = mongoose.Schema({
    source: [inbookSchema],
    research: [researchSchema],
    items: [evidenceItemSchema],
    statuses: [statusSchema]
});

module.exports = mongoose.model('InbookEvidence', evidenceSchema);