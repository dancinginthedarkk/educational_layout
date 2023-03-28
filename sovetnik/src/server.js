'use strict';

const express = require('express');
const morgan = require('morgan');
const path = require('path');

const app = express();

app.use(morgan('dev'));
app.use(express.static('.'));

const port = process.env.PORT || 8080;

app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, '.', 'index.html'));
});

app.get('/post', (req,res) => {
    res.sendFile(path.join(__dirname, '.', 'post.html'));
});

app.get('/service', (req,res) => {
    res.sendFile(path.join(__dirname, '.', 'service.html'));
});

app.listen(port, function() {
    console.log(`Server listening port ${port}`);
});
