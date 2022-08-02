const Product = require("../models/Product")



//add product 
exports.addProduct = async(req,res) =>{
    const {title,imageUrl,description,category,price,available} = req.body
    try {
        const newProduct = new Product({
            title,
            imageUrl,
            description,
            category,
            price,
            available
        });
        await newProduct.save();
        res.status(200).json(newProduct)
    } catch (error) {
        res.status(500).json({msg:error.msg})
    }
};
//edit product

exports.editProduct = async(req,res) =>{
    try {
        const updatedProduct = await Product.findByIdAndUpdate(req.params.id , {...req.body},{new:true});
        res.status(200).json(updatedProduct);
    } catch (error) {
        res.status(500).json({msg:error.msg})
        
    }

};
//get product 
exports.getProduct = async(req,res) =>{
    try {
        const getProduct = await Product.findById(req.params.id);
        res.status(200).json(getProduct)
    } catch (error) {
        res.status(500).json({msg:error.msg})
        
    }
};
//get all products
exports.getProducts = async(req,res) =>{
    try {
        const products = await Product.find();
        res.status(200).json(products)
    } catch (error) {
        res.status(500).json({msg:error.msg})
    }
};
//delete product
exports.deleteProduct = async(req,res) =>{
    try {
        await Product.findByIdAndDelete(req.params.id)
        res.status(200).json('product deleted');
    } catch (error) {
        res.status(500).json({msg:error.msg})
    }
};
