const Favourite = require('../models/favourite.model')
const User = require('../models/user.model')

exports.addfavourite = async (req,res)=>{
    try {
        const id = req.params.id;
        const theuser = await User.findById(req.user._id);

        const addfav = await Favourite.create({
            product: id,
            user: theuser._id,
        });
        addfav.save();
        res.json(addfav);
        
    } catch (error) {
        console.log(error);
        res.json({message: 'Server Error'});
    }
};

exports.getfavourite = async (req,res)=>{
    try {
        const infav = await Favourite.find({user: req.user._id});
        res.json(infav)

    } catch (error) {
        console.log(error);
        res.json({message: 'Server Error'});
    }
}