const Cart = require('../models/cart.model')
const ordar = require('../models/ordar.model')   

exports.addordar = async (req,res) =>{
    try {
        const carItems = await Cart.find({user: req.user._id}).populate('Product');

        const ordarItems = await carItems.map(items =>({
            product: items.product,
            quantity: items.quantity,
            price: items.product.price
        })) 

        const totalAmount = await ordarItems.reduce((total ,items) => total + (items.quantity * items.price),0)

        const newOrdar = await ordar.create({
            user: req.user._id,
            items: ordarItems,
            totalAmount : totalAmount
        })
        newOrdar.save()
        res.json({newOrdar, msg:'new ordar done...'})

    } catch (error) {
        console.log(error)
        res.json({msg: 'server error'})
    }
}