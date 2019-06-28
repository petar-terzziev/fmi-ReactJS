const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require("path");
const session = require("express-session");
const port = 8000;
const db1= "mongodb+srv://chovek:12345@cluster0-6wcmh.mongodb.net/test?retryWrites=true&w=majority";
mongoose.connect(db1, { useNewUrlParser: true }  ).then(() => {console.log("success")}).catch(err => console.log(err));
const app = express();
app.use(bodyParser.json());
app.use(session({ secret: "secret", resave: true, saveUninitialized: false }));
//require("./Routes/Users")(app);
//app.use(express.static(__dirname));
const users = require('./Routes/Users.js');



// Add headers
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});
app.use("/api/users",users);


app.listen(port, () => {
  console.log("server listening on " + port);
});