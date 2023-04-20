const express = require('express')
const mongoose = require('mongoose')
const path = require('path')

const Product = require('./models/product')
const  methodOverride = require('method-override')
const app = express()
const port = 3000

app.set('view engine', 'ejs')
app.set('views',path.join(__dirname,'views'))

app.use(express.urlencoded({extended: true}))
app.use(methodOverride('_method'))

categories = ['fruit','vegetable','dairy']

//Creating home endpoint
app.get('/',(req, res) => {
    res.render('home')
})

app.get('/products', async (req, res) => {
    const { category } = req.query
    if (category) {
        const products = await Product.find({category})
        res.render('products/index', {products,category})
    }
    else {
        const products = await Product.find({})
        res.render('products/index', {products, category: 'All'})
    }
    
})

app.get('/products/new', (req, res) => {
    res.render('products/new', categories)
})

app.get('/products/:id', async (req, res) => {
    try {
        const { id } = req.params
        const product = await Product.findById(id)
        console.log(product)
        res.render('products/show', {product})
    } catch (error) {
        console.log(error)
    }
})

app.get('/products/:id/edit', async (req, res) => {
    try {
        const { id } = req.params
        const product = await Product.findById(id)
        console.log(product)
        res.render('products/update', {product, categories})
    } catch (error) {
        console.log(error)
    }
})

app.post('/products', async (req, res) => {
    try {
        const newProduct = new Product(req.body)
        await newProduct.save()
        res.redirect(`/products/${newProduct._id}`)
    } catch (error) {
        console.log(error)
    }
})

app.put('/products/:id', async (req, res) => {
    const { id } = req.params
    const product = await Product.findByIdAndUpdate(id, req.body, {runValidators : true, new: true})
    console.log("Updated product:",product)
    res.redirect(`/products/${product._id}`)
})

app.delete('/products/:id', async (req, res) => {
    const { id } = req.params
    const deletedProduct = await Product.findByIdAndDelete(id)
    console.log("Deleted product:",deletedProduct)
    res.redirect('/products')
})

//Listening on port 3000
app.listen(port, () => console.log(`Example app listening on port ${port}!`))

//Connecting to the MongoDB database
mongoose.connect('mongodb://localhost:27017/productsDB', {
    useNewUrlParser: true, useUnifiedTopology: true
}).then(() => console.log('Connected to DB!')).catch(error => console.log(error.message))