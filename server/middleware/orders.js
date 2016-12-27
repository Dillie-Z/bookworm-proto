'use strict'

const knex = require('../db/knex');


function getOrders(req,res){
  knex('orders')
    .then(orders=>{
      if(!orders){
        return next(err);
      }
      res.json(orders);
    })
    .catch(err=>{
      return err;
    })
}

function getOrder(req,res){
  knex('orders')
    .where({'id':req.params.id})
    .first()
    .then(order=>{
      if(!order){
        return next(err);
      }
      res.json(order);
    })
    .catch(err=>{
      return err;
    })
}

function createOrder(req,res){
  const newOrder = {
    'total':req.body.total,
    'subtotal':req.body.subtotal,
    'itemQuantity': req.body.itemQuantity,
    'user_id':req.user.id
  };
  knex('orders')
    .insert(newOrder,'*')
    .then(()=>{
      res.json('Created New Order.')
    })
    .catch(err=>{
      return err;
    })
}

function updateOrder(req,res){
  knex('orders')
    .where({'id':req.params.id})
    .first()
    .then(order=>{
      if(!order){
        return next(err);
      }
      const {
        total,
        subtotal,
        itemQuantity
      } = req.body;
      if(total){
        order.total = total;
      }
      if(!subtotal){
        order.subtotal = subtotal;
      }
      if(itemQuantity){
        order.itemQuantity = itemQuantity;
      }
      knex('orders')
        .update(order,'*')
        .where({'id':req.params.id})
        .then(()=>{
          res.json('Order Created.');
        });
    })
    .catch(err=>{
      return err;
    });
}

function deleteOrder(req,res){
  knex('orders')
    .del()
    .where({'id':req.params.id})
    .then(()=>{
      res.json('Order was Deleted.')
    })
    .catch(err=>{
      return err;
    })
}

module.exports = {
  getOrders,
  getOrder,
  createOrder,
  updateOrder,
  deleteOrder
}
