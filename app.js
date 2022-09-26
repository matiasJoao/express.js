const express = require('express');
const bodyParser = require('body-parser');
const adminRoutes = require('./routes/admin.js');
const shopRoutes = require('./routes/shop.js');
const path = require('path');

const app = express()

app.use(bodyParser.urlencoded({extends: false}));
app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use((req, res, next)=>{
    res.status(404).sendFile(path.join(__dirname,'views', 'page-not-found.html'))
});

app.listen(3000);   