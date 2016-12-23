var express = require('express');
var router = express.Router();
var mongoose=require('mongoose');
mongoose.Promise = require('bluebird');
var user=require("../models/user.js");

//Schema for Authentication
/*var Schema=new mongoose.Schema(
{
  username:String,
  password:String
});

var user=mongoose.model('usercredentials',Schema);*/

/* GET users listing. */
/*router.post('/:userid/:password', function(req, res, next) {
  var username=req.params.userid;
  var password=req.params.password;
  res.send('Username:'+username+"  Password:"+password);
  //res.send('Password'+password);
});
*/

router.post('/', function(req, res, next) {
new user(
  {
    username:req.body.username,
    password:req.body.password
  }
).save(function(err,doc){
  if(err) res.json(err);
  else
  {
     //console.log(doc);
    res.send("Successfully Inserted");
  }
});

});



module.exports = router;
