'use strict'

const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const order = require('../middleware/orderItems')

router.get('/',(req,res,next)=>{
  order.getOrderItems(req,res);
});

router.get('/item/:id',(req,res,next)=>{
  order.getOrderItem(req,res);
});

router.put('/:id',(req,res,next)=>{
  order.updateOrderItem(req,res);
});

router.post('/:id',(req,res,next)=>{
  order.createOrderItem(req,res);
});

router.delete('/:id',(req,res,next)=>{
  order.deleteOrderItem(req,res);
});

module.exports = router;
