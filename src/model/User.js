const mongoose = require("mongoose");

//schema for user

const userschema = mongoose.Schema(
  {
    firstname: {
      type: "String",
      required: [true, "First name is required"],
    },
    lastname: {
      type: "String",
      required: [true, "Last name is required"],
    },
    email: {
      type: "String",
      required: [true, "Email is required"],
    },
    password: {
      type: "String",
      required: [true, "Password is required"],
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamp: true,
  }
);

module.exports = mongoose.model("User", userschema);
