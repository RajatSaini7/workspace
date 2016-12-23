var mongoose = require('mongoose');

//schema for authentication
var Schema = new mongoose.Schema({
    username: String,
    password: String
});
var user = mongoose.model('usercredentials', Schema);
module.exports=user;
