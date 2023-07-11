const mongoose = require('mongoose');

const userSchemas = mongoose.Schema({
    firstName:{
        type:String,
        require:true
    },
    lastName:{
        type:String
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    address:{
        type:String
    },
    country:{
        type:String
    },
    zipcode:{
        type:Number
    },
    district:{
        type:String
    }
})


module.exports = mongoose.model('User' , userSchemas);