var express = require("express");
const userModel = require("../models/userModel");

class userRouter {
  myFunction() {
    console.log("my function is called");
  }
}

module.exports = userRouter;
