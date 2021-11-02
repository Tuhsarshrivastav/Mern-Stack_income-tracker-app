const expressAsyncHandler = require("express-async-handler");
const Expenes = require("../../model/expenes");
const Income = require("../../model/income");

const accountStatsController = expressAsyncHandler(async (req, res) => {
  try {
    // Expenses statistics
    const expenseStas = await Expenes.aggregate([
      //filter
      { $match: { amount: { $gte: 0 } } },
      {
        $group: {
          _id: null,
          averageExp: { $avg: "$amount" },
          totalExp: { $sum: "$amount" },
          minExp: { $min: "$amount" },
          maxExp: { $max: "$amount" },
          totalRecordsExp: { $sum: 1 },
        },
      },
    ]);
    // income statistics
    const incomeStas = await Income.aggregate([
      //filter
      { $match: { amount: { $gte: 0 } } },
      {
        $group: {
          _id: null,
          averageIncome: { $avg: "$amount" },
          totalIncome: { $sum: "$amount" },
          minIncome: { $min: "$amount" },
          maxIncome: { $max: "$amount" },
          totalRecordsIncome: { $sum: 1 },
        },
      },
    ]);
    res.json({ expenseStas, incomeStas });
  } catch (error) {
    res.json(error);
  }
});
module.exports = accountStatsController;
