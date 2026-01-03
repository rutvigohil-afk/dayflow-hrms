import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";

const Payroll = () => {
  return (
    <div>
      <Navbar />
      <div className="flex">
        <Sidebar role="Employee" />

        <div className="p-8 flex-1 bg-gray-50 min-h-screen">
          <h1 className="text-2xl font-bold mb-6">Payroll</h1>

          <div className="bg-white p-6 rounded shadow">
            <p><strong>Basic Salary:</strong> ₹30,000</p>
            <p><strong>Allowances:</strong> ₹5,000</p>
            <p><strong>Deductions:</strong> ₹2,000</p>
            <p className="mt-4 font-bold">
              Net Salary: ₹33,000
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payroll;
