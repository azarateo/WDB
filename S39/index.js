const express = require('express')
const mongoose = require('mongoose')
const path = require('path')
const app = express()
const port = 3000
const Campground = require('./models/campground')

app.use(express.urlencoded({ extended: true }))
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/yelp-camp')

const db = mongoose.connection
db.on("error", console.error.bind(console, "connection error:"))
db.once("open", () => {
    console.log("Database connected")
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
app.get('/', (req, res) => {
    res.render('home')
})

app.get('/makecampground', async (req, res) => {
    const camp = new Campground({ title: 'My Backyard', description: 'cheap camping!' })
    await camp.save()
    res.send(camp)
})