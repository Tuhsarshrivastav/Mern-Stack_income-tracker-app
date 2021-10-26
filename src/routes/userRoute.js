const express = require("express");
const {
  register,
  fetchAllUser,
} = require("../controllers/users/userController");
const router = express();

router.post("/register", register);
router.get("/fetch", fetchAllUser);

module.exports = router;
