const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true,
        lowercase: true,
        enum: ['fruit', 'vegetable', 'dairy']
    }
});

module.exports = productSchema;