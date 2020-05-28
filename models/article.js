const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Article = new Schema(
    {
        article: {type: String, required: true}, 
        author: {type: String, required: true}, 
        title: {type: String, required: true}, 
        journal: {type: String, required: true}, 
        year: {type: String, required: true},  
        volume: {type: String, required: true}, 
        number: {type: String, required: true}, 
        pages: {type: String, required: true}, 
        month: {type: String, required: true},
    },
)

module.exports = mongoose.model('articles', Article)