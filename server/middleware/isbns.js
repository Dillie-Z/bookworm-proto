'use strict'

const knex = require('../db/knex');


function scanBook(req,res){
  let isbn = req.body.isbn;
  knex('isbn')
    .insert(isbn,'*');
    .then((row)=>{
      if(!row){
        return next(err);
      }
      return res.json('Book Scanned.')
    })
    .catch((err)=>{
      return err
    });
}

function getScannedIsbns(req,res){
  knex('isnbs')
    .then(isbns=>{
      if(!isbns){
        return next(err);
      }
      res.json(isbns);
    })
    .catch(err=>{
      return err;
    });
}

function checkIsbn(req,res){
  knex('books')
    .where({'scannedISBN':req.params.isbn})
    .first()
    .then(book=>{
      if(!book){
        res.json('No Book with that ISBN in the DataBase.');
      }
      res.json(book);
    })
    .catch(err=>{
      return err;
    });
}

function deleteIsbn(req,res){
  knex('isbns')
    .where({'scannedISBN':req.params.isbn})
    .first()
    .then(isbn=>{
      if(!isbn){
        res.json('No Book with that ISBN in the DataBase.');
      }
      return knex('isbns')
          .del()
          .where({'scannedISBN':req.params.isbn});
    })
    .then(()=>{
      res.json('isbn deleted');
    })
    .catch(err=>{
      return err;
    });
}

module.exports = {
  scanBook,
  getScannedIsbns,
  checkIsbn,
  deleteIsbn
};
