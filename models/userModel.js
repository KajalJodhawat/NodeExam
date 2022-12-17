const mongoose = require("mongoose");
const { stringify } = require("querystring");

let mySchema = mongoose.Schema;

//define schema
let myUserSchema = new mySchema({
  //firstName: { type: String, required: [true, "first name is required.."] },
  Name: String,
  email: { type: String, required: [true, "email is required.."] },
  password:{type: String, required: [true, "Passowrd is required"]},
  Number: String,
  Gender: String,
  Address: String
});

const tableName = "users";

let userData = mongoose.model(tableName, myUserSchema);

module.exports = userData;
