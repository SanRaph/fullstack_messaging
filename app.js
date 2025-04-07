let createError = require('http-errors');
let express = require('express');
let path = require('path');
let cookieParser = require('cookie-parser');
let logger = require('morgan');
let mongoose = require('mongoose');
let middlewares = require('../backend/middlewares/index')


let indexRouter = require('./api/index');
let usersRouter = require('./api/users');

let app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(middlewares.notFoundError);

app.use(middlewares.errorHandler);

//Listening for DB Operations
const DB = mongoose.connection;

DB.once('open', () => {
  console.log('Connected to DB');
});

DB.on('error', () => {
  console.log('Error in connecting to DB');
});



module.exports = app;
