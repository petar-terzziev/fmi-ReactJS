const User = require("../Schemas/User");

module.exports = app => {
  app.get("/users", (req, res, next) => {
    User.find()
      .exec()
      .then(user => res.json(user))
      .catch(err => next(err));
  });

  app.post("/users", (req, res, next) => {
    const { username, email, password } = req;
    console.log(req);
    const newUser = new User();
    newUser.email = email;
    if (!email) {
      return res.send({
        success: false,
        message: "Error: no email",
        value: password
      });
    }
    newUser.username = username;
    newUser.password = password;
    newUser.banned = false;
    newUser.type = "user";
    newUser.save();
  });
};
