const mongoose = require("mongoose");
const mongoURI = "mongodb://localhost/test";
const SubategorySchema = new mongoose.Schema({
  name: String,
  category: String
});

module.exports = mongoose.model("Subcategory", SubategorySchema);
