const mongoose = require("mongoose");
const SubategorySchema = new mongoose.Schema({
  name: String,
  category: String
});

module.exports = mongoose.model("Subcategory", SubategorySchema);
