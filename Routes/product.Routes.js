const express = require('express')
const {createProduct, updateProduct, findAllProduct, findProduct} = require('../controllars/product.controllar')
const productRoutes = express.Router();

productRoutes.post('/new-product' , createProduct);

productRoutes.get('/find-product' , findAllProduct);

productRoutes.put('/update-product/:id' , updateProduct);

productRoutes.get('/find/:id' , findProduct);



module.exports = productRoutes;