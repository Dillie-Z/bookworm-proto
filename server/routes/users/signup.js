const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');


router.post('/',(req,res,next)=>{
  auth.createUser(req,res);
});

module.exports = router;
