const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Article = new Schema(
    {	
	
		
        article: String ,
        author: String ,
        title: String ,
        journal: String ,
        year: Number ,
        volume: Number ,
        number: Number ,
        pages: [Number],
        month: String, 
		sourcetype: String,
		credibilityrating : Number,
		confidencerating : Number,
	
		
    
		requestion: String,
		metric: String,
		researchparticipants: String,
		researchmethod: String,
	
		
		outcome: String,
		semethodologies: String,
		semethod: String,
	
	

		statustype: String,
		date: { type: Date, default: Date.now },
		

		
	
    },
)

module.exports = mongoose.model('articles', Article)