'use strict'

const knex = require('../db/knex');


function getTrades(req,res){
  knex('trades')
    .then(trades=>{
      if(!trades){
        return next(err);
      }
      res.json(trades);
    })
    .catch(err=>{
      return err;
    })
}

function getTrade(req,res){
  knex('trades')
    .where({'id':req.params.id})
    .first()
    .then(trade=>{
      if(!trade){
        return next(err);
      }
      res.json(trade);
    })
    .catch(err=>{
      return err;
    })
}

function createTrade(req,res){
  const newTrade = {
    'total':req.body.total,
    'itemQuantity': req.body.itemQuantity,
    'user_id':req.user.id,
    'customer_id':req.params.id
  };
  knex('trades')
    .insert(newTrade,'*')
    .then(()=>{
      res.json('Created New Trade.')
    })
    .catch(err=>{
      return err;
    })
}

function updateTrade(req,res){
  knex('trades')
    .where({'id':req.params.id})
    .first()
    .then(order=>{
      if(!order){
        return next(err);
      }
      const {
        total,
        itemQuantity
      } = req.body;
      if(total){
        order.total = total;
      }
      if(itemQuantity){
        order.itemQuantity = itemQuantity;
      }
      knex('trades')
        .update(order,'*')
        .where({'id':req.params.id})
        .then(()=>{
          res.json('Trade Created.');
        });
    })
    .catch(err=>{
      return err;
    });
}

function deleteTrade(req,res){
  knex('trades')
    .del()
    .where({'id':req.params.id})
    .then(()=>{
      res.json('Trade was Deleted.');
    })
    .catch(err=>{
      return err;
    });
}

module.exports = {
  getTrades,
  getTrade,
  createTrade,
  updateTrade,
  deleteTrade
}
