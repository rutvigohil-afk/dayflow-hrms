import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import API from "../../services/api";

const LeaveApproval = () => {
  const [leaves, setLeaves] = useState([]);

  // Fetch all leave requests (Admin only)
  const fetchLeaves = async () => {
    const res = await API.get("/leave/all");
    setLeaves(res.data);
  };

  useEffect(() => {
    fetchLeaves();
  }, []);

  // Approve / Reject leave
  const updateStatus = async (id, status) => {
    await API.put(`/leave/${id}`, { status });
    fetchLeaves(); // refresh list
  };

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
                <th className="p-3 text-left">Employee</th>
                <th className="p-3 text-left">Type</th>
                <th className="p-3 text-left">Dates</th>
                <th className="p-3 text-left">Status</th>
                <th className="p-3 text-left">Action</th>
              </tr>
            </thead>

            <tbody>
              {leaves.length === 0 && (
                <tr>
                  <td colSpan="5" className="p-4 text-center text-gray-500">
                    No leave requests
                  </td>
                </tr>
              )}

              {leaves.map((l) => (
                <tr key={l._id} className="border-t">
                  <td className="p-3">
                    {l.user?.name || "Employee"}
                  </td>
                  <td className="p-3">{l.type}</td>
                  <td className="p-3">
                    {new Date(l.from).toLocaleDateString()} –{" "}
                    {new Date(l.to).toLocaleDateString()}
                  </td>
                  <td className="p-3 font-semibold">{l.status}</td>
                  <td className="p-3 flex gap-2">
                    <button
                      onClick={() => updateStatus(l._id, "Approved")}
                      disabled={l.status !== "Pending"}
                      className="bg-green-600 text-white px-3 py-1 rounded disabled:opacity-50"
                    >
                      Approve
                    </button>
                    <button
                      onClick={() => updateStatus(l._id, "Rejected")}
                      disabled={l.status !== "Pending"}
                      className="bg-red-600 text-white px-3 py-1 rounded disabled:opacity-50"
                    >
                      Reject
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default LeaveApproval;
