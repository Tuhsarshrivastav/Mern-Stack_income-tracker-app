const expressAsyncHandler = require("express-async-handler");
const Income = require("../../model/expenes");

// create expenses
const createExpenses = expressAsyncHandler(async (req, res) => {
  const { title, description, amount } = req.body;
  try {
    const expenses = await Income.create({
      title,
      amount,
      description,
      user: req.user._id,
    });
    res.json(expenses);
  } catch (error) {
    throw new Error(
      error + "Problem while creating expenses , please try again "
    );
  }
});

// fetch all expenses
const fetchExpenses = expressAsyncHandler(async (req, res) => {
  const { page } = req.query;
  try {
    const expenses = await Income.paginate(
      {},
      { limit: 10, page: Number(page), populate: "user" }
    );
    res.json(expenses);
  } catch (error) {
    throw new Error(error + "Problem while fetch expenses , please try again ");
  }
});

// fetch single expenses
const fetchSingleExpenses = expressAsyncHandler(async (req, res) => {
  const { id } = req.params;
  try {
    const expenses = await Income.findById(id);
    res.json(expenses);
  } catch (error) {
    throw new Error(
      error + "Problem while fetch user expenses , please try again "
    );
  }
});

//update expenses api
const updateExpenses = expressAsyncHandler(async (req, res) => {
  const { id } = req.params;
  const { title, description, amount } = req.body;
  try {
    const expenses = await Income.findByIdAndUpdate(
      id,
      {
        title,
        description,
        amount,
      },
      {
        new: true,
        runValidators: true,
      }
    );
    res.json(expenses);
  } catch (error) {
    throw new Error(
      error + "Problem while updating user expenses , please try again "
    );
  }
});

//delete expenses api
const deleteExpenses = expressAsyncHandler(async (req, res) => {
  const { id } = req.params;
  try {
    const expenses = await Income.findByIdAndDelete(id);
    res.json(expenses);
  } catch (error) {
    throw new Error(
      error + "Problem while deleting user expenses , please try again "
    );
  }
});

module.exports = {
  updateExpenses,
  createExpenses,
  fetchExpenses,
  fetchSingleExpenses,
  deleteExpenses,
};
