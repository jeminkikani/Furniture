require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const port = process.env.PORT;
const mongoUrl = process.env.MONGODB_URL;
const morgan = require('morgan')
// middalware
app.use(express.json());
app.use(morgan('dev'));


// userRoutes
const userRoutes = require('./Routes/user.Routes');
app.use('/api/user' , userRoutes);

// productRoutes
const productRoutes = require('./Routes/product.Routes');
app.use('/api/product', productRoutes);

// productRoutes
const cartRoutes = require('./Routes/cart.Routes');
app.use('/api/cart', cartRoutes);

// server
app.listen(port , ()=>{
    console.log(`server is started ${port}`);
})


// mongoDb Connection
mongoose.connect(mongoUrl).then(()=>{
    console.log(`DB Connected....`)
}).catch((error)=>{
    console.log(error);
})

