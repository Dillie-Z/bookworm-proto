'use strict'

const knex = require('../db/knex');

function getCustomers(req,res){
  knex('customers')
    .then(customers=>{
      if(!customers){
        return next(err);
      }
      res.json(customers);
    })
    .catch(err=>{
      return err;
    });
}

function searchCustomers(req,res){
  knex('customers')
    .where({'lastName':req.body.lastName.toLowerCase()})
    .then(customers=>{
      if(!customers){
        return next(err);
      }
      res.json(customers);
    })
    .catch(err=>{
      return err;
    });
}

function createCustomer(req,res){
  const newCustomer = {
    'firstName':req.body.firstName.toLowerCase(),
    'lastName':req.body.lastName.toLowerCase(),
    'phoneNumber':req.body.phoneNumber,
  };
  knex('customers')
    .insert(newCustomer,'*')
    .then(customer=>{
      if(!customer){
        return next(err);
      }
      res.json(customer);
    })
    .catch(err=>{
      return err;
    });
}

function updateCustomer(req,res){

}

function checkoutCustomer(req,res){

}

function tradeInCustomer(req,res){

}
