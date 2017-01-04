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
      const customerList = []
      customers.forEach(customer=>{
        customerList.push(customer)
      })
      res.json(customerList);
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
          res.json('Customer Updated');
        });
    })
    .catch(err=>{
      return err;
    });
}

function checkoutCustomer(req,res){
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
}

function tradeInCustomer(req,res){
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
}

module.exports = {
  getCustomers,
  searchCustomers,
  createCustomer,
  updateCustomer,
  checkoutCustomer,
  tradeInCustomer
}
