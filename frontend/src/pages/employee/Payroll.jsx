import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import API from "../../services/api";

const EmployeePayroll = () => {
  const [payroll, setPayroll] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPayroll = async () => {
      try {
        const res = await API.get("/payroll/my");
        setPayroll(res.data);
      } catch (error) {
        console.error("Failed to fetch payroll");
      } finally {
        setLoading(false);
      }
    };

    fetchPayroll();
  }, []);

  return (
    <div>
      <Navbar />
      <div className="flex">
        <Sidebar role="Employee" />

        <div className="p-8 flex-1 bg-gray-50 min-h-screen">
          <h1 className="text-2xl font-bold mb-6">Payroll</h1>

          {loading && (
            <p className="text-gray-500">Loading payroll details...</p>
          )}

          {!loading && !payroll && (
            <p className="text-gray-500">
              Payroll information not available.
            </p>
          )}

          {payroll && (
            <div className="bg-white p-6 rounded shadow w-full max-w-md">
              <p className="mb-2">
                <strong>Basic Salary:</strong> ₹{payroll.basic}
              </p>
              <p className="mb-2">
                <strong>Allowances:</strong> ₹{payroll.allowances}
              </p>
              <p className="mb-2">
                <strong>Deductions:</strong> ₹{payroll.deductions}
              </p>

              <p className="mt-4 text-lg font-bold">
                Net Salary: ₹
                {payroll.basic +
                  payroll.allowances -
                  payroll.deductions}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default EmployeePayroll;
