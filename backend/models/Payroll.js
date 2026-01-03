const mongoose = require("mongoose");

const PayrollSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  basic: Number,
  allowances: Number,
  deductions: Number,
});

module.exports = mongoose.model("Payroll", PayrollSchema);
