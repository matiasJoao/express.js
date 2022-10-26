const express = require('express');
const router = express.Router();
const productController = require('../controllers/products')
const shopController = require('../controllers/shop.js')

router.get('/', shopController.getIndex  );
router.get('/cart', shopController.getCart);
router.get('/products' ,productController.getPostProducts );
router.get('/checkout', shopController.getCheckout);
router.get('/orders', shopController.getOrders);
router.get('/product/:productId', shopController.getProductId)
module.exports = router;