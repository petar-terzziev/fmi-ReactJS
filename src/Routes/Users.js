const User = require("../Schemas/User");
const express = require("express");
const router = express.Router();
const validatereg = require("../validation/register");
const validatelogin = require("../validation/login");
const validateprofile = require("../validation/profile");
const jwt = require("jsonwebtoken");
const config = require('config');
router.post("/register", (req, res) => {
  const { errors, isValid } = validatereg(req.body);
  if (!isValid) {
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
  // Check Validation
  if (!isValid) {
    return res.status(400).json(errors);
  }
  console.log("posting user: ", req.body);
  const username = req.body.username;
  const password = req.body.password;

  // Find user by username
  User.findOne({ username }).then(user => {
    console.log("found user: ", user);
    // Check for user
    if (!user) {
      errors.username = "User not found";
      return res.status(404).json(errors);
    }

    if (password === user.password) {
      // User Matched
      const payload = { id: user.id,name: user.username, type: user.type }; // Create JWT Payload

      // Sign Token
      jwt.sign(payload, config.get('jwtSecret'), { expiresIn: 3600 }, (err, token) => {
        res.json({
          success: true,
          token: token
        });
      });
    } else {
      errors.password = "Password incorrect";
      return res.status(400).json(errors);
    }
  });
});
module.exports = router;
