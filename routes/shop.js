const express = require('express');
const router = express.Router();
const path = require('path');
const routerDirname = require('../helpers/path')

router.get('/', (req, res, next)=>{
    res.sendFile(path.join(routerDirname, 'views', 'shop.html'))
});

module.exports = router;