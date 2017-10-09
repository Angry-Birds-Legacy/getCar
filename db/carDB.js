/*
                                 _..-------++._
                             _.-'/ |      _||  \"--._
                       __.--'`._/_\j_____/_||___\    `----.
                  _.--'_____    |          \     _____    /
                _j    /,---.\   |        =o |   /,---.\   |_
               [__]==// .-. \\==`===========/==// .-. \\=[__]
                 `-._|\ `-' /|___\_________/___|\ `-' /|_.'     
                       `---'                     `---'
*/
var mongoose = require("mongoose");
// var mongoURI = "mongodb://localHost/angryBirds";
var mongoURI = "mongodb://angry-birds:12345678@ds113445.mlab.com:13445/get-car-legacy";
var db = mongoose.connection;
var Schema = mongoose.Schema;
// car schema
var carSchema  = new Schema({
    username: String,
    phone: Number,
    image: String,
    type : {type: String, uppercase: true},
    color: {type: String, uppercase: true},
    price: Number,
    operation:String,
    status:String,
    pickupPlace:String,
    returnPlace:String,
    rentingPeriod:Number,
    rentingPrice:Number
});

var carModel = mongoose.model('carModel',carSchema);

mongoose.connect(mongoURI,{useMongoClient: true});
db.once("open", function(){
   console.log("connect to db");
 }).on("error", function(){
   console.log("ERROR CONNECT to db");
 });
module.exports = carModel;
