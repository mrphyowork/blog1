const express = require("express");
const router = express.Router();
const {
  userRegister,
  userLogin,
  userList,
  userProfile,
} = require("../controllers/userController");

router.post("/register", userRegister);

router.post("/login", userLogin);

router.get("/", userList);

router.get("/profile", userProfile);

module.exports = router;
