const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema({
  username: { type: String, unique: true },
  email: { type: String, unique: true },
  password: String,
  type: String,
  banned: Boolean,
  photo: {type: String, default: "userdefault.jpeg"},
  descr: { type: String, default: ""}
});

module.exports = mongoose.model("User", UserSchema);
