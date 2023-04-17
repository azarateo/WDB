const express = require('express')
const mongoose = require('mongoose')
const path = require('path')

const Product = require('./models/product')

const app = express()
const port = 3000
app.set('view engine', 'ejs')
app.set('views',path.join(__dirname,'views'))

//Creating home endpoint
app.get('/',(req, res) => {
    res.render('home')
})

app.get('/products', async (req, res) => {
    const products = await Product.find({})
    res.render('products/index', {products})
})

app.get('/products/:id', async (req, res) => {
    try {
        const {id} = req.params
        const product = await Product.findById(id)
        console.log(product)
        res.render('products/show', {product})
    } catch (error) {
        console.log(error)
    }
    
})
//Listening on port 3000
app.listen(port, () => console.log(`Example app listening on port ${port}!`))

//Connecting to the MongoDB database
mongoose.connect('mongodb://localhost:27017/productsDB', {
    useNewUrlParser: true, useUnifiedTopology: true
}).then(() => console.log('Connected to DB!')).catch(error => console.log(error.message))