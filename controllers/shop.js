const Prodcut = require('../Models/product');
exports.getIndex = (req, res, next) =>{
    Prodcut.fetchAll(product =>{
        res.render('shop/index', {pageTitle: 'Shop', title: product,  path: '/'})
    });
}

exports.getCart = (req, res, next) => {
    res.render('shop/cart', {path: '/cart', pageTitle:'Cart'})
}

exports.getCheckout = (req, res, next) => {
  res.render('shop/checkout', {pageTitle: 'Checkout', path: '/checkout'})
}