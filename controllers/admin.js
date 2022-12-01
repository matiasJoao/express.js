const Prodcut = require('../Models/product');
exports.getProducts = (req, res, next) => {
    Prodcut.fetchAll(product => {
        res.render('admin/products', { pageTitle: 'products', title: product, path: '/admin/products' })
    });

}
exports.getEditProducts = (req, res, next) => {
    const edit = req.query.edit
    if (!edit) {
        return res.redirect('/')
    }
    const prodID = req.params.productId
    Prodcut.findId(prodID, product => {
        if (!product) {
            return res.redirect('/')
        }
        res.render('admin/edit-products', { pageTitle: 'edit-products', title: 'Edit', path: 'admin/edit-products', prod: product })
    })
}