const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require("path");
const session = require("express-session");
const cors = require("cors");
const port = 8000;
//const db1 = "mongodb://localhost/forum";
const db1= "mongodb+srv://chovek:12345@cluster0-6wcmh.mongodb.net/test?retryWrites=true&w=majority";
mongoose
  .connect(db1, { useNewUrlParser: true })
  .then(() => {
    console.log("success");
  })
  .catch(err => console.log(err));
const app = express();

app.use(bodyParser.json());
app.use(session({ secret: "secret", resave: true, saveUninitialized: false }));
//require("./Routes/Users")(app);
//app.use(express.static(__dirname));
const users = require("./Routes/Users.js");
const profile = require("./Routes/Profile.js");
const subcategories = require("./Routes/Subcategories.js");
const threads = require("./Routes/Threads.js");
const thread = require("./Routes/Thread.js");
const comments = require("./Routes/Comments.js");
const products = require("./Routes/Products.js");

app.use(function(req, res, next) {
  // Website you wish to allow to connect
  res.setHeader("Access-Control-Allow-Origin", "*");

  // Request methods you wish to allow
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );

  // Request headers you wish to allow
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type,Origin, Authorization"
  );

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader("Access-Control-Allow-Credentials", true);

  // Pass to next layer of middleware
  next();
});
app.use(express.static("public"));
app.use("/api/thread", thread);
app.use("/api/threads", threads);
app.use("/api/categories", subcategories);
app.use("/api/users", users);
app.use("/api/profile", profile);
app.use("/api/products", products);
app.use("/api/comments", comments);

app.listen(port, () => {
  console.log("server listening on " + port);
});
