'use strict'

const bcrypt = require('bcryptjs');
// const passport = require('passport');
const knex = require('../db/knex');
const jwt = require('jsonwebtoken');
const config = require('../_config');



function authenticate(req, res) {
  console.log('auth fired login');
  console.log('log in info email: ' + req.body.email);
  knex('users')
    .where('email', req.body.email)
    .first()
    .then((user) => {
      // if(!user){
      //   return next(err)
      // }
      if (!user) {
        // return next(err);
        res.json({
          success: false,
          message: 'Authentication failed. User not found.'
        });
      } else if (user) {
        console.log('user' + user.firstName);
        const valid = validPassword(req.body.password, user.hashedPassword);
        console.log('valid' + valid);
        if (!valid) {
          // return next(err)
          res.json({
            success: false,
            message: 'Authentication failed. Wrong password.'
          });
        } else {
          var token = jwt.sign({
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            type: user.type
          }, config.superSecret , {
            algorithm:'HS256',
            expiresIn: '1h'
          });
          console.log('token user' + token);
          res.json({
            firstName: user.firstName,
            type: user.type,
            token: token
          });
        }
      }
    })
    .catch(err => {
      return err;
    });
  }



  function createUser(req, res) {
    const hash = bcrypt.hashSync(req.body.password, 12);
    knex('users')
      .where('email', req.body.email)
      .first()
      .then((user) => {
        if (!user) {
          console.log('email, pass', req.body.email, req.body.password);
        let newUser = {
          firstName: req.body.firstName,
          lastName: req.body.lastName,
          email: req.body.email,
          hashedPassword: hash
        };
        // console.log(newUser);
        return knex('users')
          .insert((newUser), '*');
        }
      })
      .then((rows) => {
        if (!rows) {
          return next(err);
        }
        res.json({
          success: true,
          message: 'A user was conjured. '
        });
      })
      .catch((err) => {
        if (err) {
          return (err);
      }
    })
  }

  function isLoggedIn(req, res) {
    console.log('Somebody just Conjured in to the app!');

    var token = req.body.token || req.query.token || req.headers['x-access-token'];

    if (token) {

      // verifies secret and checks exp
      jwt.verify(token, superSecret, (err, decoded) => {
      if (err) {
        return res.json({
          success: false,
          message: 'Failed to authenticate token.'
        });
      } else {
        // if everything is good, save to request for use in other routes
        req.decoded = decoded;
        next(); // make sure we go to the next routes and don't stop here
      }
    });
    } else {
    // if there is no token
    // return an HTTP response of 403 (access forbidden) and an error message
      return res.status(403).send({
        success: false,
        message: 'No token provided.'
      });
    }
  }

  function isAdmin(req, res) {
    knex('users')
      .where('email', req.body.email)
      .first()
      .then((user) => {
          if (!user) {
            res.json({
              success: false,
              message: 'Authentication failed. User not found.'
            });
          } else if (user) {
            // const valid = validPassword(req.body.password, user.hashedPassword);
            jwt.verify(token, superSecret, function(err, decoded) {
              if (err) {
                return res.json({
                  success: false,
                  message: 'Failed to authenticate token.'
                });
              } else if (user.type === 'admin') {
                // if everything is good, save to request for use in other routes
                req.decoded = decoded;
                next(); // make sure we go to the next routes and don't stop here
              } else {
              return res.status(403).send({
                success: false,
                message: 'No Admin token provided.'
              });
            }
          })
        }
      })
      .catch(err => {
        return err;
      });
    }

  function validPassword(password, dbPassword) {
    const valid = bcrypt.compareSync(password, dbPassword);
    console.log('valid password fired' + valid);
    return valid;
  }



  module.exports = {
    authenticate,
    isLoggedIn,
    createUser,
    isAdmin
  };
