const mongoose = require('mongoose')

const productSchemas = mongoose.Schema({
    product_name:{
        type:String,
        require:true
    },
    product_detail:{
        type:String
    },
    product_SQ:{
        type:String,
        require:true,
        unique:true
    },
    price:{
        type:Number,
        require:true
    },
    product_additional_features:{
        type:String
    },
    image:{
        type:String
    }
});

module.exports = mongoose.model('Product' , productSchemas)