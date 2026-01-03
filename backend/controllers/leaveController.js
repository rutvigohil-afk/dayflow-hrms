const Leave = require("../models/Leave");

exports.applyLeave = async (req, res) => {
  const leave = await Leave.create({
    user: req.user.id,
    ...req.body,
  });
  res.json(leave);
};

exports.myLeaves = async (req, res) => {
  const leaves = await Leave.find({ user: req.user.id });
  res.json(leaves);
};

exports.allLeaves = async (req, res) => {
  const leaves = await Leave.find().populate("user", "name email");
  res.json(leaves);
};

exports.updateLeave = async (req, res) => {
  const leave = await Leave.findByIdAndUpdate(
    req.params.id,
    { status: req.body.status },
    { new: true }
  );
  res.json(leave);
};
