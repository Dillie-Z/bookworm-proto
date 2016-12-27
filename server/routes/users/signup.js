const express = require('express');
const router = express.Router();
const auth = require('../../server/middleware/auth');


router.get('/', (req,res,next)=>{
  res.redirect('/');
});

router.post('/', (req,res,next)=>{
  auth.createUser(req,res);
});

module.exports = router;
