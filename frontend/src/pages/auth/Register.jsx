import { useState } from "react";

const Register = () => {
  const [role, setRole] = useState("Employee");

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form className="bg-white p-10 rounded shadow w-96">
        <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>

        <input
          className="w-full mb-4 p-3 border rounded"
          placeholder="Employee ID"
          required
        />

        <input
          className="w-full mb-4 p-3 border rounded"
          placeholder="Full Name"
          required
        />

        <input
          className="w-full mb-4 p-3 border rounded"
          placeholder="Email"
          type="email"
          required
        />

        <input
          className="w-full mb-4 p-3 border rounded"
          placeholder="Password"
          type="password"
          required
        />

        <select
          className="w-full mb-6 p-3 border rounded"
          value={role}
          onChange={(e) => setRole(e.target.value)}
        >
          <option>Employee</option>
          <option>Admin</option>
        </select>

        <button className="w-full bg-blue-600 text-white p-3 rounded hover:bg-blue-700">
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
