var express = require('express');
var favicon = require('serve-favicon');
var logger = require('morgan');
var bodyParser = require('body-parser');
var debug = require('debug')('iotgo');
var routes = require('./routes/index');
// connect Mongoose to your DB
var mongoose = require('mongoose');
MONGOLAB_URI= mongodb://iotgo:venki.gv143@ds231951.mlab.com:31951/heroku_qk01kgqc
mongoose.connect(process.env.MONGOLAB_URI, function (error) {
    if (error) console.error(error);
    else console.log('mongo connected');
});
require('dotenv').config()
var app = express();

// web app backend
app.use('/admin', favicon(__dirname + '/public/backend/favicon.png'));
app.use('/admin', express.static(__dirname + '/public/backend'));
// web app frontend
app.use(favicon(__dirname + '/public/frontend/favicon.png'));
app.use(express.static(__dirname + '/public/frontend'));

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/api', routes);

// catch 404 and redirect to /
app.use(function(req, res, next) {
    res.redirect('/?path=' + req.path);
});

// error handlers

app.use(function(err, req, res, next) {
    // debug(err);
    res.status(err.status || 500).end();
});
const port = process.env.PORT || 3000;
//app.listen(3000, function() {
  //console.log('Example app listening on port 3000!');
//});
app.listen(port);

module.exports = app;
