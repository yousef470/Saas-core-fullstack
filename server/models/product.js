const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: String,
  category: String,
  price: String,
  stock: Number,
  status: String,
  image: String
});

module.exports = mongoose.model("Product", productSchema);