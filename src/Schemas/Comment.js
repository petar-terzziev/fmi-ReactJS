const mongoose = require("mongoose");
const CommentSchema = new mongoose.Schema({
  author_id: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  content: String,
  thread_id: { type: mongoose.Schema.Types.ObjectId, ref: "Thread" }
});

module.exports = mongoose.model("Comment", CommentSchema);
