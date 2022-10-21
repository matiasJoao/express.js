const express = require('express');
const bodyParser = require('body-parser');
const adminRoutes= require('./routes/admin.js');
const shopRoutes = require('./routes/shop.js');
const path = require('path');

const app = express()

app.set('view engine', 'ejs');
app.set('views', 'views')

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({extends: false}));
app.use('/admin', adminRoutes.routes);
app.use(shopRoutes);

app.use((req, res, next)=>{
    res.status(404).render('404', {pageTitle: 'Page Not Foud'})
});

app.listen(3000);   