const express = require("express");
const {
  createIncome,
  fetchincome,
  fetchSingleIncome,
  updateIncome,
  deleteIncome
} = require("../controllers/income/incomeController");
const router = express();

router.post("/", createIncome);
router.get("/", fetchincome);
router.get("/:id", fetchSingleIncome);
router.put("/:id", updateIncome);
router.put("/:id",deleteIncome);

module.exports = router;
