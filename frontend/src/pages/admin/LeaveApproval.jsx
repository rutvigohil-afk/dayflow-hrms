import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";

const LeaveApproval = () => {
  return (
    <div>
      <Navbar />
      <div className="flex">
        <Sidebar role="Admin" />

        <div className="p-8 flex-1 bg-gray-50 min-h-screen">
          <h1 className="text-2xl font-bold mb-6">Leave Approvals</h1>

          <table className="w-full bg-white rounded shadow">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-3">Employee</th>
                <th className="p-3">Type</th>
                <th className="p-3">Dates</th>
                <th className="p-3">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t">
                <td className="p-3">John Doe</td>
                <td className="p-3">Sick Leave</td>
                <td className="p-3">01-01-2026</td>
                <td className="p-3 flex gap-2">
                  <button className="bg-green-600 text-white px-3 py-1 rounded">
                    Approve
                  </button>
                  <button className="bg-red-600 text-white px-3 py-1 rounded">
                    Reject
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default LeaveApproval;
