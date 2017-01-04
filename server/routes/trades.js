'use strict'

const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const trade = require('../middleware/trades')

router.get('/',(req,res,next)=>{
  order.getTrades(req,res);
});

router.get('/:id',(req,res,next)=>{
  order.getTrade(req,res);
});

router.post('/:id',(req,res,next)=>{
  order.createTrade(req,res);
});

router.put('/:id',(req,res,next)=>{
  order.updateTrade(req,res);
});

router.delete('/:id',(req,res,next)=>{
  order.deleteTrade(req,res);
});

module.exports = router;
