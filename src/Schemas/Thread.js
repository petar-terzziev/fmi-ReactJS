const mongoose = require("mongoose");
const mongoURI = "mongodb://localhost/test";
const ThreadSchema = new mongoose.Schema({
  title: String,
  author: ObjectId,
  subcategory: String
});

module.exports = mongoose.model("Thread", ThreadSchema);
