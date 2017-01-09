const express = require('express');
const router = express.Router();
const adminRouter = express.Router();

const auth = require('../../middleware/auth');


router.post('/',(req,res,next)=>{
  // auth.isAdmin(req,res)
  auth.authenticate(req, res);
});

module.exports = router;
