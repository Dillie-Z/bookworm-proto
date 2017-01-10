'use strict'

const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const book = require('../middleware/books');
const config = require('../_config');

const request = require('request');
const searchURL = 'https://www.googleapis.com/books/v1/volumes?q=ISBN_13%3A';
const searchParams = '&maxResults=1&orderBy=relevance&fields=items(saleInfo(offers%2FretailPrice%2CretailPrice)%2CvolumeInfo(authors%2Ccategories%2Cdescription%2CpublishedDate%2Cpublisher%2Csubtitle%2Ctitle))&key=';

router.get('/',(req,res,next)=>{
  book.getBooks(req,res);
});

router.get('/author',(req,res,next)=>{
  book.getBookByAuthor(req,res);
})

router.get('/title',(req,res,next)=>{
  book.getBookByTitle(req,res);
})

router.get('/info/:isbn',(req,res,next)=>{
  // console.log(req);
  const url = searchURL + req.params.isbn + searchParams + config.apikey;

  request({uri:url},(err,response,body)=>{
    // console.log(body);
    // console.log(response);
    if(err||response.statusCode !== 200 ){
      res.error(err);
    }
    body = JSON.parse(body);
    // JSON.stringify(body)
    const book = {
      title:body.items[0].volumeInfo.title,
      subtitle:body.items[0].volumeInfo.subtitle,
      author:body.items[0].volumeInfo.authors[0],
      publisher:body.items[0].volumeInfo.publisher,
      publishedDate:body.items[0].volumeInfo.publishedDate,
      description:body.items[0].volumeInfo.description,
      retailPrice:body.items[0].saleInfo.retailPrice.amount,
      genre:body.items[0].volumeInfo.categories[0]
    };
    res.json(book);
  });

});

router.post('/',(req,res,next)=>{
  book.addBook(req,res);
});

router.put('/:id',(req,res,next)=>{
  book.updateBook(req,res);
});

router.get('/quantity/:isbn',(req,res,next)=>{
  book.updateQuantity(req,res);
});


module.exports = router;
