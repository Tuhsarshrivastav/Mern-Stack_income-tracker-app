const express = require("express");
const { createIncome } = require("../controllers/income/incomeController");
const router = express();

router.post("/", createIncome);

module.exports = router;
