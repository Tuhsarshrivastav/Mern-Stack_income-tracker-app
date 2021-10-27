const express = require("express");
const {
  createIncome,
  deleteIncome,
  fetchSingleIncome,
  fetchincome,
  updateIncome,
} = require("../controllers/income/incomeController");
const authMiddewares = require("../middlewares/authMiddlwares");
const router = express();

router.post("/", authMiddewares, createIncome);
router.get("/", authMiddewares, fetchincome);
router.get("/:id", authMiddewares, fetchSingleIncome);
router.put("/:id", authMiddewares, updateIncome);
router.put("/:id", authMiddewares, deleteIncome);

module.exports = router;
