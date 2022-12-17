var express = require("express");
const userModel = require("../models/userModel");

let router = express.Router();

router.post("/adduser", (req, res) => {
  console.log("/adduser : ", req.body);

  var user = req.body;

  var userOne = new userModel({

    Name: user.Name,
    email: req.body.email,
    password:req.body.password,
    Number: user.Number,
    Gender: user.Gender,
    Address: user.Address
  });

  userOne
    .save()
    .then((data) => {
      console.log("DATA SAVED : ", data);
      return res.status(200).json({ data: "data stored.." });
    })
    .catch((e) => {
      return res.status(201).json({ data: "Error : ", e });
    });

});

router.post("/adduser1", (req, res) => {
  console.log("/adduser1 :", req.body);

});



module.exports = router;
