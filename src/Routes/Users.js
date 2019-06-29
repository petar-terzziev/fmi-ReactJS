const User = require("../Schemas/User");
const express = require("express");
const router = express.Router();
const validatereg = require("../validation/register");
const validatelogin = require("../validation/login");
const validateprofile = require("../validation/profile");
const jwt = require("jsonwebtoken");

router.post("/register", (req, res) => {
  const { errors, isValid } = validatereg(req.body);
  if (!isValid) {
    console.log(isValid);
    return res.status(400).json(errors);
  } else {
    const newUser = User({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
      type: "user",
      banned: false
    });
    newUser
      .save()
      .then(user => res.json(user))
      .catch(err => console.log(err));
  }
});

router.post("/profile", (req, res) => {
  const { errors, isValid } = validatelogin(req.body);
  // Check Validation
  if (!isValid) {
    console.log(req.body);
    return res.status(400).json(errors);
  }

  const username = req.body.username;
  User.findOne({ username }).then(user => {
    console.log(user);
  });
});

router.post("/login", (req, res) => {
  const { errors, isValid } = validatelogin(req.body);
  console.log(req.body);
  // Check Validation
  if (!isValid) {
    return res.status(400).json(errors);
  }

  const username = req.body.username;
  const password = req.body.password;
  console.log(req.body);

  // Find user by username
  User.findOne({ username }).then(user => {
    // Check for user
    if (!user) {
      errors.username = "User not found";
      return res.status(404).json(errors);
    }

    if (password === user.password) {
      // User Matched
      const payload = { id: user.id, type: user.type }; // Create JWT Payload
      const key = "secret";

      // Sign Token
      jwt.sign(payload, key, { expiresIn: 3600 }, (err, token) => {
        res.json({
          success: true,
          token: "Bearer " + token
        });
      });
    } else {
      errors.password = "Password incorrect";
      return res.status(400).json(errors);
    }
  });
});
module.exports = router;
