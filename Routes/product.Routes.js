const express = require('express')
const {createProduct} = require('../controllars/product.controllar')
const productRoutes = express.Router();

productRoutes.post('/new-product' , createProduct);



module.exports = productRoutes;