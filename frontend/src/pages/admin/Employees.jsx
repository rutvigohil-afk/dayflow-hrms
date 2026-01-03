import { useEffect, useState } from "react";
import API from "../../services/api";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";

const Employees = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    API.get("/auth/users").then((res) => {
      setEmployees(res.data);
    });
  }, []);

  return (
    <div>
      <Navbar />
      <div className="flex">
        <Sidebar role="Admin" />

        <div className="flex-1 p-8 bg-gray-50 min-h-screen">
          <h1 className="text-2xl font-bold mb-6">Employees</h1>

          <table className="w-full bg-white rounded shadow">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-3 text-left">Name</th>
                <th className="p-3 text-left">Email</th>
                <th className="p-3 text-left">Role</th>
              </tr>
            </thead>

            <tbody>
              {employees.map((emp) => (
                <tr key={emp._id} className="border-t">
                  <td className="p-3">{emp.name}</td>
                  <td className="p-3">{emp.email}</td>
                  <td className="p-3">{emp.role}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Employees;
