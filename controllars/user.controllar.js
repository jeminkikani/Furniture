const users = require('../models/user.model');
const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken');

exports.welcomeUser = async(req,res)=>{
    try {
        res.json({msg:'WelCome To Furniture App'});
    } catch (error) {
        console.log(error);
        res.json({msg:'server error'})
    }
} 


exports.createUser = async(req,res)=>{
    try {
        const {firstName ,lastName, email, password, confirm_password, address, country, zipcode, district} = req.body;

        if(password === confirm_password)
        {
            const User = await users.findOne({email});
            if(User)
            {
                return res.json({msg: 'User is already exist....'});
            }
            
            const salt = await bcrypt.genSalt(10);
            const hashpassword = await bcrypt.hash(password, salt);
            
            const newUser = users.create({
                firstName,
                lastName,
                email,
                password:hashpassword,
                address,
                country,
                zipcode, 
                district
                
            })
            newUser.save();
            res.status(201).json({msg:'new user created'});

        }
        else
        {
            res.status(404).json({msg:'user can not created...'})
        }


    } catch (error) {
        console.log(error);
        res.json({msg:'server error'})
    }
}