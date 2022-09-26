const express = require('express');
const path = require('path');
const router = express.Router();
const routerDirname = require('../helpers/path')

router.get('/add-product', (req, res, next)=>{
    res.sendFile(path.join(routerDirname, 'views', 'add-product.html'))
});
router.post('/add-product', (req, res)=>{
   console.log(req.body)
    res.redirect('/')
});

module.exports = router;