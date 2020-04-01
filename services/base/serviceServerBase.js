var ServerBase = require('./serverBase');
var mongoose = require('mongoose');
var databaseConfig = require('../config/database');
class ServiceServerBase extends ServerBase{
  constructor(){
    mongoose.connect(databaseConfig.database, {user: databaseConfig.user, password : databaseConfig.password});
    super();
  }
}
module.exports = ServiceServerBase;
