'use strict'

const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const knex = require('../../db/knex')

router.get('/',(req,res,next)=>{
  console.log('search conjured!');
  knex('users')
    .then(users=>{
      if(!users){
        console.log(err);
        next(err);
      }
      res.json(users);
    })
    .catch(err=>{
      return err;
    });
});

module.exports = router;
