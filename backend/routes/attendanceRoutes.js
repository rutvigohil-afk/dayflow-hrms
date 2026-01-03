const express = require("express");
const router = express.Router();
const {
  checkIn,
  myAttendance,
  allAttendance,
} = require("../controllers/attendanceController");
const { protect, adminOnly } = require("../middleware/authMiddleware");

router.post("/checkin", protect, checkIn);
router.get("/my", protect, myAttendance);
router.get("/all", protect, adminOnly, allAttendance);

module.exports = router;
