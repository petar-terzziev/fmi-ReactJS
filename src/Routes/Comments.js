const express = require("express");
const router = express.Router();
const Comment = require("../Schemas/Comment");
const User = require("../Schemas/User");

router.post("/:threadid", (req, res) => {
  const newComment = Comment({
    author_id: req.body.author_id,
    content: req.body.content,
    thread_id: req.params.threadid
  });

  newComment
    .save()
    .then(user => {
      res.json(user);
    })
    .catch(err => console.log(err));
});

router.get("/:threadid", (req, res) => {
  Comment.find({ thread_id: req.params.threadid })
    .populate("author_id")
    .then(data => {
      let temp = data.map(c => {
        return { author: c.author_id.username, content: c.content };
      });
      res.json(temp);
    });
});

module.exports = router;
