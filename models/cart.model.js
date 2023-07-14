const mongoose = require('mongoose')

const cartSchemas = mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    product:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Product'
    },
    quantity:{
        type:Number,
        default:1
    }
})

module.exports = mongoose.model('Cart' , cartSchemas);