var express = require('express');
var axios = require('axios');

class RedirectBase{
  constructor(serviceUrl, domain){
    this.serviceUrl = serviceUrl;
    this.domain = domain;
    this.apiRoutes = express.Router();
  }

  setRouter(app){
    app.use(this.domain, this.apiRoutes);
  }
  get(req, res){
    axios.get(this.serviceUrl+'api'+req.url)
      .then(function (response) {
        // handle success
        res.json(response.data);
      })
      .catch(function (error) {
        // handle error
        res.json(error);
      })
  }
  post(req, res){
    axios.post(this.serviceUrl+'api'+req.url, req.body)
      .then(function (response) {
        // handle success
        res.json(response.data);
      })
      .catch(function (error) {
        // handle error
        res.json(error);
      })
  }
}

module.exports = RedirectBase;
