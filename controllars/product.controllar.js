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

exports.findAllProduct = async (req,res) =>{
    try {
        const findproduct = await Product.find()
        res.status(200).json(findproduct)
        
    } catch (error) {
        console.log(error);
        res.json({msg:'server error'});
    }
}

exports.updateProduct = async (req,res)=>{
    try {
        const id = await req.params.id;
        const product = await Product.findById(id);
        console.log(product);
        if(!product)
        {
            return res.json({msg: 'product is not Find'})
        }
        const updatedProduct = await Product.findByIdAndUpdate(product._id , {$set:req.body} , {new:true});
        updatedProduct.save()
        res.json({updatedProduct, msg: 'product is updated'})
        
    } catch (error) {
        console.log(error);
        res.json({msg: 'server error '});
    }
}

exports.findProduct = async (req,res) =>{
    try {
        const id = await req.params.id;
    const product = await Product.findById(id);
    if(!product)
    {
        return res.json({msg: 'product is not Avalible'});
    }
    res.status(200).json(product);
        
    } catch (error) {
        console.log(error);
        res.json({msg: 'server error '});
    }

}