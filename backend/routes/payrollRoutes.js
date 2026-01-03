const express = require("express");
const router = express.Router();
const {
  myPayroll,
  updatePayroll,
} = require("../controllers/payrollController");
const { protect, adminOnly } = require("../middleware/authMiddleware");

router.get("/my", protect, myPayroll);
router.put("/:userId", protect, adminOnly, updatePayroll);

module.exports = router;
