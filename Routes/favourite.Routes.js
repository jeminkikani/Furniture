const express = require('express');
const { addfavourite, getfavourite } = require('../controllars/favourite.controllar');
const isVerify = require('../middalware/auth');
const FavouriteRoutes = express.Router();

FavouriteRoutes.post('/add-fav/:id' , isVerify , addfavourite);

FavouriteRoutes.get('/get-fav/:id' , isVerify , getfavourite);

module.exports = FavouriteRoutes;