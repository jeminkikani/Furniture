const express = require('express');
const isVerify = require('../middalware/auth');
const { addordar, getordar } = require('../controllars/ordar.controllar');
const ordarRoutes = express.Router();

ordarRoutes.post('/add-ordar', isVerify , addordar);

ordarRoutes.get('/get-ordar', isVerify , getordar )

module.exports = 
