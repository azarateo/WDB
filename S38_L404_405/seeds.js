const mongoose = require('mongoose')
const Product = require('./models/product')

mongoose.connect('mongodb://localhost:27017/productsDB', {
    useNewUrlParser: true, useUnifiedTopology: true
}).then(() => console.log('Connected to DB!')).catch(error => console.log(error.message))

const product1 = new Product({
    name: 'Grapefruit',
    price: 1.99,
    description: 'fruit'
})

product1.save().then(p => console.log(p)).catch(e => console.log(e))