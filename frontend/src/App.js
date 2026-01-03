import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";

import EmployeeDashboard from "./pages/employee/Dashboard";
import EmployeeAttendance from "./pages/employee/Attendance";
import EmployeeLeave from "./pages/employee/Leave";
import EmployeePayroll from "./pages/employee/Payroll";

import AdminDashboard from "./pages/admin/Dashboard";
import LeaveApproval from "./pages/admin/LeaveApproval";
import Employees from "./pages/admin/Employees";
import AdminAttendance from "./pages/admin/Attendance";

import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <Router>
      <Routes>
        {/* Public routes */}
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Employee routes */}
        <Route
          path="/employee/dashboard"
          element={
            <PrivateRoute role="Employee">
              <EmployeeDashboard />
            </PrivateRoute>
          }
        />

        <Route
          path="/employee/attendance"
          element={
            <PrivateRoute role="Employee">
              <EmployeeAttendance />
            </PrivateRoute>
          }
        />

        <Route
          path="/employee/leave"
          element={
            <PrivateRoute role="Employee">
              <EmployeeLeave />
            </PrivateRoute>
          }
        />

        <Route
          path="/employee/payroll"
          element={
            <PrivateRoute role="Employee">
              <EmployeePayroll />
            </PrivateRoute>
          }
        />

        {/* Admin routes */}
        <Route
          path="/admin/dashboard"
          element={
            <PrivateRoute role="Admin">
              <AdminDashboard />
            </PrivateRoute>
          }
        />

        <Route
          path="/admin/leave"
          element={
            <PrivateRoute role="Admin">
              <LeaveApproval />
            </PrivateRoute>
          }
        />
        <Route
          path="/admin/employees"
          element={
            <PrivateRoute role="Admin">
              <Employees />
            </PrivateRoute>
          }
        />
        <Route
          path="/admin/attendance"
          element={
            <PrivateRoute role="Admin">
              <AdminAttendance />
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
