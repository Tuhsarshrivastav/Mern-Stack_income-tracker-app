const express = require("express");
const {
  createExpenses,
  deleteExpenses,
  fetchExpenses,
  fetchSingleExpenses,
  updateExpenses,
} = require("../controllers/expenses/expensesController");
const authMiddewares = require("../middlewares/authMiddlwares");
const router = express();



authMiddewares, router.post("/", authMiddewares, createExpenses);
router.get("/", authMiddewares, fetchExpenses);
router.get("/:id", authMiddewares, fetchSingleExpenses);
router.put("/:id", authMiddewares, updateExpenses);
router.put("/:id", authMiddewares, deleteExpenses);

module.exports = router;
