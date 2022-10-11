const express = require('express');
const path = require('path');
const router = express.Router();
const routerDirname = require('../helpers/path')

const product = [];

router.get('/add', (req, res, next)=>{
    res.render('add', {pageTitle:'Add Product', path: '/admin/add'})
});
router.post('/add', (req, res)=>{
    product.push({title: req.body.title, description: req.body.description, link: req.body.link});
    res.redirect('/');
});

exports.routes = router;
exports.product = product;