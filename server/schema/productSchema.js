const mongoose = require('mongoose');

const productSchema = new mongoose.Schema(
    {
        id: String,
        title: String,
        imageUrl: String,
        discription: String,
        price: Number,
        size: [String]
    }
    )

    module.exports = productSchema