const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate-v2");

//schema for user
const expensesSchema = mongoose.Schema(
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
      default: "expense",
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

expensesSchema.plugin(mongoosePaginate);

module.exports = mongoose.model("expenses", expensesSchema);
