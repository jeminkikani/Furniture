const express = require('express');
const { addToCart, getcart } = require('../controllars/cart.controllar');
const isVerify = require('../middalware/auth');
const cartRoutes = express.Router();

cartRoutes.post('/new-cart' , isVerify , addToCart)

cartRoutes.get('/get-cart' , isVerify , getcart )

module.exports = cartRoutes;    