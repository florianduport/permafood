var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var mongoose = require('mongoose');
var databaseConfig = require('../config/database');
class ServerBase{
  constructor(){
    this.app = express();
    this.apiRoutes = express.Router();

    mongoose.connect(databaseConfig.database, {user: databaseConfig.user, password : databaseConfig.password});
    this.app.set('superSecret', databaseConfig.secret);

    this.app.use(bodyParser.urlencoded({ extended: false }));
    this.app.use(bodyParser.json());

    this.app.use(morgan('dev'));

    this.app.get('/', function(req, res) {
        res.send('Hello! The API is running');
    });

  }
  loadRoutes(){
    this.app.use('/api', this.apiRoutes);
  }
}
module.exports = ServerBase;
