const express = require('express');
const router = express.Router();
const passport = require('passport');


router.post('/', passport.authenticate('local',{
  successRedirect:'#/',
  failureRedirect:'#/',
  failureFlash: true
}),(req,res,next)=>{
  console.log('Spell of Entry was a Sucsess');
});

module.exports = router;
