const adminData = require('../routes/admin');


const product = [];


exports.getAddProduct = (req, res, next)=>{
    res.render('add', {pageTitle:'Add Product', path: '/admin/add'})
}

exports.postProduct = (req, res)=>{
    product.push({title: req.body.title, description: req.body.description, link: req.body.link});
    res.redirect('/');
}

exports.getPostProducts = (req, res, next)=>{
    console.log( "shop", adminData.product);
    res.render('shop', {pageTitle: 'Shop', title: product,  path: '/'})
}