const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  employeeId: { type: String, required: true },
  name: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  role: {
    type: String,
    enum: ["Employee", "Admin"],
    required: true,
  },
});

module.exports = mongoose.model("User", UserSchema);
