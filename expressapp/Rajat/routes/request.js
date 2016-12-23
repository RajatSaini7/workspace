var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
 var user_id = req.param('id');
  res.send(userid);
});

module.exports = router;
