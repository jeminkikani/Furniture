require('dotenv').config();
const User = require('../models/user.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const secrate = process.env.SECRET_KEY;

exports.welcomeUser = async (req, res) => {
    try {
        res.json({ msg: 'WelCome To Furniture App' });
    } catch (error) {
        console.log(error);
        res.json({ msg: 'server error' })
    }
}


exports.createUser = async (req, res) => {
    try {
        const { firstName, lastName, email, password, confirm_password, address, country, zipcode, district } = req.body;

        if (password === confirm_password) {
            const users = await User.findOne({ email });
            if (users) {
                return res.json({ msg: 'User is already exist....' });
            }

            const salt = await bcrypt.genSalt(10);
            const hashpassword = await bcrypt.hash(password, salt);

            const newUser = await User.create({
                firstName,
                lastName,
                email,
                password: hashpassword,
                address,
                country,
                zipcode,
                district

            })
            newUser.save();
            res.status(201).json({ msg: 'new user created' });

        }
        else {
            res.status(404).json({ msg: 'user can not created...' })
        }


    } catch (error) {
        console.log(error);
        res.json({ msg: 'server error' })
    }
}

exports.loginUser = async (req, res) => {
    try {

        const { email, password } = req.body;

        const isExistUser = await User.findOne({ email })
        if (!isExistUser) {
            res.status(404).json({message:`User is not found`});
        }

        const ismatchpassword = await bcrypt.compare(password, isExistUser.password);

        console.log(ismatchpassword);
        if (!ismatchpassword) {
            res.json({ msg: 'password is incorrect...' })
        }
        const isvalidToken = jwt.sign({ userId: User._id }, secrate, { expiresIn: '1d' });
        res.json({ msg: 'User is login...', token: isvalidToken });

    } catch (error) {
        console.log(error);
        res.json({ msg: 'server error' })
    }

}

exports.getAllUser = async (req,res)=>{
    try {
        const getUser = await User.findById(User._id).select('-password');

        res.json({getUser});

    } catch (error) {
        console.log(error);
        res.json({ msg: 'server error' })
    }
}   

exports.updatePassword = async (req,res) =>{
    try {
        const {password , confirm_password} = req.body;
        if(password === confirm_password){
        const  user = await User.findById(req.User._id);
        if(!user)
        {
            res.json({msg:"user is not Found"})
        }
    }

    const salt = await bcrypt.genSalt(10);
    const hashpassword = await bcrypt.hash(password , salt);

    await User.findByIdAndUpdate(User._id , {$set:{password:hashpassword}});
    res.json({msg: "password is updated...."})
        
    } catch (error) {
        console.log(error);
        res.json({ msg: 'server error' })
    }
}