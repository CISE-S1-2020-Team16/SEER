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
		sourcetype: [ 'article', 'book','booklet','conference','inbook','incollection','inprocceedings','manual','masterthesis','misc','phdthesis','proceedings','techreport','unpublished'] ,
		credibilityrating : Number,
		confidencerating : Number,
	
		
    
		requestion: String,
		metric: String,
		researchparticipants: ['undergraduate','postgraduate','practitioners'],
		researchmethod: ['case study','field-observation','experiment','interview','survey'],
	
		
		outcome: ['yes','no','sometimes'],
		semethodologies: ['scrum','waterfall','spiral','xp','rational','unified proccess','crystal','clean room','feature driven development',
		'model driven development','domain driven development','formal methods','problem driven development','cloud computing','service oriented development',
		'valuse driven development','product driven development','agile'],
		semethod: ['tdd','bdd','pair programming','planning poker','daily standup','story boards','user story mapping','continous','intergration','retrospectives','burndown charts','requirements','requirements prioritisation','version control', 'code sharing'],
	
	

		statustype: ['to be moderated','accepted','rejected','analysis accepted'],
		date: { type: Date, default: Date.now },
		username: String,

		
	
    },
)

module.exports = mongoose.model('articles', Article)