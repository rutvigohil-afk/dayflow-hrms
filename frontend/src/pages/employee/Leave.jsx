import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import API from "../../services/api";

const EmployeeLeave = () => {
  const [type, setType] = useState("Paid Leave");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [reason, setReason] = useState("");
  const [leaves, setLeaves] = useState([]);

  // Fetch employee's leave history
  useEffect(() => {
    API.get("/leave/my")
      .then((res) => setLeaves(res.data))
      .catch((err) => console.error(err));
  }, []);

  // Submit leave request
  const submitLeave = async () => {
    if (!from || !to) {
      alert("Please select date range");
      return;
    }

    try {
      await API.post("/leave/apply", {
        type,
        from,
        to,
        reason,
      });

      // Refresh leave list
      const res = await API.get("/leave/my");
      setLeaves(res.data);

      // Reset form
      setFrom("");
      setTo("");
      setReason("");
    } catch (err) {
      alert("Failed to submit leave");
    }
  };

  return (
    <div>
      <Navbar />
      <div className="flex">
        <Sidebar role="Employee" />

        <div className="p-8 flex-1 bg-gray-50 min-h-screen">
          <h1 className="text-2xl font-bold mb-6">Apply Leave</h1>

          {/* Leave Form */}
          <div className="bg-white p-6 rounded shadow mb-8">
            <select
              className="w-full mb-4 p-3 border rounded"
              value={type}
              onChange={(e) => setType(e.target.value)}
            >
              <option>Paid Leave</option>
              <option>Sick Leave</option>
              <option>Unpaid Leave</option>
            </select>

            <input
              type="date"
              className="w-full mb-4 p-3 border rounded"
              value={from}
              onChange={(e) => setFrom(e.target.value)}
            />

            <input
              type="date"
              className="w-full mb-4 p-3 border rounded"
              value={to}
              onChange={(e) => setTo(e.target.value)}
            />

            <textarea
              className="w-full mb-4 p-3 border rounded"
              placeholder="Remarks"
              value={reason}
              onChange={(e) => setReason(e.target.value)}
            />

            <button
              onClick={submitLeave}
              className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
            >
              Submit Leave
            </button>
          </div>

          {/* Leave Status Table */}
          <table className="w-full bg-white rounded shadow">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-3">Type</th>
                <th className="p-3">Dates</th>
                <th className="p-3">Status</th>
              </tr>
            </thead>

            <tbody>
              {leaves.map((l) => (
                <tr key={l._id} className="border-t">
                  <td className="p-3">{l.type}</td>
                  <td className="p-3">
                    {new Date(l.from).toLocaleDateString()} to{" "}
                    {new Date(l.to).toLocaleDateString()}
                  </td>
                  <td
                    className={`p-3 font-semibold ${
                      l.status === "Approved"
                        ? "text-green-600"
                        : l.status === "Rejected"
                        ? "text-red-600"
                        : "text-yellow-600"
                    }`}
                  >
                    {l.status}
                  </td>
                </tr>
              ))}

              {leaves.length === 0 && (
                <tr>
                  <td colSpan="3" className="p-3 text-center text-gray-500">
                    No leave records found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default EmployeeLeave;
