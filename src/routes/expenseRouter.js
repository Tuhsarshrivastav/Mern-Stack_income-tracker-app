const express = require("express");
const {
  createExpenses,
  deleteExpenses,
  fetchExpenses,
  fetchSingleExpenses,
  updateExpenses,
} = require("../controllers/expenses/expensesController");
const router = express();

router.post("/", createExpenses);
router.get("/", fetchExpenses);
router.get("/:id", fetchSingleExpenses);
router.put("/:id", updateExpenses);
router.put("/:id", deleteExpenses);

module.exports = router;
