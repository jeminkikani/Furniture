const Rate = require('../models/rate.model')
const User = require('../models/user.model')

exports.addRate = async (req,res)=>{
    try {
        const id = req.params.id;
        const {star ,description} = req.body;
        
        const theuser = await User.findById(req.user._id);
        const creatrate = await Rate.create({
            product: id,
            user: theuser._id,
            star,
            description 
        })
        creatrate.save();
        res.json({creatrate, msg:'rate created...'});

    } catch (error) {
        console.log(error);
        res.json({msg:'serevr error'})
    }
}

exports.getrate = async (req,res) =>{
    try {
        const id = await Rate.find({user: req.user._id});
        res.json({id})
        
    } catch (error) {
        console.log(error);
        res.json({msg:'serevr error'})
    }

}

