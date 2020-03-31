// =======================
// get the packages we need
// =======================
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var morgan = require('morgan');
var config = require('./config'); // get our config file

// =======================
// configuration =========
// =======================
var port = process.env.PORT || 3000; // used to create, sign, and verify tokens
// use body parser so we can get info from POST and/or URL parameters
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// use morgan to log requests to the console
app.use(morgan('dev'));

// =======================
// routes
// =======================
// basic route
app.get('/', function(req, res) {
    res.send('Hello! The API is at http://localhost:' + port + '/gateway');
});

// get an instance of the router for api routes
var apiRoutes = express.Router();

// API ROUTES -------------------
// we'll get to these in a second
apiRoutes.get('/test', function(req, res) {
    // create a sample user
    console.log('test received');
    res.json({ success: true });
});

// apply the routes to our application with the prefix /api
app.use('/gateway', apiRoutes);

// =======================
// start the server
// =======================
app.listen(port);
console.log('Magic happens at http://localhost:3000');
