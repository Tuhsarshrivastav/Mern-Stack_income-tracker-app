const expressAsyncHandler = require("express-async-handler");
const Income = require("../../model/income");

const createIncome = expressAsyncHandler(async (req, res) => {
  const { title, description, amount, user } = req.body;

  try {
    const income = await Income.create({
      title,
      amount,
      description,
      user,
    });
    res.json(income);
  } catch (error) {
    res.json(error.stack);
  }
});

module.exports = { createIncome };
