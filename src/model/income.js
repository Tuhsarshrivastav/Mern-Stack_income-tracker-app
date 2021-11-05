const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate-v2");

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
    createdAt: { type: "Date", default: new Date() },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: [true, "User Id is required"],
    },
  },
  {
    timestamp: true,
    toJSON: {
      virtuals: true,
    },
    toObject: {
      virtuals: true,
    },
  }
);

// pagination
incomeSchema.plugin(mongoosePaginate);

const Income = mongoose.model("Income", incomeSchema);
module.exports = Income;
