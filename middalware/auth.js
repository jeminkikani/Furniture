require('dotenv').config();
const User = require('../models/user.model');
const jwt = require('jsonwebtoken');
const secrate = process.env.SECRET_KEY;

const isVerify = async (req,res,next)=>{
    const auth = req.headers['authorization']
    const token = auth.split(" ")[1];
    const {userId} = jwt.verify(token , secrate);

    req.user = await User.findById(userId);
    next();
}

module.exports = isVerify;