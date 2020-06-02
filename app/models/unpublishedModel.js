const mongoose = require('mongoose');

var authorSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: {
        firstName: String,
        lastName: String
    }
});

var articleSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    type: {
        default: "article"
    },
    title: String,
    author: [authorSchema],
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
    source: [articleSchema],
    research: [researchSchema],
    items: [evidenceItemSchema],
    statuses: [statusSchema]
});

module.exports = mongoose.model('ArticleEvidence', evidenceSchema);