const express = require('express')


const { addProduct, editProduct, getProduct, getProducts, deleteProduct } = require('../controllers/product.controller');
const checkRole = require('../middlewares/role');
const verifyAuth = require('../middlewares/verifyAuth');
const router = express.Router();






router.post('/add_product',verifyAuth,checkRole(['Admin']),addProduct);
router.put('/edit_product/:id',verifyAuth,checkRole(['Admin']),editProduct);
router.get('/get_product/:id',getProduct);
router.get('/get_all',getProducts);
router.delete('/delete_product/:id',verifyAuth,checkRole(['Admin']),deleteProduct);

module.exports=router;
