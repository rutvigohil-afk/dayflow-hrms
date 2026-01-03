const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  employeeId: String,
  name: String,
  email: { type: String, unique: true },
  password: String,
  role: { type: String, enum: ["Employee", "Admin"], default: "Employee" },
});

module.exports = mongoose.model("User", UserSchema);
