require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const db = require('./db')
const path = require("path")
const http = require("http")

// Import Routers
const articleRouter = require('./routes/article-router')

const app = express()
const PORT = process.env.PORT || 3000

app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(bodyParser.json())

// Set up DB
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

// Use Routers
app.use('/api', articleRouter)

//Serve React static app when in production
if (process.env.NODE_ENV === "production") {
    console.log(`Serving React`)
    app.use(express.static(path.join(__dirname, "client/build")));

    app.get("*", function (req, res) {
        res.sendFile(path.join(__dirname, "client/build", "index.html"));
    });
}

// app.listen(PORT, () => console.log(`Server running on port ${PORT}`))

const server = http.createServer(app);

server.listen(PORT, () => console.log(`Server running on port ${PORT}`))
