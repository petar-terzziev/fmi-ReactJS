const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema({
  username: { type: String, unique: true },
  email: { type: String, unique: true },
  password: String,
  type: String,
  banned: Boolean
});

module.exports = mongoose.model("User", UserSchema);
