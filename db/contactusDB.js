var mongoose = require("mongoose");
var mongoURI = "mongodb://angry-birds:12345678@ds113445.mlab.com:13445/get-car-legacy";
var db = mongoose.connection;
var Schema = mongoose.Schema;
// contactus schema
var contactusSchema = new Schema({
    name: String,
    email : String,
    subject: String,
	message: String
});
var contactusModel = mongoose.model('contactusModel',contactusSchema);

mongoose.connect(mongoURI,{useMongoClient: true});
db.once("open", function(){
   console.log("connect to db");
 }).on("error", function(){
   console.log("ERROR CONNECT to db");
 });
module.exports = contactusModel;
