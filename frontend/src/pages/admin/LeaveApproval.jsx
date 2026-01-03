import { useEffect, useState } from "react";
import API from "../../services/api";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";

const LeaveApproval = () => {
  const [leaves, setLeaves] = useState([]);

  const loadLeaves = async () => {
    const res = await API.get("/leave/all");
    setLeaves(res.data);
  };

  useEffect(() => {
    loadLeaves();
  }, []);

  const updateStatus = async (id, status) => {
    await API.put(`/leave/${id}`, { status });
    loadLeaves();
  };

  return (
    <div>
      <Navbar />
      <div className="flex">
        <Sidebar role="Admin" />

        <div className="flex-1 p-8 bg-gray-50 min-h-screen">
          <h1 className="text-2xl font-bold mb-6">
            Leave Approvals
          </h1>

          <table className="w-full bg-white rounded shadow">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-3">Employee</th>
                <th className="p-3">Type</th>
                <th className="p-3">Dates</th>
                <th className="p-3">Status</th>
                <th className="p-3">Action</th>
              </tr>
            </thead>

            <tbody>
              {leaves.map((l) => (
                <tr key={l._id} className="border-t">
                  <td className="p-3">{l.user?.name}</td>
                  <td className="p-3">{l.type}</td>
                  <td className="p-3">
                    {new Date(l.from).toLocaleDateString()} –{" "}
                    {new Date(l.to).toLocaleDateString()}
                  </td>
                  <td className="p-3">{l.status}</td>
                  <td className="p-3 flex gap-2">
                    <button
                      onClick={() =>
                        updateStatus(l._id, "Approved")
                      }
                      className="bg-green-600 text-white px-3 py-1 rounded"
                    >
                      Approve
                    </button>
                    <button
                      onClick={() =>
                        updateStatus(l._id, "Rejected")
                      }
                      className="bg-red-600 text-white px-3 py-1 rounded"
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
