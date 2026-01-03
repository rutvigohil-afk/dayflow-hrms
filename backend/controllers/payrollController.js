const Payroll = require("../models/Payroll");

exports.myPayroll = async (req, res) => {
  const payroll = await Payroll.findOne({ user: req.user.id });
  res.json(payroll);
};

exports.updatePayroll = async (req, res) => {
  const payroll = await Payroll.findOneAndUpdate(
    { user: req.params.userId },
    req.body,
    { upsert: true, new: true }
  );
  res.json(payroll);
};
