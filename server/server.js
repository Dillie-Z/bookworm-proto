'use strict'

const express = require('express');
const path = require('path');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const session = require('cookie-session');
const passconfig = require('./config/passport');
const passport = require('passport')

const app = express();
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, '../dist')));
app.use(session({secret:'$2a$06$0lrvkfkSz7HScOD4gIyrCumIG8F.i3LpAsH3tT3gNz9/i0P3bt4MW'})); // unhashed:ilovescotchscotchyscotchscotch
app.use(passport.initialize());
app.use(passport.session());

const index = require('./routes/index.js');
app.use('/index', index);

app.get('*',(req,res)=>{
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  console.log('err log', err.message);
  res.json({
    message: err.message,
    error: {}
  });
});



module.exports = app;
