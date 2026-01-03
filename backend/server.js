const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

dotenv.config();
connectDB();

const app = express();

// ✅ THIS LINE IS REQUIRED
app.use(express.json());

// optional but recommended
app.use(cors());

app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/attendance", require("./routes/attendanceRoutes"));
app.use("/api/leave", require("./routes/leaveRoutes"));
app.use("/api/payroll", require("./routes/payrollRoutes"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`Server running on port ${PORT}`)
);
