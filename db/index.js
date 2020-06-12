const mongoose = require('mongoose')
const MONGODB_URI = 'mongodb+srv://Marcus:Kane@cluster0-own4k.azure.mongodb.net/SEERdb'
mongoose
    .connect(MONGODB_URI, { useNewUrlParser: true , useUnifiedTopology: true })
    .catch(e => {
        console.error('Connection error', e.message)
    })

const db = mongoose.connection

module.exports = db
