import React, { useState } from "react";
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";
import Cubes from "../Components/Cubes"; // <-- ADD THIS IMPORT

export default function AdminLogin() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/admin");
    } catch (err) {
      alert("Invalid login credentials ❌");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative h-screen w-full overflow-hidden">

      {/* 3D Cubes Background */}
      <div className="absolute inset-0 z-10 opacity-80 pointer-events-none">
        <Cubes
          gridSize={16}
          cubeSize={60}
          maxAngle={45}
          radius={4}
          autoAnimate={true}
          faceColor="#1a1a2e"
          borderStyle="2px dashed #5227FF"
          rippleColor="#ff6b6b"
          rippleSpeed={0.5}
          rippleOnClick={true}
        />
      </div>

      {/* Dark overlay for clarity */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm z-0" />

      {/* Login Card */}
      <div className="relative z-10 flex items-center justify-center h-full px-4">
        <div className="bg-[#111]/70 backdrop-blur-xl p-8 rounded-2xl shadow-[0_0_25px_rgba(255,115,0,0.25)] 
        w-full max-w-md border border-gray-800 animate-fadeIn">

          <h1 className="text-3xl font-bold text-white mb-6 text-center tracking-wide">
            Admin Login
          </h1>

          <form onSubmit={handleLogin} className="space-y-5">

            {/* Email */}
            <div className="group">
              <label className="font-semibold text-white">Email</label>
              <input
                type="email"
                placeholder="admin@example.com"
                className="w-full p-3 rounded-xl border border-gray-700 mt-1 
                bg-transparent text-white placeholder-gray-500
                focus:ring-2 focus:ring-orange-500 focus:border-orange-500 
                transition-all duration-300"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            {/* Password */}
            <div className="group">
              <label className="font-semibold text-white">Password</label>

              <div className="relative mt-1">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  className="w-full p-3 rounded-xl border border-gray-700 
                  bg-transparent text-white placeholder-gray-500
                  focus:ring-2 focus:ring-orange-500 focus:border-orange-500 
                  transition-all duration-300"
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />

                {/* Toggle */}
                <button
                  type="button"
                  className="absolute right-4 top-3 text-gray-400 hover:text-white"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            {/* Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-orange-600 text-white py-3 rounded-xl 
              font-bold hover:bg-orange-700 hover:shadow-[0_0_15px_rgb(255,128,0)]
              transition-all duration-300"
            >
              {loading ? "Logging in..." : "Login"}
            </button>

          </form>
        </div>
      </div>
    </div>
  );
}
