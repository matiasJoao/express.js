const adminData = require('../routes/admin');
const Prodcut = require('../Models/product');




exports.getAddProduct = (req, res, next)=>{
    res.render('add', {pageTitle:'Add Product', path: '/admin/add'})
}

exports.postProduct = (req, res)=>{
   const product = new Prodcut(req.body.title, req.body.description, req.body.link)
   product.save()
    res.redirect('/');
}

exports.getPostProducts = (req, res, next)=>{
    Prodcut.fetchAll(product =>{
        res.render('shop', {pageTitle: 'Shop', title: product,  path: '/'})
    });
    
}