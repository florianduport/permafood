var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');
class ServerBase{
  constructor(){
    this.app = express();
    this.apiRoutes = express.Router();

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
  start(port){
    this.app.listen(port);
  }
}
module.exports = ServerBase;
