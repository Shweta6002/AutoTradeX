import { Link } from "react-router-dom";
import { useState } from "react";

export default function Register() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" }); // clear error on typing
  };

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSubmit = (e) => {
    e.preventDefault();

    let newErrors = {};

    if (!form.name.trim()) newErrors.name = "Name is required";

    if (!form.email.trim()) newErrors.email = "Email is required";
    else if (!validateEmail(form.email))
      newErrors.email = "Enter a valid email";

    if (form.password.length < 6)
      newErrors.password = "Password must be at least 6 characters";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log("Registration success:", form);

      // generate token
      const token = crypto.randomUUID();
      localStorage.setItem("token", token);

      // show token animation popup
      setShowTokenPopup(true);

      // auto-hide in 2 seconds
      setTimeout(() => setShowTokenPopup(false), 2000);
    }
  };

  const [showTokenPopup, setShowTokenPopup] = useState(false);

  return (
    <>
      {showTokenPopup && (
        <div className="fixed top-8 right-8 z-50 animate-fadeIn">
          <div className="relative glass flex items-center gap-5 bg-[#0f0f20] text-white shadow-2xl rounded-full px-8 py-5 border">
            {/* Circle + Check */}
            <div className="relative">
              <span className="w-10 h-10 flex items-center justify-center bg-green-400 text-white rounded-full text-xl font-bold animate-pop">
                ✓
              </span>
            </div>

            <p className="font-bold text-lg">Account Created!</p>
          </div>
        </div>
      )}
      <div className="min-h-screen bg-[#0f0f10] flex items-center justify-center px-4">
        <div className="glass bg-[#0f0f20] w-full max-w-5xl rounded-3xl shadow-2xl p-10 grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* LEFT IMAGE */}
          <div className="flex items-center justify-center">
            <img
              src="/register.png"
              alt="register illustration"
              className="w-250 h-120 rounded-3xl drop-shadow-xl"
            />
          </div>

          {/* RIGHT FORM */}
          <div className="flex flex-col justify-center">
            <h2 className="text-4xl font-semibold mb-5 text-white">
              Registration
            </h2>
            <p className="text-gray-500 mb-6">
              Join the world’s top automated trading platform. Create your
              account today!
            </p>

            <form
              noValidate
              className="w-full max-w-sm"
              onSubmit={handleSubmit}
            >
              {/* Name */}
              <input
                spellCheck="false"
                name="name"
                type="text"
                placeholder=" Full Name"
                value={form.name}
                onChange={handleChange}
                className={`w-full text-gray-300 mb-1 p-3 border rounded-full outline-none 
                ${errors.name ? "border-red-500" : "border-gray-500"} 
                focus:ring-2 focus:ring-[#2563EB]`}
              />
              {errors.name && (
                <p className="text-red-500 animate-jiggle text-sm mb-3 animate-fadeIn">
                  {errors.name}
                </p>
              )}

              {/* Email */}
              <input
                spellCheck="false"
                name="email"
                type="text"
                placeholder=" Email"
                value={form.email}
                onChange={handleChange}
                className={`w-full text-gray-300 mt-4 mb-1 p-3 border rounded-full outline-none 
                ${
                  errors.email
                    ? "border-red-500 animate-jiggle"
                    : "border-gray-500"
                } 
                focus:ring-2 focus:ring-[#2563EB]`}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mb-3 animate-fadeIn">
                  {errors.email}
                </p>
              )}

              {/* Password */}
              <input
                name="password"
                type="password"
                placeholder=" Password"
                value={form.password}
                onChange={handleChange}
                className={`w-full text-gray-300 mt-4 p-3 mb-1 border rounded-full outline-none 
                ${
                  errors.password
                    ? "border-red-500 animate-jiggle"
                    : "border-gray-500"
                } 
                focus:ring-2 focus:ring-[#2563EB]`}
              />
              {errors.password && (
                <p className="text-red-500 text-sm mb-3 animate-fadeIn">
                  {errors.password}
                </p>
              )}

              {/* Button */}
              <button
                type="submit"
                className="w-full mt-8 bg-[#2563EB] text-white p-3 rounded-full font-semibold hover:bg-indigo-900 transition-all mt-4"
              >
                REGISTER
              </button>
            </form>

            <p className="text-sm mt-4 text-gray-600">
              Have an account?{" "}
              <Link
                to="/login"
                className="text-[#2563EB] font-medium hover:underline"
              >
                Sign In
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
