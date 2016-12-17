'use strict';

var express = require('express');
var config = require('./config/environment');
var fileUpload = require('express-fileupload');
var http = require('http');
// Setup server
var app = express();
// app.use(fileUpload());

app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});


app.post('/upload', function(req, res){
  console.log(req.files);
})


var server = http.createServer(app);

require('./config/express')(app);

// config routes
require('./routes')(app);

// config DB
var mongoose = require('mongoose');
mongoose.connect('mongodb://admin:123456@ds151697.mlab.com:51697/techkids');
//mongoose.connect('mongodb://localhost/techkids');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'DB connection error: '));
db.once('open', function() {
  console.log('DB connection success! ');
});




// Start server
server.listen(config.port, config.ip, function() {
    console.log('Express server listening on %d, in %s mode', config.port, app.get('env'));
});

// Expose app
exports = module.exports = app;
