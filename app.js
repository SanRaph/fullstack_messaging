var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

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


module.exports = app;
