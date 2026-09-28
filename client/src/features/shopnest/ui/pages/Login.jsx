import { Mail, LockKeyhole } from "lucide-react";
import { useAuthHook } from "../../hooks/authHook";

const Login = () => {
  const { navigate, handleSubmit, errors, register, handleChangeLogin } =
    useAuthHook();

  return (
    <div
      className="min-h-screen flex items-center justify-center px-5 relative overflow-hidden"
      style={{ backgroundColor: "var(--bg-main)" }}
    >
      {/* Bottom Decoration */}
      <div
        className="absolute -bottom-28 -left-20 w-80 h-48 rounded-full"
        style={{ backgroundColor: "var(--bg-soft)" }}
      />

      <div
        className="absolute -bottom-28 -right-20 w-80 h-48 rounded-full"
        style={{ backgroundColor: "var(--bg-soft)" }}
      />

      <div className="w-full max-w-[500px] relative z-10">
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <div className="flex items-center gap-3">
            <div
              className="w-11 h-11 rounded-xl flex items-center justify-center"
              style={{ backgroundColor: "var(--primary)" }}
            >
              <span className="text-white text-xl">◇</span>
            </div>

            <h1
              className="text-2xl font-bold"
              style={{ color: "var(--text-primary)" }}
            >
              ShopNest
            </h1>
          </div>
        </div>

        {/* Heading */}
        <div className="text-center mb-8">
          <h2
            className="text-3xl font-bold"
            style={{ color: "var(--text-primary)" }}
          >
            Welcome Back
          </h2>

          <p
            className="mt-2 text-sm"
            style={{ color: "var(--text-secondary)" }}
          >
            Login to continue your shopping journey
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit(handleChangeLogin)} className="space-y-5">
          {/* Email */}
          <div>
            <label
              className="block mb-2 text-sm font-semibold"
              style={{ color: "var(--text-primary)" }}
            >
              Email Address
            </label>

            <div className="relative">
              <Mail
                size={20}
                className="absolute left-4 top-1/2 -translate-y-1/2"
                style={{ color: "var(--text-secondary)" }}
              />

              <input
                {...register("email", {
                  required: "Email address is required",
                })}
                type="email"
                placeholder="Enter your email"
                className="w-full h-[52px] rounded-xl bg-white pl-12 pr-4 outline-none transition"
                style={{
                  border: "1px solid var(--border)",
                  color: "var(--text-primary)",
                }}
              />
              {errors.email && (
                <p
                  className="text-xs mt-1.5"
                  style={{ color: "var(--danger)" }}
                >
                  {errors.email.message}
                </p>
              )}
            </div>
          </div>

          {/* Password */}
          <div>
            <label
              className="block mb-2 text-sm font-semibold"
              style={{ color: "var(--text-primary)" }}
            >
              Password
            </label>

            <div className="relative">
              <LockKeyhole
                size={20}
                className="absolute left-4 top-1/2 -translate-y-1/2"
                style={{ color: "var(--text-secondary)" }}
              />

              <input
                {...register("password", {
                  required: "Password is required",
                })}
                type="password"
                placeholder="Enter your password"
                className="w-full h-[52px] rounded-xl bg-white pl-12 pr-4 outline-none transition"
                style={{
                  border: "1px solid var(--border)",
                  color: "var(--text-primary)",
                }}
              />
              {errors.password && (
                <p
                  className="text-xs mt-1.5"
                  style={{ color: "var(--danger)" }}
                >
                  {errors.password.message}
                </p>
              )}
            </div>
          </div>

          {/* Forgot Password */}

          {/* Login Button */}
           <button
            type="submit"
            className="w-full h-[53px] rounded-xl text-white font-semibold cursor-pointer active:scale-110 transition duration-75"
            style={{
              backgroundColor: "var(--btn-primary)",
              boxShadow: "var(--shadow-sm)",
            }}
          >
            Login
          </button>
        </form>

        {/* Register */}
        <p
          className="text-center text-sm mt-7"
          style={{ color: "var(--text-secondary)" }}
        >
          Don't have an account?{" "}
          <span
            onClick={() => navigate("/auth")}
            className="font-semibold cursor-pointer"
            style={{ color: "var(--primary-light)" }}
          >
            Register
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
