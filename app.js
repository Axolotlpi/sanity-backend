var express = require('express');
var path = require('path');
var logger = require('morgan');
var {isValidSignature, requireSignedRequest} = require('@sanity/webhook')
var api = require('./api');



var app = express();

//static stite setup
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public-backup')));
app.use(logger('dev'));

//sanity webhook
app.post('/api', 
  express.json(), 
 requireSignedRequest({secret: process.env.SANITY_KEY}), 
  api);


// catch 404 and forward to error handler
// Since this is the last non-error-handling
// middleware used, we assume 404, as nothing else
// responded.
app.use(function(req, res, next) {
  res.status(404);

  // respond with html page
  if (req.accepts('html')) {
    res.render('404', { url: req.url });
    return;
  }

  // respond with json
  if (req.accepts('json')) {
    res.json({ error: 'Not found' });
    return;
  }

  // default to plain-text. send()
  res.type('txt').send('Not found');
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
