import React, { useState } from "react";
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export default function AdminLogin() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/admin"); // redirect to dashboard
    } catch (err) {
      alert("Invalid login credentials ❌");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-[#111] px-4">
      <div className="bg-[#111]
 p-8 rounded-2xl shadow-xl w-full max-w-md border border-gray-200">
        <h1 className="text-3xl font-bold text-white
 mb-6 text-center">
          Admin Login
        </h1>

        <form onSubmit={handleLogin} className="space-y-5">
          <div>
            <label className="font-semibold text-white
">Email</label>
            <input
              type="email"
              className="w-full p-3 rounded-xl border border-gray-300 mt-1"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="font-semibold text-white
">Password</label>
            <input
              type="password"
              className="w-full p-3 rounded-xl border border-gray-300 mt-1"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-gray-900 text-white py-3 rounded-xl font-bold hover:bg-orange-600 transition"
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
}
