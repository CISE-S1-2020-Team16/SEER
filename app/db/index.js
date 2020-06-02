const mongoose = require('mongoose')

mongoose
    .connect(process.env.DB_CONNECTION, { useNewUrlParser: true , useUnifiedTopology: true })
    .catch(e => {
        console.error('DB Connection error', e.message)
    })

const db = mongoose.connection

module.exports = db
