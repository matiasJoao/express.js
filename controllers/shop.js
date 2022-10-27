const Prodcut = require('../Models/product');
const Cart = require('../Models/cart');
exports.getIndex = (req, res, next) =>{
    Prodcut.fetchAll(product =>{
        res.render('shop/index', {pageTitle: 'Shop', title: product,  path: '/'})
    });
}

exports.getCart = (req, res, next) => {
    res.render('shop/cart', {path: '/cart', pageTitle:'Cart'})
}
exports.postCart = (req, res, next) => {
    const prodId = req.body.productId
    Prodcut.findId(prodId, (product) => {
      Cart.addProduct(prodId, product.price)
    })
    res.redirect('/cart')
}
exports.getCheckout = (req, res, next) => {
  res.render('shop/checkout', {pageTitle: 'Checkout', path: '/checkout'})
}
exports.getOrders = (req, res, next)=>{
    res.render('shop/orders', {pageTitle: 'Orders', path:'/orders'})
}
exports.getProductId = (req, res, next) => {
   const prodId = req.params.productId;
   Prodcut.findId(prodId, product => {
    res.render('shop/product-details', {pageTitle: 'Details', data: product })
   })
}