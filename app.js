const express = require('express');
const bodyParser = require('body-parser');
const adminRoutes= require('./routes/admin.js');
const shopRoutes = require('./routes/shop.js');
const path = require('path');
const notFoundController = require('./controllers/404')

const app = express()

app.set('view engine', 'ejs');
app.set('views', 'views')

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({extends: false}));
app.use('/admin', adminRoutes.routes);
app.use(shopRoutes);

app.use(notFoundController.notFound);

app.listen(3000);   