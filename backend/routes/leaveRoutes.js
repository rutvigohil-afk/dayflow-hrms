const express = require("express");
const router = express.Router();
const {
  applyLeave,
  myLeaves,
  allLeaves,
  updateLeave,
} = require("../controllers/leaveController");
const { protect, adminOnly } = require("../middleware/authMiddleware");

router.post("/apply", protect, applyLeave);
router.get("/my", protect, myLeaves);
router.get("/all", protect, adminOnly, allLeaves);
router.put("/:id", protect, adminOnly, updateLeave);

module.exports = router;
