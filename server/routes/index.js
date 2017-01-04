const express = require('express');
const router = express.Router();

const books = require('./books');
const customers = require('./customers');
const isbns = require('./isbns');
const orderItems = require('./orderItems');
const orders = require('./orders');
const tradeItems = require('./tradeItems');
const trades = require('./trades');
const login = require('./users/login');
const logout = require('./users/logout');
const signup = require('./users/signup');
const search = require('./users/search');



router.use('/books',books);
router.use('/customers',customers);
router.use('/isbns',isbns);
router.use('/orderItems',orderItems);
router.use('/orders',orders);
router.use('/tradeItems',tradeItems);
router.use('/trades',trades);
router.use('/login',login);
router.use('/logout',logout);
router.use('/signup', signup);
router.use('/users/search', search);

console.log('Index Conjured!');

router.get('/',(req,res)=>{
  res.send('Index Conjured');
});

module.exports = router;
