const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require("path");
const port = 8080;
const User = require("./Schemas/User");

mongoose.connect("mongodb://localhost/users", { useNewUrlParser: true });
const app = express();
app.use(bodyParser.json());
//require("./Routes/Users")(app);
//app.use(express.static(__dirname));

app.get("/api/users", (req, res, next) => {
  console.log("getting users from db");
  User.find()
    .exec()
    .then(user => res.json(user))
    .catch(err => next(err));
});

app.post("/api/register", (req, res, next) => {
  const user = new User({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
    type: "normal",
    banned: false
  });
  user.save();
});

app.post("/api/login", (req, res, next) => {
  ({ username, password } = req.body);
  User.findOne({ username }, "username password", (err, user) => {
    if (user) {
      res.status(200);
      res.end();
    } else {
      res.status(404);
      res.end();
    }
  });
});

app.get("/api/forums", (req, res, next) => {
  //same
  let forums = { hardware: ["GPU", "CPU"], software: ["OS", "Video Games"] };

  res.send(forums);
  console.log("sent forums");
});

app.get("/api/forums/:id", (req, res, next) => {
  //
  let comments = ["comment1", "comment2"];
  res.json(comments);
  console.log("sent comments for thread with id:" + req.params.id);
});

app.listen(port, () => {
  console.log("server listening on " + port);
});
module.exports = app;
