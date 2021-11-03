var express = require('express');
var path = require('path');
var logger = require('morgan');
var {requireSignedRequest} = require('@sanity/webhook')
var api = require('./api');



var app = express();

//static stite setup
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public-backup')));
// app.use(logger('dev'));

// errors setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

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

  res.format({
    html: function () {
      res.render('404', { url: req.url })
    },
    json: function () {
      res.json({ error: 'Not found' })
    },
    default: function () {
      res.type('txt').send('Not found')
    }
  })

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
