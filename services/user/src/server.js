var ServerBase = require('./base/serverBase');
var UserController = require('./controllers/userController');
var SessionController = require('./controllers/sessionController');

class Server extends ServerBase{
  constructor(){
    super();
    this.controller = new UserController();
    this.sessionController = new SessionController();
  }
  start(port){
    this.app.listen(port);
  }
  loadRoutes(){
    //root level routes
    this.app.get('/setup', this.controller.setup);
    //middleware
    this.apiRoutes.use(function(req, res, next) {
        this.sessionController.verifyToken(req, res, next);
    });

    //api routes under /api/
    this.apiRoutes.post('/create', this.controller.create);
    this.apiRoutes.get('/users', this.controller.listUsers);
    this.apiRoutes.post('/authenticate', this.controller.authenticate);
    this.apiRoutes.post('/verify', his.sessionController.verifyToken);
    this.apiRoutes.post('/logout', this.sessionController.authenticate);

    //always
    parent.loadRoutes();
  }
}

new Server().start(3001);
