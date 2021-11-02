// dependencys
require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");

// imports
const dbConnect = require("./config/db.config");
const userRouter = require("./routes/userRoute");
const incomeRoute = require("./routes/incomeRoute");
const expensesRouter = require("./routes/expenseRouter");
const accountRouter = require("./routes/accountStatsRouter");
const { errorHandler, notfound } = require("./middlewares/errorMiddlewares");

// db configuration
dbConnect();

//middleware
app.use(express.json());
app.use(cors());

// users route
app.use("/api/users", userRouter);

// income routes
app.use("/api/income", incomeRoute);

//  expenses routes
app.use("/api/expense", expensesRouter);

// acounts routes
app.use("/api", accountRouter);

//error handlers
app.use(notfound);
app.use(errorHandler);

module.exports = app;
