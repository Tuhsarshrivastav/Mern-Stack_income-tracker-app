require('dotenv').config()
const express = require("express");
const app = express();

// imports
const dbConnect = require("./config/db.config")

// db configuration
dbConnect()

module.exports = app;