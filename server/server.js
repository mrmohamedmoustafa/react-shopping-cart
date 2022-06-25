const express = require('express');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');

const app = express();
app.use(bodyparser.json());

const connectionString = 'mongodb://localhost/react-shopping-card';
mongoose.connect(connectionString, {useNewUrlParser: true, useUnifiedTopology: true})
.then(res => console.log("connected successfuly"))

const product = mongoose.model('product', new mongoose.Schema(
    {
        id: String,
        title: String,
        imageUrl: String,
        discription: String,
        price: Number,
        size: [String]
    })
    )

    app.get('/api/products', async (req, res) => {
        const products = await product.find();
        res.send(products)
    })

app.post('api/products', async (req, res) => {
    const newProduct = new product(req.body);
    const savedP = await newProduct.save();
    res.send(savedP)
})

app.delete('api/products/:id', async (req, res) => {
    const deletedProduct = await product.findByIdAndDelete(req.params.id);
    res.send(deletedProduct)
})

app.listen(6001, () => {
    console.log("runing on port 6001");
})