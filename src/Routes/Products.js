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

router.post("/",upload.single("photo"), (req, res) => {
  const newProduct = Product({
    seller_id: req.body.seller_id,
    name: req.body.name, 
    price: req.body.price,
    photo: req.file.originalname,
    descr: req.body.descr,
    trade: req.body.trade 

  });

  newProduct.save()
    .then(product => {
      res.json(product);
    })
    .catch(err => console.log(err));
});

router.get("/", (req, res) => {
  Comment.find()
    .populate("seller_id")
    .then(data => {
      res.json(data);
    })
    .catch(err => console.log(err));
});

module.exports = router;