var uniqid = require('uniqid');
var jwt = require('jsonwebtoken');
var Session = require('../models/sessionModel');

class SessionController{

    verifyToken(req, res, callback){
      if(req.url == "/authenticate"){
          return callback();
      }
      // check header or url parameters or post parameters for token
      var token = req.body.token || req.query.token || req.headers['x-access-token'];
      var deviceId = req.body.deviceId || req.query.deviceId || req.headers['x-access-device-id'];
      var username = req.body.username || req.query.username || req.headers['x-access-username'];
      if (!deviceId) {
          return res.status(403).send({
              success: false,
              message: 'No Device ID provided.'
          });
      }
      if (!username) {
          return res.status(403).send({
              success: false,
              message: 'No Username provided.'
          });
      }
      if (!token) {
          return res.status(403).send({
              success: false,
              message: 'No token provided.'
          });
      }
      // get secret key on db
      var sess = Session.findOne({ "deviceId": deviceId, "username": username }, function(err, session) {
          if (err) {
              return res.status(200).json({ success: false, message: err.message });
          }

          if (session) {
              var secretKey = session.secret;
              // verifies secret and checks exp
              jwt.verify(token, secretKey, function(err, decoded) {
                  if (err) {
                      return res.status(200).json({ success: false, message: err.message });
                  }

                  if (callback) {
                      // if everything is good, save to request for use in other routes
                      req.decoded = decoded;
                      return callback();
                  } else {
                      return res.status(200).send({
                          success: true,
                          message: ''
                      });
                  }
              });
          } else {
              return res.json({ success: false, message: 'Failed to authenticate token.' });
          }
      });
    }

    logout(req, res){
      // check header or url parameters or post parameters for token
      var token = req.body.token || req.query.token || req.headers['x-access-token'];
      var deviceId = req.body.deviceId || req.query.deviceId || req.headers['x-access-device-id'];
      var username = req.body.username || req.query.username || req.headers['x-access-username'];
      // decode token
      if (token && deviceId && username) {
          // remove session key on db
          Session.find({ "deviceId": deviceId, "username": username }).remove().exec(function(err, data) {
              if (err) {
                  return res.status(200).json({ success: false, message: err.message });
              }

              return res.status(200).send({
                  success: true,
                  message: ''
              });
          });
      } else {
          // if there is no token
          // return an error
          return res.status(403).send({
              success: false,
              message: 'No token provided.'
          });
      }
    }
}

module.exports = SessionController;
