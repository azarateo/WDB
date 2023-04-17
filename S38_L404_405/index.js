const express = require('express')
const mongoose = require('mongoose')
const path = require('path')
const app = express()
const port = 3000
app.set('view engine', 'ejs')
app.set('views',path.join(__dirname,'views'))

//Creating home endpoint
app.get('/',(req, res) => {
    res.render('home')
})

//Listening on port 3000
app.listen(port, () => console.log(`Example app listening on port ${port}!`))

//Connecting to the MongoDB database
mongoose.connect('mongodb://localhost:27017/productsDB', {
    useNewUrlParser: true, useUnifiedTopology: true
}).then(() => console.log('Connected to DB!')).catch(error => console.log(error.message))