const express = require('express');

const app = express();

app.use('/users', (req, res)=>{
    res.send('users')
});
app.use('/', (req, res)=>{
    res.send('something')
});
app.use((req, res, next)=>{
    console.log('first');
    next();
});
app.use((req, res, next)=>{
    console.log('second');
    res.send('any');
});

app.listen(3000);