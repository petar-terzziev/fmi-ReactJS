const mongoose = require("mongoose");
const mongoURI = "mongodb://localhost/test";
const CategorySchema = new mongoose.Schema({
  name: String
});

module.exports = mongoose.model("Category", CategorySchema);
