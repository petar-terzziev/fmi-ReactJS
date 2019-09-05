const express = require("express");
const router = express.Router();
const Thread = require("../Schemas/Thread");
const Product = require("../Schemas/Product");
const User = require("../Schemas/User");

router.get("/:type/:value", (req, res) => {
  const type = req.params.type;
  let results = {
    threads: [],
    products: [],
    profiles: []
  };
  switch (type) {
    case "threads":
      {
        Thread.find({ title: new RegExp(req.params.value) }).then(data => {
          data.map(c =>
            results.threads.push({
              id: c.id,
              title: c.title
            })
          );
          res.json(results);
        });
      }
      break;
    case "marketplace": {
      Product.find({ name: new RegExp(req.params.value) }).then(data => {
        data.map(c =>
          results.products.push({
            id: c.id,
            name: c.name,
            price: c.price
          })
        );
        res.json(results);
      });
    }
    case "profiles": {
      User.find({ username: new RegExp(req.params.value) }).then(data => {
        data.map(c =>
          results.profiles.push({
            id: c.id,
            username: c.username
          })
        );
        res.json(results);
      });
    }
    default:
      break;
  }
});

module.exports = router;
