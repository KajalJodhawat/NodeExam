var express = require("express");
const mongoose = require("mongoose");
var bodyParser = require("body-parser");

var router = require("./routes/userRoutes");

var userRouter = require("./routes/userRoute");
let myUserRouter = new userRouter();

var app = express();
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.get("/user/adduser", (req, res) => {
  console.log("api endpoint...");
  myUserRouter.myFunction();
});

mongoose.connect("mongodb://127.0.0.1:27017/mydb");
mongoose.connection.on("connected", () => {
  console.log("CONNECTED TO DATA BASE ");
});
mongoose.connection.on("error", (err) => {
  console.log("oops! error occured", err);
});

app.listen(3000, () => {
  console.log("Listining to port ${port}");
});

module.exports = app;
