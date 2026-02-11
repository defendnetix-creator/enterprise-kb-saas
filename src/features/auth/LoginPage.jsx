import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";


function LoginPage() {
  const [role, setRole] = useState("employee");
  const navigate = useNavigate();
  const { login } = useAuth();


  const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [error, setError] = useState("");


const handleLogin = (e) => {
  e.preventDefault();
  setError("");

  if (role === "admin") {
    if (email === "admin@kb.com" && password === "admin123") {
      login("admin", email);
      navigate("/admin/dashboard");
    } else {
      setError("Invalid admin credentials");
    }
  } else {
    if (email === "user@kb.com" && password === "user123") {
      login("employee", email);
      navigate("/user/dashboard");
    } else {
      setError("Invalid employee credentials");
    }
  }
};




  return (
    <div className="flex w-full h-screen overflow-hidden">

      {/* ================= LEFT PANEL ================= */}
      <div className="w-1/2 relative flex items-center justify-center overflow-hidden">

        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDnvanDs00tLLo3CBaqpl_Ssd4QMek1FNLMwhJ2kZjpIf3G46T6fircIx0ZXf3puMqkAUZg4hZmRrykgm8LKZoo-FBhw7jbBFj-HSiKL6yelN31nkpwGiExEGDJzUsLv2vAKmP1iAzRR4Ku-aI6liUUABygOzERaFXA40FrnvB1vuJXh4_epoBBYx3NGCQBQ_DIcHe4vngnEfbjR2BkfKRnyg2H3xiJY8AurN-NoSe3kalv9ECiI4nnQjW7QLfIwusIHh9ADktx5weT')",
          }}
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#13a4ec]/80 to-indigo-900/90" />

        {/* Content */}
        <div className="relative z-10 p-16 max-w-lg text-white">

          {/* Logo */}
          <div className="w-14 h-14 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center mb-8">
            <div className="w-8 h-8 rotate-45 border-4 border-white" />
          </div>

          {/* Title */}
          <h1 className="text-5xl font-extrabold leading-tight mb-6">
            Enterprise <br /> Knowledge Base
          </h1>

          <div className="h-1 w-20 bg-white rounded-full mb-6"></div>

          <p className="text-xl text-white/80 leading-relaxed">
            The central hub for all IT troubleshooting workflows,
            documentation, and system insights.
          </p>

          {/* Security Badge */}
          <div className="flex items-center gap-4 bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/10 mt-12">
            <span>🔒</span>
            <p className="text-sm font-medium">
              Secured with Enterprise-grade AES-256 Encryption
            </p>
          </div>

        </div>
      </div>

      {/* ================= RIGHT PANEL ================= */}
      <div className="w-1/2 flex flex-col items-center justify-center bg-white px-16 overflow-y-auto">

        <div className="w-full max-w-md">

          {/* Heading */}
          <h2 className="text-4xl font-extrabold mb-2">
            Welcome Back
          </h2>

          <p className="text-gray-500 mb-8">
            Please enter your credentials to access the internal knowledge base.
          </p>

          {/* Role Toggle */}
          <div className="flex p-1 bg-gray-100 rounded-xl h-12 mb-8">

            <button
              type="button"
              onClick={() => setRole("employee")}
              className={`flex-1 flex items-center justify-center text-sm font-semibold rounded-lg transition-all ${
                role === "employee"
                  ? "bg-white shadow text-gray-900"
                  : "text-gray-500"
              }`}
            >
              Employee Login
            </button>

            <button
              type="button"
              onClick={() => setRole("admin")}
              className={`flex-1 flex items-center justify-center text-sm font-semibold rounded-lg transition-all ${
                role === "admin"
                  ? "bg-white shadow text-gray-900"
                  : "text-gray-500"
              }`}
            >
              Admin Portal
            </button>

          </div>

          {/* Form */}
          <form onSubmit={handleLogin} className="space-y-6">

            {/* Email */}
            <div>
              <label className="block text-sm font-semibold mb-2">
                Username/Email
              </label>
              <input
                type="email"
                 value={email}
               onChange={(e) => setEmail(e.target.value)}
                placeholder="e.g. j.doe@company.com"
                className="w-full h-14 px-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#13a4ec]/30"
                />

            </div>

            {/* Password */}
            <div>
              <div className="flex justify-between mb-2">
                <label className="text-sm font-semibold">
                  Password
                </label>
                <button
                  type="button"
                  className="text-[#13a4ec] text-xs font-bold hover:underline"
                >
                  Forgot Password?
                </button>
              </div>

              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full h-14 px-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#13a4ec]/30"
                />

            </div>

            {/* Remember */}
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <input type="checkbox" />
              <span>Remember this device for 30 days</span>
            </div>

              {/* Error Message */}
                {error && (
                <div className="text-red-500 text-sm font-medium">
                {error}
                </div>
                )}

            {/* Login Button */}
            <button
              type="submit"
              className={`w-full h-14 rounded-lg text-white font-bold transition-all ${
                role === "admin"
                  ? "bg-indigo-600 hover:bg-indigo-700 shadow-indigo-600/20 shadow-lg"
                  : "bg-[#13a4ec] hover:bg-[#0f93d4] shadow-[#13a4ec]/20 shadow-lg"
              }`}
            >
              Login to Dashboard
            </button>

          </form>

          {/* Divider */}
          <div className="relative my-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200"></div>
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-white px-4 text-gray-400 font-semibold tracking-wider">
                or continue with
              </span>
            </div>
          </div>

          {/* SSO */}
          <button className="w-full h-14 border border-gray-300 rounded-lg font-semibold hover:bg-gray-50 transition">
            SSO Login (Azure AD)
          </button>

          {/* Footer */}
          <div className="mt-12 flex justify-between text-xs text-gray-500">
            <p>© 2024 Enterprise IT Knowledge Base</p>
            <div className="flex gap-4">
              <span className="hover:text-[#13a4ec] cursor-pointer">Help Desk</span>
              <span className="hover:text-[#13a4ec] cursor-pointer">Privacy Policy</span>
              <span className="hover:text-[#13a4ec] cursor-pointer">Terms</span>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
}

export default LoginPage;
