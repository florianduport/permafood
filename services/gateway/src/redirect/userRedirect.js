var RedirectBase = require('../base/redirectBase');
var gatewayConfig = require('../config/gateway');

class UserRedirect extends RedirectBase{
  constructor(){
    super(gatewayConfig.userServiceUrl, '/users');
  }
  loadRoutes(app){
      //set routes to this.apiRoutes here
      var parent = this;
      this.apiRoutes.get('/users', function(req, res){ parent.get(req, res); });
      this.apiRoutes.post('/authenticate', function(req, res){ parent.post(req, res); });

      this.setRouter(app);
  }
}
module.exports = UserRedirect;
