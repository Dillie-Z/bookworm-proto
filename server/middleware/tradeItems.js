'use strict'

const knex = require('../db/knex');


function getTradeItems(req,res){
  knex('tradeItems')
    .then(tradeItems=>{
      if(!tradeItems){
        return next(err);
      }
      res.json(tradeItems);
    })
    .catch(err=>{
      return err;
    });
}

function getTradeItem(req,res){
  knex('tradeItems')
    .where({'id':req.params.id})
    .first()
    .then(tradeItem=>{
      if(!tradeItem){
        return next(err);
      }
      res.json(tradeItem);
    })
    .catch(err=>{
      return err;
    });
}

function createTradeItem(req,res){
  const newTradeItem = {
    'title':req.body.title,
    'isbn':req.body.isbn,
    'price':req.body.price,
    'trade_id':req.params.id
  };
  knex('tradeItems')
    .insert(newTradeItem,'*')
    .then(tradeItems=>{
      if(!tradeItems){
        return next(err);
      }
      res.json('tradeItems created');
    })
    .catch(err=>{
      return err;
    });
}

function updateTradeItem(req,res){
  knex('tradeItems')
    .where({'id':req.params.id})
    .first()
    .then(tradeItem=>{
      if(!tradeItem){
        return next(err);
      }
      const {
        title,
        isbn,
        price
      } = req.body;
      if(title){
        tradeItem.title = title;
      }
      if(isbn){
        tradeItem.isbn = isbn;
      }
      if(price){
        tradeItem.price = price;
      }
      knex('tradeItems')
        .where({'id':req.params.id})
        .update(tradeItem,'*')
        .then(()=>{
          res.json('TradeItem Updated.');
        });
    })
    .catch(err=>{
      return err;
    });
}

function deleteTradeItem(req,res){
  knex('tradeItems')
    .where({'id':req.params.id})
    .del()
    .then(()=>{
      res.json('TradeItem Deleted.');
    })
    .catch(err=>{
      return err;
    });
}

module.exports = {
  getTradeItems,
  getTradeItem,
  createTradeItem,
  updateTradeItem,
  deleteTradeItem
}
