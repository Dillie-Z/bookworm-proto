'use strict'

const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');

router.get('/',(req,res,next)=>{

});

router.get('/search',(req,res,next)=>{

});

router.post('/',(req,res,next)=>{

});

router.put('/:id',(req,res,next)=>{
  knex('customers')
    .where({'id':req.params.id})
    .first()
    .then(customer=>{
      if(!customer){
        return next(err);
      }
      const {
        firstName,
        lastName,
        phoneNumber
      } = req.body;
      if(firstName){
        customer.firstName = firstName.toLowerCase();
      }
      if(lastName){
        customer.lastName = lastName.toLowerCase();
      }
      if(phoneNumber){
        customer.phoneNumber = phoneNumber;
      }
      knex('customers')
        .update(customer,'*')
        .where({'id':req.params.id})
        .then(()=>{
          res.json('Customer Updated')
        })
    })
    .catch(err=>{
      return err
    })
})

router.put('/checkout/:id',(req,res,next)=>{
  knex('customers')
    .where({'id':req.params.id})
    .first()
    .then(customer=>{
      if(!customer){
        return next(err);
      }
      const {
        total
      } = req.body;
      if(total>customer.accountBalance){
        res.json('Not enough Trade Credit');
      }
      if(total){
        customer.accountBalance -= total;
      }

      knex('customers')
        .update(customer,'*')
        .where({'id':req.params.id})
        .then(()=>{
          res.json('Customer Checked Out');
        });
    })
    .catch(err=>{
      return err;
    });
});

router.put('/tradein/:id',(req,res,next)=>{
  knex('customers')
    .where({'id':req.params.id})
    .first()
    .then(customer=>{
      if(!customer){
        return next(err);
      }
      const {
        total
      } = req.body;
      if(total){
        customer.accountBalance += total;
      }
      knex('customers')
        .update(customer,'*')
        .where({'id':req.params.id})
        .then(()=>{
          res.json('Customer Account Balance Updated.');
        });
    })
    .catch(err=>{
      return err;
    });
});


modules.exports = router;
