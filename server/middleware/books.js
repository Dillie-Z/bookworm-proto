'use strict'

const knex = require('../db/knex');
// const http = require('http');
// const key = require('../_config');
// const request = require('request');
// const searchURL = 'https://www.googleapis.com/books/v1/volumes?q=ISBN_13%3A';
// const searchParams = '&maxResults=2&key=';


// https: //www.googleapis.com/books/v1/volumes?q=ISBN%3A9780553588118&maxResults=2&key={YOUR_API_KEY}
//
// function getBookInfo(req, res) {
//   const url = searchURL + req.params.isbn + searchParams + config.apikey;
//   request(url, (request,info) => {
//     console.log(res);
//     return info;
//   }).on('error', function(e) {
//     console.log("Got an error: ", e);
//   });
// }

function getBooks(req, res) {
  knex('books')
    .then(books => {
      if (!books) {
        return next(err);
      }
      res.json(books);
    })
    .catch(err => {
      return err;
    });
}

function searchTitle(req, res) {
  knex('books')
    .where({
      'title': req.body.title
    })
    .then(book => {
      if (!book) {
        return next(err);
      }
      res.json(book);
    })
    .catch(err => {
      return err;
    });
}

function searchAuthor(req, res) {
  knex('books')
    .where({
      'author': req.body.author
    })
    .then(book => {
      if (!book) {
        return next(err);
      }
      res.json(book);
    })
    .catch(err => {
      return err;
    });
}

function addBook(req, res) {

  const newBook = {
    'title': req.body.title.toLowerCase(),
    'subtitle': req.body.subtitle.toLowerCase(),
    'author': req.body.author.toLowerCase(),
    'publisher': req.body.publisher,
    'publishedDate': req.body.publishedDate,
    'description': req.body.description,
    'retailPrice': req.body.retailPrice,
    'storePrice': req.body.storePrice,
    'tradeInPrice': req.body.tradeInPrice,
    'genre': req.body.genre.toLowerCase(),
    'quantity': 1,
    'scannedISBN': req.body.scannedISBN
  }
  knex('books')
    .insert(newBook, '*')
    .then((book) => {
      if (!book) {
        return next(err);
      }
      res.json('book was added')
    })
    .catch(err => {
      return err;
    });
}


function updateBook(req, res) {
  knex('books')
    .where({
      'id': req.params.id
    })
    .first()
    .then(book => {
      if (!book) {
        return next(err);
      }
      const {
        title,
        subtitle,
        author,
        publisher,
        publishedDate,
        description,
        retailPrice,
        storePrice,
        tradeInPrice,
        genre,
        quantity,
        scannedISBN
      } = req.body;
      if (title) {
        book.title = title.toLowerCase();
      }
      if (subtitle) {
        book.subtitle = subtitle.toLowerCase();
      }
      if (author) {
        book.author = author.toLowerCase();
      }
      if (publisher) {
        book.publisher = publisher;
      }
      if (publishedDate) {
        book.publishedDate = publishedDate;
      }
      if (description) {
        book.description = description;
      }
      if (retailPrice) {
        book.retailPrice = retailPrice;
      }
      if (storePrice) {
        book.storePrice = storePrice;
      }
      if (tradeInPrice) {
        book.tradeInPrice = tradeInPrice;
      }
      if (genre) {
        book.genre = genre.toLowerCase();
      }
      if (quantity) {
        book.quantity = quantity;
      }
      if (scannedISBN) {
        book.scannedISBN = scannedISBN;
      }
      knex('books')
        .update(book, '*')
        .where({
          'id': req.params.id
        })
        .then((book) => {
          res.json(book);
        });
    })
    .catch(err => {
      return err;
    });
}

function updateQuantity(req, res) {
  knex('books')
    .where({
      'id': req.params.id
    })
    .first()
    .then(book => {
      if (!book) {
        return next(err);
      }
      const {
        quantity
      } = req.body;

      if (quantity) {
        book.quantity ++;
      }

      knex('books')
        .update(book, '*')
        .where({
          'id': req.params.id
        })
        .then(() => {
          res.json(book);
        });
    })
    .catch(err => {
      return err;
    });
}

module.exports = {
  getBooks,
  searchTitle,
  searchAuthor,
  addBook,
  updateBook,
  updateQuantity
};
