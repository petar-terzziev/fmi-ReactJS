const express = require("express");
const router = express.Router();
const Subcategory = require("../Schemas/Subcategory");

router.post("/:category", (req, res) => {
  const newSubcategory = Subcategory({
    name: req.body.title,
    category: req.body.category
  });

  newSubcategory
    .save()
    .then(user => res.json(user))
    .catch(err => console.log(err));
});
