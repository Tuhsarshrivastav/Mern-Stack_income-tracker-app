const express = require("express");
const {
  createIncome,
  fetchincome,
  fetchSingleIncome
} = require("../controllers/income/incomeController");
const router = express();

router.post("/", createIncome);
router.get("/", fetchincome);
router.get("/:id", fetchSingleIncome);

module.exports = router;
