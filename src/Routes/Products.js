const express = require("express");
const router = express.Router();
const Product = require("../Schemas/Product");
const User = require("../Schemas/User");

const multer = require("multer");
const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, "./public/");
  },
  filename: function(req, file, cb) {
    cb(null, file.originalname);
  }
});

const upload = multer({ storage });

router.post("/", upload.single("photo"), (req, res) => {
  const photo = req.file === undefined ? "" : req.file.originalname;
  const newProduct = Product({
    seller_id: req.body.seller_id,
    name: req.body.name,
    price: req.body.price,
    photo,
    descr: req.body.descr,
    trade: req.body.trade
  });

  newProduct
    .save()
    .then(product => {
      res.json(product);
    })
    .catch(err => console.log("err", err));
});

router.get("/", (req, res) => {
  Product.find()
    .populate("seller_id")
    .then(data => {
      console.log("data:", data);
      res.json(data);
    })
    .catch(err => console.log(err));
});

module.exports = router;
