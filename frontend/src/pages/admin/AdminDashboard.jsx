import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";

const AdminDashboard = () => {
  return (
    <div>
      <Navbar />
      <div className="flex">
        <Sidebar role="Admin" />

        <div className="p-8 flex-1 bg-gray-50 min-h-screen">
          <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded shadow">Employees</div>
            <div className="bg-white p-6 rounded shadow">Attendance</div>
            <div className="bg-white p-6 rounded shadow">Leave Approvals</div>
            <div className="bg-white p-6 rounded shadow">Payroll</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
