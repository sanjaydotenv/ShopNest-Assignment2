import {
  ArrowRight,
  Truck,
  ShieldCheck,
  Headphones,
  ShoppingBag,
} from "lucide-react";
import { useAuthHook } from "../../hooks/authHook";

const Home = () => {
  const { navigate } = useAuthHook();



  return (
    <div
      className="min-h-screen "
      style={{ backgroundColor: "var(--bg-main)" }}
    >
      {/* ================= NAVBAR ================= */}
      <nav
        className="h-[70px] flex items-center justify-between px-8 md:px-10 border-b"
        style={{
          backgroundColor: "var(--primary)",
          borderColor: "rgba(255,255,255,0.08)",
        }}
      >
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div
            className="w-9 h-9 rounded-lg flex items-center justify-center"
            style={{ backgroundColor: "var(--bg-surface)" }}
          >
            <ShoppingBag size={19} style={{ color: "var(--primary)" }} />
          </div>

          <span className="text-white font-bold text-lg">ShopNest</span>
        </div>

        {/* Navigation */}
        <div className="hidden md:flex items-center gap-10 cursor-pointer">
          <h2 className="text-sm text-white/90 hover:text-white transition">
            Home
          </h2>

          <h2 onClick={() => navigate("/products")} className="text-sm text-white/90 hover:text-white transition">
            Products
          </h2>

          <h2 onClick={() => navigate("/about")} className="text-sm text-white/90 hover:text-white transition">
            About
          </h2>
        </div>

        {/* Auth */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => navigate("/auth/login")}
            className="px-5 py-2 text-sm font-medium text-white rounded-lg hover:bg-white/10 transition"
          >
            Login
          </button>

          <button onClick={() => navigate("/auth")}
            className="px-5 py-2.5 text-sm font-semibold rounded-lg transition"
            style={{
              backgroundColor: "var(--bg-surface)",
              color: "var(--primary)",
            }}
          >
            Register
          </button>
        </div>
      </nav>

      {/* ================= HERO ================= */}
      <section
        className="relative overflow-hidden min-h-[calc(100vh-70px)]"
        style={{
          backgroundColor: "var(--bg-dark)",
        }}
      >
        {/* Glow */}
        <div
          className="absolute w-[400px] h-[400px] rounded-full blur-[100px] opacity-20 -right-20 top-10"
          style={{ backgroundColor: "var(--accent-dark)" }}
        />

        <div className="relative max-w-7xl mx-auto min-h-[570px] px-6 md:px-10 flex items-center">
          {/* LEFT CONTENT */}
          <div className="w-full md:w-[52%] z-10">
            <h1
              className="text-4xl md:text-[52px] leading-[1.08] font-bold tracking-tight"
              style={{ color: "var(--text-white)" }}
            >
              Your One Stop
              <br />
              Shop for{" "}
              <span style={{ color: "var(--accent-dark)" }}>Everything</span>
            </h1>

            <p
              className="mt-5 max-w-[450px] text-base leading-7"
              style={{ color: "rgba(255,255,255,0.68)" }}
            >
              Discover amazing products, unbeatable prices,
              <br className="hidden md:block" />
              and a seamless shopping experience.
            </p>

            {/* CTA */}
            <button
              className="mt-7 flex items-center gap-3 px-6 py-3.5 rounded-full font-semibold text-sm transition hover:scale-[1.02]"
              style={{
                backgroundColor: "var(--accent)",
                color: "var(--primary-dark)",
              }}
            >
              Explore Products
              <ArrowRight size={18} />
            </button>

            {/* FEATURES */}
            <div className="flex flex-wrap gap-8 mt-12">
              <div className="flex items-center gap-2.5">
                <Truck size={20} style={{ color: "var(--text-white)" }} />

                <span className="text-xs text-white/80">Fast Delivery</span>
              </div>

              <div className="flex items-center gap-2.5">
                <ShieldCheck size={20} style={{ color: "var(--text-white)" }} />

                <span className="text-xs text-white/80">Secure Payments</span>
              </div>

              <div className="flex items-center gap-2.5">
                <Headphones size={20} style={{ color: "var(--text-white)" }} />

                <span className="text-xs text-white/80">24/7 Support</span>
              </div>
            </div>
          </div>

          {/* RIGHT PRODUCT VISUAL */}
          <div className="hidden md:block absolute right-[-30px] bottom-0 w-[55%] h-full">
            {/* Light */}
            <div
              className="absolute right-[30%] top-[18%] w-[180px] h-[280px] blur-[80px] opacity-25"
              style={{ backgroundColor: "var(--accent-dark)" }}
            />

            {/* Product Image */}
            <div className="absolute right-[2%] bottom-[8%] w-[570px]">
              <div
                className="relative h-[300px] rounded-[50%] rotate-[-5deg]"
                style={{
                  background:
                    "linear-gradient(145deg, rgba(255,255,255,.12), rgba(255,255,255,.02))",
                  boxShadow: "var(--shadow-lg)",
                }}
              />

              {/* Laptop */}
              <div className="absolute left-[80px] bottom-[65px]">
                <div
                  className="w-[290px] h-[175px] rounded-lg border-[7px] border-[#17231f] bg-gradient-to-br from-gray-700 via-gray-900 to-black rotate-[-4deg]"
                  style={{
                    boxShadow: "0 20px 40px rgba(0,0,0,.35)",
                  }}
                >
                  <div className="w-full h-full flex items-center justify-center">
                    <span className="text-white/10 text-4xl">ShopNest</span>
                  </div>
                </div>

                <div
                  className="w-[320px] h-[18px] bg-[#343e3a] rounded-b-xl -mt-1 -ml-3"
                  style={{
                    transform: "skewX(-18deg)",
                  }}
                />
              </div>

              {/* Plant */}
              <div className="absolute left-[10px] bottom-[75px]">
                <div className="text-6xl">🌿</div>

                <div className="w-12 h-12 bg-[#a8794d] rounded-b-xl mx-auto -mt-2" />
              </div>

              {/* Headphones */}
              <div className="absolute right-[35px] bottom-[85px] text-[100px]">
                🎧
              </div>
            </div>

            {/* Floating Text */}
            <div className="absolute right-[75px] top-[100px] rotate-[-8deg] opacity-80">
              <p className="text-white text-sm font-medium">Better Products</p>

              <p className="text-white text-sm font-medium">Better Living</p>

              <div className="text-white text-2xl mt-1">↘</div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= MOBILE HERO IMAGE ================= */}
      <div
        className="md:hidden h-64 flex items-center justify-center"
        style={{ backgroundColor: "var(--bg-dark)" }}
      >
        <div className="text-7xl">💻 🎧</div>
      </div>
    </div>
  );
};

export default Home;
