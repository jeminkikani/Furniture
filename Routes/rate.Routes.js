const express = require('express');
const { addRate, getrate } = require('../controllars/rate.controllar');
const isVerify = require('../middalware/auth');
const rateRoutes = express.Router();

rateRoutes.post('/new-rate/:id', isVerify , addRate);

rateRoutes.get('/get-rate/:id', isVerify , getrate);

module.exports = rateRoutes;