'use strict'

const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const order = require('../middleware/tradeItems')

router.get('/',(req,res,next)=>{
  order.getTradeItems(req,res);
});

router.get('/item/:id',(req,res,next)=>{
  order.getTradeItem(req,res);
});

router.put('/:id',(req,res,next)=>{
  order.updateTradeItem(req,res);
});

router.post('/:id',(req,res,next)=>{
  order.createTradeItem(req,res);
});

router.delete('/:id',(req,res,next)=>{
  order.deleteTradeItem(req,res);
});

module.exports = router;
