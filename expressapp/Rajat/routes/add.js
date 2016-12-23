var express = require('express');
var router = express.Router();


router.post('/', function(req, res) {
 //var num1 = req.params.num1;
 //var num2 = req.params.num2;
 //var num2 = req.body.num2;
//res.send(num1);
//res.send(num2);
//res.send(num2);
  //res.send("After Addtition:"(num1+num2));

/*var a=parseInt(req.params.num1);
var b=parseInt(req.params.num2);
var add=a+b;
res.send("After Addition:"+add);*/


var a=parseInt(req.param('num1'));
//var a=req.query.num1;
var b=parseInt(req.param('num2'));
var add=a+b;
res.send("hello"+add);
});

module.exports = router;
