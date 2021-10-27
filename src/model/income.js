const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

//schema for user
const incomeSchema = mongoose.Schema(
  {
    title: {
      type: "String",
      required: [true, "Title is required"],
    },
    description: {
      type: "String",
      required: [true, "Description is required"],
    },
    type: {
      type: "String",
      default: "income",
    },
    amount: {
      type: Number,
      required: [true, "Amount is required"],
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: [true, "User Id is required"],
    },
  },
  {
    timestamp: true,
  }
);

module.exports = mongoose.model("Income", incomeSchema);
