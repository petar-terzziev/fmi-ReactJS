const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require("path");
const session = require("express-session");
const port = 8080;
const User = require("./Schemas/User");

mongoose.connect("mongodb://localhost/users", { useNewUrlParser: true });
mongoose.set("useCreateIndex", true);
const app = express();
app.use(bodyParser.json());
app.use(session({ secret: "secret", resave: true, saveUninitialized: false }));
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
  user.save((err, user) => {
    if (err) {
      res.status(505).json({ message: err });
    } else res.status(201).json(user);
  });
});

app.post("/api/login", (req, res, next) => {
  ({ username, password } = req.body);
  User.findOne({ username }, "username password", (err, user) => {
    if (user && user.password === password) {
      req.session.userId = user._id;
      res.status(200).end();
    } else {
      res.status(404).end();
    }
  });
});

app.get("/api/login", (req, res, next) => {
  console.log(req.session.userId);
  if (req.session.userId) {
    User.findById(req.session.userId, (err, user) => {
      res.json({ username: user.username, email: user.email });
    });
  } else res.json({ error: "You need to login first!" });
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
