const mongoose = require('mongoose');

const evidenceSchema = mongoose.Schema({
    source: [],
    research: [researchSchema],
    items: [evidenceItemSchema],
    statuses: [statusSchema]
});

module.exports = mongoose.model('Evidence', evidenceSchema);