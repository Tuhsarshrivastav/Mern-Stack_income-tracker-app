require("dotenv").config();
const express = require("express");
const app = express();

// imports
const dbConnect = require("./config/db.config");
const userRouter = require("./routes/userRoute");
// db configuration
dbConnect();

//routes
app.use("/api/users", userRouter);

module.exports = app;
