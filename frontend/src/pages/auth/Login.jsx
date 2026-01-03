import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    const res = await axios.post("http://localhost:5000/api/auth/login", {
      email,
      password,
    });

    localStorage.setItem("token", res.data.token);
    localStorage.setItem("role", res.data.role);

    if (res.data.role === "Admin") navigate("/admin/dashboard");
    else navigate("/employee/dashboard");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleLogin}
        className="bg-white p-10 rounded shadow w-96"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>

        <input
          className="w-full mb-4 p-3 border rounded"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          className="w-full mb-6 p-3 border rounded"
          placeholder="Password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button className="w-full bg-blue-600 text-white p-3 rounded hover:bg-blue-700">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
