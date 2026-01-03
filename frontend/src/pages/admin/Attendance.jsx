import { useEffect, useState } from "react";
import API from "../../services/api";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";

const AdminAttendance = () => {
  const [records, setRecords] = useState([]);

  useEffect(() => {
    API.get("/attendance/all").then((res) => {
      setRecords(res.data);
    });
  }, []);

  return (
    <div>
      <Navbar />
      <div className="flex">
        <Sidebar role="Admin" />

        <div className="flex-1 p-8 bg-gray-50 min-h-screen">
          <h1 className="text-2xl font-bold mb-6">
            Attendance Records
          </h1>

          <table className="w-full bg-white rounded shadow">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-3 text-left">Employee</th>
                <th className="p-3 text-left">Date</th>
                <th className="p-3 text-left">Status</th>
              </tr>
            </thead>

            <tbody>
              {records.map((rec) => (
                <tr key={rec._id} className="border-t">
                  <td className="p-3">
                    {rec.user?.name}
                  </td>
                  <td className="p-3">
                    {new Date(rec.date).toLocaleDateString()}
                  </td>
                  <td className="p-3">{rec.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminAttendance;
