let createError = require('http-errors');
let express = require('express');
let path = require('path');
let cookieParser = require('cookie-parser');
let logger = require('morgan');
let mongoose = require('mongoose');


let indexRouter = require('./routes/index');
let usersRouter = require('./routes/users');

let app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  const err = new Error(`Can't Find ${req.originalUrl}`);
  res.status(404);
  next(err);
});

app.use((err, req, res, next) => {
  const statusCode = res.status === 200 ? 500 : statusCode;
  res.status(statusCode);
  res.json({
    message: err.message,
    status: 'OK',
    stack: process.env.NODE_ENV === 'production' ? '🤷‍♀️' : err.stack
  });
});

//Listening for DB Operations
const DB = mongoose.connection;

DB.once('open', () => {
  console.log('Connected to DB');
});

DB.on('error', () => {
  console.log('Error in connecting to DB');
});



module.exports = app;
