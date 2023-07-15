const mongoose = require('mongoose');


const ordarSchemas = mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    items : [{
        product: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Product'
        },
        quantity:{
            type: Number 
        } 
    }],
    totalAmount: {
        type: Number,
    }
})

module.exports = mongoose.model('Ordar' , ordarSchemas);