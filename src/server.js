const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const port = 8080;

mongoose.connect("mongodb://localhost/users", { useNewUrlParser: true });
const app = express();
//require("./Routes/Users")(app);

//app.use(express.static(__dirname));

app.get("/api/users", (req, res, next) => {
  //hardcoded values, for now
  let users = ["user1", "user2"];

  res.json(users);
  console.log("sent users");
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
