const express = require("express");
const accountStatsController = require("../controllers/accountStatsController/accountStatsController");
const router = express.Router();

router.get("/acounts-statistics", accountStatsController);
module.exports = router;
