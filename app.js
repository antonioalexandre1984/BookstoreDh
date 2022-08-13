var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var booksV1 = require('./routes/booksV1');
var usersRouter = require('./routes/users');

var app = express();
require('./database/config.js');
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/bookstore/api/v1', booksV1);
app.use('/users', usersRouter);

module.exports = app;
