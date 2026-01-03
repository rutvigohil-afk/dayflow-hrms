import { NavLink } from "react-router-dom";

const Sidebar = ({ role }) => {
  return (
    <div className="w-64 bg-gray-100 min-h-screen p-6">
      <nav className="flex flex-col gap-4 text-lg">
        
        {role === "Employee" && (
          <>
            <NavLink
              to="/employee/dashboard"
              className={({ isActive }) =>
                isActive ? "font-bold text-blue-600" : ""
              }
            >
              Dashboard
            </NavLink>

            <NavLink to="/employee/attendance">Attendance</NavLink>
            <NavLink to="/employee/leave">Leave</NavLink>
            <NavLink to="/employee/payroll">Payroll</NavLink>
          </>
        )}

        {role === "Admin" && (
          <>
            <NavLink to="/admin/dashboard">Dashboard</NavLink>
            <NavLink to="/admin/employees">Employees</NavLink>
            <NavLink to="/admin/attendance">Attendance</NavLink>
            <NavLink to="/admin/leave">Leave Approval</NavLink>
          </>
        )}
      </nav>
    </div>
  );
};

export default Sidebar;
