const express = require('express')
const mongoose = require('mongoose')
const app = express()
const port = 3000


// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/yelp-camp')

const db = mongoose.connection
db.on("error", console.error.bind(console, "connection error:"))
db.once("open", () => {
    console.log("Database connected")
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
app.get('/', (req, res) => res.send('Hello World!'))