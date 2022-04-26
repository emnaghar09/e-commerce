const express =require('express');
const router = express.Router();
const { getAllProducts, getProductById}=require('../controller/productsControllers')
// GET ALL PRODUCTS FROM DB
router.get('/', getAllProducts)

// GET A PRODUCT FROM DB
router.get('/:id', getProductById)
module.exports = router;