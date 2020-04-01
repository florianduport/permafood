var ServerBase = require('./base/serverBase');
var UserRedirect = require('./redirect/userRedirect');

class Server extends ServerBase {
  constructor(){
    super();
    this.loadRoutes();
  }
  start(port){
    this.app.listen(port);
  }
  loadRoutes(){
    new UserRedirect().loadRoutes(this.app);
  }
}

new Server().start(3000);
