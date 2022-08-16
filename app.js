var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const booksV1 = require('./routes/booksV1');
const authRouter = require('./routes/auth');

var app = express();
require('./database/config.js');
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(authRouter);
app.use('/bookstore/api/v1', booksV1);


module.exports = app;
