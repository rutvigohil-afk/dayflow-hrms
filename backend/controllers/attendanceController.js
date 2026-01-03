const Attendance = require("../models/Attendance");

exports.checkIn = async (req, res) => {
  const record = await Attendance.create({
    user: req.user.id,
    status: "Present",
  });
  res.json(record);
};

exports.myAttendance = async (req, res) => {
  const records = await Attendance.find({ user: req.user.id });
  res.json(records);
};

exports.allAttendance = async (req, res) => {
  const records = await Attendance.find().populate("user", "name email");
  res.json(records);
};
