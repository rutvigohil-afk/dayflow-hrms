import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../../services/api";

const Register = () => {
  const [employeeId, setEmployeeId] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("Employee");
  const [errorMsg, setErrorMsg] = useState("");

  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    setErrorMsg("");

    try {
      await API.post("/auth/register", {
        employeeId,
        name,
        email,
        password,
        role,
      });

      alert("Registration successful");
      navigate("/");
    } catch (error) {
      if (error.response?.data?.message) {
        setErrorMsg(error.response.data.message);
      } else {
        setErrorMsg("Registration failed");
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleRegister}
        className="bg-white p-10 rounded shadow w-96"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>

        {errorMsg && (
          <p className="text-red-600 text-sm mb-4 text-center">
            {errorMsg}
          </p>
        )}

        <input
          className="w-full mb-3 p-3 border rounded"
          placeholder="Employee ID"
          value={employeeId}
          onChange={(e) => setEmployeeId(e.target.value)}
          required
        />

        <input
          className="w-full mb-3 p-3 border rounded"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <input
          className="w-full mb-3 p-3 border rounded"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          className="w-full mb-3 p-3 border rounded"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <select
          className="w-full mb-4 p-3 border rounded"
          value={role}
          onChange={(e) => setRole(e.target.value)}
        >
          <option value="Employee">Employee</option>
          <option value="Admin">Admin</option>
        </select>

        <button className="w-full bg-blue-600 text-white p-3 rounded hover:bg-blue-700">
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
