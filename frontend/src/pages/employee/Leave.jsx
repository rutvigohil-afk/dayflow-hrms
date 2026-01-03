import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";

const Leave = () => {
  return (
    <div>
      <Navbar />
      <div className="flex">
        <Sidebar role="Employee" />

        <div className="p-8 flex-1 bg-gray-50 min-h-screen">
          <h1 className="text-2xl font-bold mb-6">Apply Leave</h1>

          <div className="bg-white p-6 rounded shadow mb-8">
            <select className="w-full mb-4 p-3 border rounded">
              <option>Paid Leave</option>
              <option>Sick Leave</option>
              <option>Unpaid Leave</option>
            </select>

            <input
              type="date"
              className="w-full mb-4 p-3 border rounded"
            />
            <input
              type="date"
              className="w-full mb-4 p-3 border rounded"
            />

            <textarea
              className="w-full mb-4 p-3 border rounded"
              placeholder="Remarks"
            />

            <button className="bg-blue-600 text-white px-6 py-2 rounded">
              Submit Leave
            </button>
          </div>

          <table className="w-full bg-white rounded shadow">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-3">Type</th>
                <th className="p-3">Dates</th>
                <th className="p-3">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t">
                <td className="p-3">Paid Leave</td>
                <td className="p-3">01-01-2026 to 02-01-2026</td>
                <td className="p-3 text-yellow-600">Pending</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Leave;
