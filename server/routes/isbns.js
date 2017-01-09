'use strict'

const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const scan = require('../middleware/isbns');

// not really needed
router.get('/',(req,res,next)=>{
  scan.getScannedIsbns(req,res);
});

// not really needed
router.get('/:isbn',(req,res,next)=>{
  scan.checkIsbn(req,res);
});

router.post('/',(req,res,next) => {
  // conssole.log(res.body + '   :res');
  scan.scanBook(req,res);
});

router.delete('/:isbn',(req,res,next)=>{
  scan.deleteIsbn(req,res);
});


module.exports = router;
