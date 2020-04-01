var ServiceServerBase = require('./base/serviceServerBase');
var UserController = require('./controllers/userController');
var SessionController = require('./controllers/sessionController');

class Server extends ServiceServerBase{
  constructor(){
    super();
    this.controller = new UserController();
    this.sessionController = new SessionController();
    this.loadRoutes();
  }
  start(port){
    this.app.listen(port);
  }
  loadRoutes(){
    //root level routes
    this.app.get('/setup', this.controller.setup);

    //middleware
    var sessionController = this.sessionController;
    this.apiRoutes.use(function(req, res, next) {
        sessionController.verifyToken(req, res, next);
    });

    //api routes under /api/
    this.apiRoutes.post('/create', this.controller.create);
    this.apiRoutes.get('/users', this.controller.listUsers);
    this.apiRoutes.post('/authenticate', this.controller.authenticate);
    this.apiRoutes.post('/verify', this.sessionController.verifyToken);
    this.apiRoutes.post('/logout', this.sessionController.logout);

    //always
    super.loadRoutes();
  }
}

new Server().start(3001);
