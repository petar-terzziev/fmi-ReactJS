const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const session = require("express-session");
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
const users = require("./Routes/Users.js");
const profile = require("./Routes/Profile.js");
const subcategories = require("./Routes/Subcategories.js");
const threads = require("./Routes/Threads.js");
const thread = require("./Routes/Thread.js");
const comments = require("./Routes/Comments.js");
const products = require("./Routes/Products.js");
const search = require("./Routes/Search.js");

app.use(function(req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type,Origin, Authorization"
  );
  res.setHeader("Access-Control-Allow-Credentials", true);

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
app.use("/api/search", search);

app.listen(port, () => {
  console.log("server listening on " + port);
});
