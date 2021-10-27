const expressAsyncHandler = require("express-async-handler");
const Income = require("../../model/income");

// create income
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
    throw new Error(
      error + "Problem while creating income , please try again "
    );
  }
});

// fetch all incomes
const fetchincome = expressAsyncHandler(async (req, res) => {
  try {
    const income = await Income.find({});
    res.json(income);
  } catch (error) {
    throw new Error(error + "Problem while fetch income , please try again ");
  }
});

// fetch single income
const fetchSingleIncome = expressAsyncHandler(async (req, res) => {
  const { id } = req.params;
  try {
    const income = await Income.findById(id);
    res.json(income);
  } catch (error) {
    throw new Error(error + "Problem while fetch user income , please try again ");
  }
});

module.exports = { createIncome, fetchincome, fetchSingleIncome };
