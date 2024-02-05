const express = require("express");
const mongoose = require("mongoose");
const passport = require("passport");
const cors = require("cors");
const app = express();
const authRoute = require("./routes").auth;
const courseRoute = require("./routes").course;
require("dotenv").config();
require("./config/passport");

mongoose
  .connect("mongodb://localhost:27017/my-online-course-db")
  .then(() => {
    console.log("Connecting to mongodb...");
  })
  .catch((e) => {
    console.log(e);
  });

app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use("/api/user", authRoute);

app.use("/api/course",passport.authenticate("jwt",{session: false}),courseRoute);

app.listen(8000, () => {
    console.log("server listen at port 8000")
})
