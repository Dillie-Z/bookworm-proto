'use strict'

const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const customer = require('../middleware/customers')

router.get('/',(req,res,next)=>{
  customer.getCustomers(req,res);
});

router.get('/search',(req,res,next)=>{
  customer.searchCustomers(req,res);
});

router.post('/',(req,res,next)=>{
  customer.createCustomer(req,res);
});

router.put('/:id',(req,res,next)=>{
  customer.updateCustomer(req,res);
})

router.put('/checkout/:id',(req,res,next)=>{
  customer.checkoutCustomer(req,res);
});

router.put('/tradein/:id',(req,res,next)=>{
  customer.tradeInCustomer(req,res);
});


module.exports = router;
