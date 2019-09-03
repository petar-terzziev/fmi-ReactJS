const mongoose = require("mongoose");
const ProductSchema = new mongoose.Schema({
  seller_id: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  name: String,
  price : Number,
  descr: String,
  photo: String,
  trade : Boolean,
});

module.exports = mongoose.model("Product", ProductSchema);
