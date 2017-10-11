var mongoose = require("mongoose");
var mongoURI = "mongodb://angry-birds:12345678@ds113445.mlab.com:13445/get-car-legacy";
var db = mongoose.connection;
var Schema = mongoose.Schema;
// car schema

var comentSchema = new Schema({
  username: String,
  txt: String,
  carId: String
});

var Coment = mongoose.model('Coment', comentSchema);

mongoose.connect(mongoURI,{useMongoClient: true});
db.once("open", function(){
   console.log("connect to db");
 }).on("error", function(){
   console.log("ERROR CONNECT to db");
 })

module.exports = Coment;