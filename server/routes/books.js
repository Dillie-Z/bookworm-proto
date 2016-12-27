'use strict'

const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const book = require('../middleware/books');


router.get('/',(req,res,next)=>{
  book.getBooks(req,res);
});

router.post('/',(req,res,next)=>{
  book.addBook(req,res);
});

router.put('/:id',(req,res,next)=>{
  book.updateBook(req,res);
});

router.put('/quantity/:id',(req,res,next)=>{
  book.updateQuantity(req,res);
});


module.exports = router;
