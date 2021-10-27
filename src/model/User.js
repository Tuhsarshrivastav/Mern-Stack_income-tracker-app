const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

//schema for user
const userSchema = mongoose.Schema(
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

//Hash password
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

//Verify password
userSchema.methods.isPasswordMatch = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};
//compile schema into model
module.exports = mongoose.model("User", userSchema);
