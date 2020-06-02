const mongoose = require('mongoose');

var authorSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: {
        firstName: String,
        lastName: String
    }
});

var bookletSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    title: String,
    type: {
        type: String,
        default: "booklet",
    },
    howpublished: String,
    month: Number,
    year: Number
});

const evidenceSchema = mongoose.Schema({
    source: [bookletSchema],
    research: [researchSchema],
    items: [evidenceItemSchema],
    statuses: [statusSchema]
});

module.exports = mongoose.model('BookletEvidence', evidenceSchema);