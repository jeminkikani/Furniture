require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const port = process.env.PORT;
const mongoUrl = process.env.MONGODB_URL;

// middalware
app.use(express.json());


// userRoutes
const userRoutes = require('./Routes/user.Routes');
app.use('/api/user' , userRoutes);

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

