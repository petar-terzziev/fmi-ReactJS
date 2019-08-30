const mongoose = require("mongoose");
const ThreadSchema = new mongoose.Schema({
  title: String,
  author: String,
  content: String,
  subcategory: String
});

module.exports = mongoose.model("Thread", ThreadSchema);
