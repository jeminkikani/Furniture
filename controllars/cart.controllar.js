const Cart = require('../models/cart.model')
const Product = require('../models/product.model')
const User = require('../models/user.model')

exports.addToCart = async (req, res) => {
    try {
        const { product, quantity } = req.body;
        const user = await User.findById(req.user._id);
        // console.log(user);
        if (!user) {
            return res.json({ massag: 'user is not Found..' })
        }

        const fixProduct = await Product.findById(product);
        // console.log(fixProduct);
        if (!fixProduct) {
            return res.json({ massag: 'product isNotExist..' })
        }

        const newCart = await Cart.create({
            user: req.user.id,
            product,
            quantity
        })

        newCart.save()
        res.status(201).json({ newCart, msg: 'add to cart..' })
    } catch (error) {
        console.log(error)
        res.json({ msg: 'server error ' })
    }

}

exports.getcart = async (req,res) =>{
    try {
        const user = await User.findById(req.user._id)
        if(!user)
        {
            return res.json({msg: 'user is not Exist'})
        }
        
        const cartList = await Cart.find({user: user._id});
        res.json({cartList});
        
    } catch (error) {
        console.log(error)
        res.json({ msg: 'server error ' }) 
    }
}