'use strict'

const knex = require('../db/knex');


function getOrderItems(req,res){
  knex('orderItems')
    .then(orderItems=>{
      if(!orderItems){
        return next(err);
      }
      res.json(orderItems);
    })
    .catch(err=>{
      return err;
    });
}

function getOrderItem(req,res){
  knex('orderItems')
    .where({'id':req.params.id})
    .first()
    .then(orderItem=>{
      if(!orderItem){
        return next(err);
      }
      res.json(orderItem);
    })
    .catch(err=>{
      return err;
    });
}

function createOrderItem(req,res){
  const newOrderItem = {
    'title':req.body.title,
    'isbn':req.body.isbn,
    'price':req.body.price,
    'order_id':req.params.id
  };
  knex('orderItems')
    .insert(newOrderItem,'*')
    .then(orderItems=>{
      if(!orderItems){
        return next(err);
      }
      res.json('orderItems created');
    })
    .catch(err=>{
      return err;
    });
}

function updateOrderItem(req,res){
  knex('orderItems')
    .where({'id':req.params.id})
    .first()
    .then(orderItem=>{
      if(!orderItem){
        return next(err);
      }
      const {
        title,
        isbn,
        price
      } = req.body;
      if(title){
        orderItem.title = title;
      }
      if(isbn){
        orderItem.isbn = isbn;
      }
      if(price){
        orderItem.price = price;
      }
      knex('orderItems')
        .where({'id':req.params.id})
        .update(orderItem,'*')
        .then(()=>{
          res.json('OrderItem Updated.');
        });
    })
    .catch(err=>{
      return err;
    });
}

function deleteOrderItem(req,res){
  knex('orderItems')
    .where({'id':req.params.id})
    .del()
    .then(()=>{
      res.json('OrderItem Deleted.');
    })
    .catch(err=>{
      return err;
    });
}

module.exports = {
  getOrderItems,
  getOrderItem,
  createOrderItem,
  updateOrderItem,
  deleteOrderItem
}
