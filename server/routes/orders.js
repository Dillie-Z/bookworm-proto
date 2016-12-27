'use strict'

const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const order = require('../middleware/orders')

router.get('/',(req,res,next)=>{
  order.getOrders(req,res);
});

router.get('/:id',(req,res,next)=>{
  order.getOrder(req,res);
});

router.post('/',(req,res,next)=>{
  order.createOrder(req,res);
});

router.put('/:id',(req,res,next)=>{
  order.updateOrder(req,res);
});

router.delete('/:id',(req,res,next)=>{
  order.deleteOrder(req,res);
});

module.exports = router;
