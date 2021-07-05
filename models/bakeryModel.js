const mongoose = require ('mongoose')
//Schema
const Schema=mongoose.Schema;
const BakerySchema= new Schema({
  name: String,
  price: Number,
  imageurl:String
});

const NewOrderSchema= new Schema({
  username: String,
  phoneNo: String,
  status: String,
  totalAmt: Number,
  items: [{
    name: String,
    qty: Number,
    price: Number
  }]
});
//Model
const Bakery = mongoose.model('bakeries',BakerySchema);
const NewOrder= mongoose.model('new_order',NewOrderSchema);

module.exports = { Bakery, NewOrder};