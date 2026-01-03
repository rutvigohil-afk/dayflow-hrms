const mongoose = require("mongoose");

const AttendanceSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  date: { type: Date, default: Date.now },
  status: {
    type: String,
    enum: ["Present", "Absent", "Half-day", "Leave"],
    default: "Present",
  },
});

module.exports = mongoose.model("Attendance", AttendanceSchema);
