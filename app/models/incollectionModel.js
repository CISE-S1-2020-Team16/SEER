const mongoose = require('mongoose');

var authorSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: {
        firstName: String,
        lastName: String
    }
});

var incollectionSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    title: String,
    booktitle: String,
    authors: [
        author: { 
            type: mongoose.Schema.Types.ObjectId, 
            ref: 'Author'
        }
    ],
    editor: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Editor'
    },
    type: {
        type: String,
        default: "incollection",
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
    source: [incollectionSchema],
    research: [researchSchema],
    items: [evidenceItemSchema],
    statuses: [statusSchema]
});

module.exports = mongoose.model('IncollectionEvidence', evidenceSchema);