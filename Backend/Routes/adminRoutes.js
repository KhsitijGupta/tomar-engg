const express = require("express");
const {
  signupAdmin,
  loginAdmin,
  getAdminProfile,
  getAllAdmins,
} = require("../controller/adminController.js");

const router = express.Router();

// Public Routes
router.post("/signup", signupAdmin);

router.post("/login", loginAdmin);

// Protected Routes
router.get("/adminProfile", getAdminProfile);
router.get("/allAdmin", getAllAdmins);

module.exports = router;
