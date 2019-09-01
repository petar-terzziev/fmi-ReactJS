const express = require("express");
const router = express.Router();
const Thread = require("../Schemas/Thread");

router.post("/:id", (req, res) => {
  const newThread = Thread({
    title: req.body.title,
    author: req.body.author,
    content: req.body.content,
    subcategory: req.body.subcategory
  });

  newThread
    .save()
    .then(user => res.json(user))
    .catch(err => console.log(err));
});

router.get("/:id", (req, res) => {
  Thread.findOne({ _id: req.params.id }).then(data => {
    console.log(data);
    res.json({ title: data.title, content: data.content });
  });
});

module.exports = router;
