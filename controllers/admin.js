const Prodcut = require('../Models/product');
exports.getProducts = (req, res, next) => {
    Prodcut.fetchAll(product =>{
        res.render('admin/products', {pageTitle: 'products', title: product,  path: '/admin/products'})
    });
  
}