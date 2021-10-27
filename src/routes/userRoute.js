const express = require("express");
const {
  register,
  fetchAllUser,
  login
} = require("../controllers/users/userController");
const router = express();

router.post("/register", register);
router.post("/login",login)
router.get("/fetch", fetchAllUser);

module.exports = router;
