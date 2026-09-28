import { User, Mail, LockKeyhole } from "lucide-react";
import { useAuthHook } from "../../hooks/authHook";

const Register = () => {
  const { navigate, register, handleSubmit, errors, handleChangeRegister } =
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
            Create Account
          </h2>

          <p
            className="mt-2 text-sm"
            style={{ color: "var(--text-secondary)" }}
          >
            Join us and start your shopping journey
          </p>
        </div>

        <form onSubmit={handleSubmit(handleChangeRegister)} className="space-y-5">
          {/* ================= FULL NAME ================= */}

          <div>
            <label
              className="block mb-2 text-sm font-semibold"
              style={{ color: "var(--text-primary)" }}
            >
              Full Name
            </label>

            <div className="relative">
              <User
                size={20}
                className="absolute left-4 top-1/2 -translate-y-1/2"
                style={{ color: "var(--text-secondary)" }}
              />

              <input
                {...register("name", {
                  required: "Full name is required",
                })}
                type="text"
                placeholder="Enter your full name"
                className="w-full h-[52px] rounded-xl bg-white pl-12 pr-4 outline-none transition"
                style={{
                  border: `1px solid ${
                    errors.name ? "var(--danger)" : "var(--border)"
                  }`,
                  color: "var(--text-primary)",
                }}
              />
            </div>

            {/* Error */}
            {errors.name && (
              <p className="text-xs mt-1.5" style={{ color: "var(--danger)" }}>
                {errors.name.message}
              </p>
            )}
          </div>

          {/* ================= EMAIL ================= */}

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

                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Please enter a valid email address",
                  },
                })}
                type="email"
                placeholder="Enter your email"
                className="w-full h-[52px] rounded-xl bg-white pl-12 pr-4 outline-none transition"
                style={{
                  border: `1px solid ${
                    errors.email ? "var(--danger)" : "var(--border)"
                  }`,
                  color: "var(--text-primary)",
                }}
              />
            </div>

            {/* Error */}
            {errors.email && (
              <p className="text-xs mt-1.5" style={{ color: "var(--danger)" }}>
                {errors.email.message}
              </p>
            )}
          </div>

          {/* ================= PASSWORD ================= */}

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

                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters",
                  },
                })}
                type="password"
                placeholder="Enter your password"
                className="w-full h-[52px] rounded-xl bg-white pl-12 pr-4 outline-none transition"
                style={{
                  border: `1px solid ${
                    errors.password ? "var(--danger)" : "var(--border)"
                  }`,
                  color: "var(--text-primary)",
                }}
              />
            </div>

            {/* Error */}
            {errors.password && (
              <p className="text-xs mt-1.5" style={{ color: "var(--danger)" }}>
                {errors.password.message}
              </p>
            )}
          </div>

          {/* ================= CONFIRM PASSWORD ================= */}

          <div>
            <label
              className="block mb-2 text-sm font-semibold"
              style={{ color: "var(--text-primary)" }}
            >
              Confirm Password
            </label>

            <div className="relative">
              <LockKeyhole
                size={20}
                className="absolute left-4 top-1/2 -translate-y-1/2"
                style={{ color: "var(--text-secondary)" }}
              />

              <input
                {...register("confirmPassword", {
                  required: "Please confirm your password",
                })}
                type="password"
                placeholder="Confirm your password"
                className="w-full h-[52px] rounded-xl bg-white pl-12 pr-4 outline-none transition"
                style={{
                  border: `1px solid ${
                    errors.confimPassword ? "var(--danger)" : "var(--border)"
                  }`,
                  color: "var(--text-primary)",
                }}
              />
            </div>

            {/* Error */}
            {errors.confimPassword && (
              <p className="text-xs mt-1.5" style={{ color: "var(--danger)" }}>
                {errors.confimPassword.message}
              </p>
            )}
          </div>

          {/* ================= REGISTER BUTTON ================= */}

          <button
            type="submit"
            className="w-full h-[53px] rounded-xl text-white font-semibold cursor-pointer active:scale-110 transition duration-75"
            style={{
              backgroundColor: "var(--btn-primary)",
              boxShadow: "var(--shadow-sm)",
            }}
          >
            Register
          </button>
        </form>

        {/* Login */}
        <p
          className="text-center text-sm mt-7"
          style={{ color: "var(--text-secondary)" }}
        >
          Already have an account?{" "}
          <span
            onClick={() => navigate("/auth/login")}
            className="font-semibold cursor-pointer"
            style={{ color: "var(--primary-light)" }}
          >
            Login
          </span>
        </p>
      </div>
    </div>
  );
};

export default Register;
