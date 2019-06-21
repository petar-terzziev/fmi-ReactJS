const mongoose = require("mongoose");
const mongoURI = "mongodb://localhost/test";
const UserSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
  type: String,
  banned: Boolean
});

module.exports = mongoose.model("User", UserSchema);
