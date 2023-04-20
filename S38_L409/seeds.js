const mongoose = require('mongoose')
const Product = require('./models/product')

mongoose.connect('mongodb://localhost:27017/productsDB', {
    useNewUrlParser: true, useUnifiedTopology: true
}).then(() => console.log('Connected to DB!')).catch(error => console.log(error.message))

// const product1 = new Product({
//     name: 'Grapefruit',
//     price: 1.99,
//   , category: 'fruit'
// })

// // product1.save().then(p => console.log(p)).catch(e => console.log(e))

const seedProducts = [
    { name: 'Grapefruit', price: 1.99, category: 'fruit' },
    { name: 'Fairy Egplant', price: 1.00, category: 'vegetable' },
    { name: 'Organic Godess Melon', price: 4.99, category: 'fruit' },
    { name: 'Organic Mini Seedless Water Melon', price: 3.99, category: 'fruit' },
    { name: 'Organic Celery', price: 1.50, category: 'vegetable' },
    { name: 'Chocolate Whole Milk', price: 2.69, category: 'dairy' },
]

Product.insertMany(seedProducts).then(p => console.log(p)).catch(e => console.log(e))
