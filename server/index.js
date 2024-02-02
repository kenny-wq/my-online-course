const express = require("express");
const mongoose = require("mongoose");
const app = express();
const authRoute = require("./routes").auth;

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

app.use("/api/user", authRoute);

app.listen(3000, () => {
    console.log("server listen at port 3000")
})
