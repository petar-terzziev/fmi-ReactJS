const User = require("../Schemas/User.js");
const jwt = require("jsonwebtoken");
const express = require("express");
const router = express.Router();

router.get("/:id", (req, res) => {
  const id = req.params.id;
  User.findById(id).then(user => {
    res.json(user);
  });
});

module.exports = router;
