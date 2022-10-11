const express = require('express');
const router = express.Router();
const path = require('path');
const routerDirname = require('../helpers/path')

const adminData = require('./admin.js');

router.get('/', (req, res, next)=>{
    console.log( "shop", adminData.product);
    const products = adminData.product
    res.render('shop', {pageTitle: 'Shop', title: products,  path: '/'})
});

module.exports = router;