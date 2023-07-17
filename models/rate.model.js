const mongoose = require('mongoose');

const ratingSchemas = mongoose.Schema({
    star:{
        type:Number,
        min:1,
        require:true
    },
    description:{
        type:String
    },
    product:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'Product'
    },
    user:{
        type: mongoose.Schema.Types.ObjectId,   
        ref:'User'
    }
}) 

module.exports = mongoose.model('Rate' , ratingSchemas)