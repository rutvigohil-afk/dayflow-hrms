import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";

const Attendance = () => {
  return (
    <div>
      <Navbar />
      <div className="flex">
        <Sidebar role="Employee" />

        <div className="p-8 flex-1 bg-gray-50 min-h-screen">
          <h1 className="text-2xl font-bold mb-6">Attendance</h1>

          <div className="mb-6 flex gap-4">
            <button className="bg-green-600 text-white px-6 py-2 rounded">
              Check In
            </button>
            <button className="bg-red-600 text-white px-6 py-2 rounded">
              Check Out
            </button>
          </div>

          <table className="w-full bg-white rounded shadow">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-3 text-left">Date</th>
                <th className="p-3 text-left">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t">
                <td className="p-3">01-01-2026</td>
                <td className="p-3">Present</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Attendance;
