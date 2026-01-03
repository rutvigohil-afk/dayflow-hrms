const Sidebar = ({ role }) => {
  return (
    <div className="w-60 bg-gray-100 min-h-screen p-5">
      <ul className="space-y-4 font-medium">
        <li className="hover:text-blue-600 cursor-pointer">Dashboard</li>
        <li className="hover:text-blue-600 cursor-pointer">Attendance</li>
        <li className="hover:text-blue-600 cursor-pointer">Leave</li>
        <li className="hover:text-blue-600 cursor-pointer">Payroll</li>

        {role === "Admin" && (
          <li className="hover:text-blue-600 cursor-pointer">
            Leave Approvals
          </li>
        )}
      </ul>
    </div>
  );
};

export default Sidebar;
