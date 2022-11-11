const express = require('express');
const router = express.Router();
const productController = require('../controllers/products')
const adminController = require('../controllers/admin.js')


router.get('/add', productController.getAddProduct);
router.post('/add', productController.postProduct );
router.get('/products', adminController.getProducts);
router.get('/edit-products:productId', adminController.getEditProducts)
exports.routes = router;
