const Product = require('../models/product.model');


exports.createProduct = async (req,res)=>{
    try {
        const {product_name ,product_detail ,product_SQ ,price ,product_additional_features ,image} = req.body;
        const isExistProduct = await Product.findOne({product_SQ});
        if(isExistProduct){
            return res.json({msg:'product is already exist..'});
        }

        const newProduct = await Product.create({
            product_name,
            product_detail,
            product_SQ,
            price,
            product_additional_features,
            image
        })
        newProduct.save();
        res.status(201).json({msg:'new product created' });
        
        
    } catch (error) {
        console.log(error);
        res.json({msg:'server error'});
    }
}