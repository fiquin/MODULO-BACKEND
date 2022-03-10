const express = require('express');
const router = express.Router();

const Product = require('./models/product');

router.get('/products', async (req, res) => {
    try {
        const products = await Product.find();

        return res.send(products);
    } catch(error) {
        console.log('Algo ocurrió al obtener la información: ', error);
        res.status(500).send({ error: error.message });
        throw error;
    };
});

router.post('/products', async (req, res) => {
    try {
        const product = await Product.create(req.body);
        
        return res.send(product);
    } catch(error) {
        console.log('Algo ocurrió mienstras se creaba un producto: ', error);
        res.status(500).send({ error: error.message });
//        throw error;
    };
});

router.put('/products/:id', async (req, res) => {
    try {
        const product = await Product.findByIdAndUpdate({_id: req.params.id}, req.body);
        
        return res.send(product);
    } catch(error) {
        console.log('Algo ocurrió: ', error);
        res.status(500).send({ error: error.message });
        throw error;
    };
});

router.delete('/products/:id', async (req, res) => {
    try {
        const product = await Product.findByIdAndDelete({_id: req.params.id});
        
        return res.send(product);
    } catch(error) {
        console.log('Algo ocurrió: ', error);
        res.status(500).send({ error: error.message });
        throw error;
    };    
});

router.get('/products/:id', async (req, res) => {
    try {
        const products = await Product.findById({ _id: req.params.id});

        return res.send(products);
    } catch(error) {
        console.log('Algo ocurrió al obtener la información: ', error);
        res.status(500).send({ error: error.message });
        throw error;
    };
});

module.exports = router;
