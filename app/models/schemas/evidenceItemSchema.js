const mongoose = require('mongoose');

var evidenceItemSchema = mongoose.Schema({
    itemid: String,
    benefit: String,
    context: String,
    result: String,
    intergrity: String,
    methods: [{
        method: String,
        parentmethodologies: [{methodology: String}]
    }]
});