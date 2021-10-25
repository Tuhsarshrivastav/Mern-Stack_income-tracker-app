// dependencys
require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");

// imports
const dbConnect = require("./config/db.config");
const userRouter = require("./routes/userRoute");
const { errorHandler, notfound } = require("./middlewares/errorMiddlewares");

// db configuration
dbConnect();

//middleware
app.use(express.json());
app.use(cors());

//routes
app.use("/api/users", userRouter);

//error handlers
app.use(notfound);
app.use(errorHandler);

module.exports = app;
