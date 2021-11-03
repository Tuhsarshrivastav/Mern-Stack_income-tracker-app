const express = require("express");
const {
  register,
  fetchAllUser,
  login,
  userProfileController,
  updateUserProfileController,
} = require("../controllers/users/userController");
const authMiddewares = require("../middlewares/authMiddlwares");

const router = express();

router.post("/register", register);
router.get("/profile", authMiddewares, userProfileController);
router.put("/update", authMiddewares, updateUserProfileController);
router.post("/login", login);
router.get("/fetch", fetchAllUser);

module.exports = router;
 