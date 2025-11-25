import { Link } from "react-router-dom";

import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};

    if (!email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Enter a valid email";
    }

    if (!password.trim()) {
      newErrors.password = "Password is required";
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) return;

    setShowToken(true);
    setTimeout(() => setShowToken(false), 2500);
  };

  const [showToken, setShowToken] = useState(false);

  return (
    <>
      {showToken && (
        <div className="fixed top-8 right-8 z-50 animate-fadeIn">
          <div className="relative glass flex items-center gap-5 bg-[#0f0f20] text-white shadow-2xl rounded-full px-8 py-5 border">
            {/* Circle + Check */}
            <div className="relative">
              <span className="w-10 h-10 flex items-center justify-center bg-green-400 text-white rounded-full text-xl font-bold animate-pop">
                ✓
              </span>
            </div>

            <p className="font-bold text-lg">Login Successful</p>
          </div>
        </div>
      )}

      <div className="min-h-screen bg-[#0f0f10] flex items-center justify-center px-6">
        <div className="glass opacity-[80%] bg-[#0f0f20] rounded-3xl w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 overflow-hidden">
          {/* LEFT SECTION */}
          <div className="flex flex-col justify-center px-10 py-16">
            <h2 className="text-4xl text-white font-bold mb-3">
              Holla, <br /> Welcome Back
            </h2>
            <p className="text-gray-500 mb-8">
              Hey, welcome back to your special place
            </p>

            <form
              className="w-full max-w-sm"
              onSubmit={handleSubmit}
              noValidate
            >
              <input
                spellCheck="false"
                type="email"
                placeholder="Email"
                className={`w-full border-zinc-800 text-zinc-400  mb-2 p-3 border rounded-lg outline-none ${
                  errors.email ? "border-red-500" : ""
                }`}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mb-3">{errors.email}</p>
              )}

              <input
                spellCheck="false"
                type="password"
                placeholder="Password"
                className={`w-full mb-2 p-3 border-zinc-800 text-zinc-400 border rounded-lg outline-none ${
                  errors.password ? "border-red-500" : ""
                }`}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {errors.password && (
                <p className="text-red-500 text-sm mb-3">{errors.password}</p>
              )}

              <div className="flex items-center justify-between mb-6 text-sm">
                <label className="flex text-zinc-400 items-center gap-2">
                  <input type="checkbox" className="accent-[#2563EB]" />
                  Remember me
                </label>

                <a href="#" className="text-[#2563EB] hover:underline">
                  Forgot Password?
                </a>
              </div>

              <button className="bg-[#2563EB] text-white w-full p-3 rounded-lg font-semibold hover:bg-[#2563EB]">
                Sign In
              </button>
            </form>

            <p className="mt-6 text-sm text-gray-600">
              Don’t have an account?{" "}
              <a
                href="/register"
                className="text-[#2563EB] font-semibold hover:underline"
              >
                Sign Up
              </a>
            </p>
          </div>

          {/* RIGHT SECTION (IMAGE) */}
          <div className="opacity-[80%] m-2 rounded-3xl hidden md:flex items-center justify-center bg-gradient-to-br from-[#2563EB] to-indigo-500">
            <img
              src="/login.png"
              className="w-250 h-100 drop-shadow-2xl"
              alt="login illustration"
            />
          </div>
        </div>
      </div>
    </>
  );
}
