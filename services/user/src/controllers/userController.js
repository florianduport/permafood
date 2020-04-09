var uniqid = require('uniqid');
var sha1 = require('sha1');
var jwt = require('jsonwebtoken');
var Session = require('../models/sessionModel');
var User = require('../models/userModel');

class UserController{
  constructor(){

  }

  setup(req, res){
    var asep = new User({
        username: 'johndoe@test.com',
        password: sha1('test123'),
        firstname: 'john',
        lastname: 'doe',
        admin: true
    });
    // save the sample user
    asep.save(function(err) {
        if (err) {
            return res.status(200).json({ success: false, message: err.message });
        }

        console.log('User saved successfully');
        res.json({ success: true });
    });
  }

  create(req, res){
    // create a sample user
    var user = new User({
        username: req.body.username,
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        password: sha1(req.body.password),
        admin: false
    });
    // save the sample user
    user.save(function(err) {
        if (err) {
            return res.status(200).json({ success: false, message: err.message });
        }

        console.log('User saved successfully');
        res.json({ success: true });
    });
  }

  authenticate(req, res){
    // find the user
    User.findOne({
        username: req.body.username
    }, function(err, user) {
        if (err) {
            return res.status(200).json({ success: false, message: err.message });
        }
        if (!user) {
            res.json({ success: false, message: 'Authentication failed. User not found.' });
        } else if (user) {
            // check if password matches
            if (user.password != sha1(req.body.password)) {
                res.json({ success: false, message: 'Authentication failed. Wrong password.' });
            } else {
                if (!req.body.deviceId) {
                    res.json({ success: false, message: 'Authentication failed. Device ID not found.' });
                } else {
                    // if user is found and password is right
                    // create a token with only our given payload
                    // we don't want to pass in the entire user since that has the password
                    const payload = {
                        admin: user.admin,
                        username: user.username
                    };
                    var secretKey = uniqid();
                    // save session to db
                    var sess = {
                        username: req.body.username,
                        deviceId: req.body.deviceId,
                        admin: user.admin,
                        secret: secretKey
                    };
                    Session.findOneAndUpdate({
                        username: req.body.username,
                        deviceId: req.body.deviceId
                    }, sess, { upsert: true }, function(err, res) {
                        if (err) throw err;

                        console.log('Session saved successfully');
                    });

                    var token = jwt.sign(payload, secretKey, {
                        expiresIn: 1440 // expires in 24 hours
                    });

                    // return the information including token as JSON
                    res.json({
                        success: true,
                        username: req.body.username,
                        token: token
                    });
                }
            }
        }
    });
  }

  listUsers(req, res){
    User.find({}, function(err, users) {
         res.json(users);
     });
  }

}
module.exports = UserController;
