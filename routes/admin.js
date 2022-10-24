const express = require('express');
const router = express.Router();
const productController = require('../controllers/products')


router.get('/add', productController.getAddProduct);
router.post('/add', productController.postProduct );

exports.routes = router;
