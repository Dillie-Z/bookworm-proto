const express = require('express');
const router = express.Router();

router.get('/',(req,res)=>{
  res.send('Index Conjured');
});

module.exports = router;
