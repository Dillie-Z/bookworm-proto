'use strict'

const knex = require('../db/knex');

// JSON.stringify({success:1})
function scanBook(req,res){
  // let isbn = req.body.isbn;
  console.log('params... ' + req.params.isbn);
  console.log('body' + req.body.isbn);
  knex('isbns')
    .insert({isbn:req.body.isbn},'*')
    .then((row)=>{
      if(!row){
        return next(err);
      }
      console.log(row+'   row');
      console.log(res.body);
      res.json(JSON.stringify({success:1}));
    })
    .catch((err)=>{
      return err;
    });
}

function getScannedIsbns(req,res){
  knex('isbns')
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
