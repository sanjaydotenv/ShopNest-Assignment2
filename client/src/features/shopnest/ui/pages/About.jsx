import {
  ShoppingBag,
  Sparkles,
  ShieldCheck,
  Truck,
  Heart,
  ArrowRight,
  Package,
  Users,
  Store,
} from "lucide-react";
import { useAuthHook } from "../../hooks/authHook";

const About = () => {
  const { navigate } = useAuthHook();

  return (
    <div
      className="min-h-screen overflow-hidden"
      style={{ backgroundColor: "var(--bg-main)" }}
    >
      {/* ================= HERO ================= */}
      <section
        className="relative overflow-hidden"
        style={{ backgroundColor: "var(--bg-dark)" }}
      >
        {/* Glow */}
        <button
          onClick={() => navigate("/")}
          type="button"
          className="fixed z-[9999] left-10 top-10 px-5 py-2.5 rounded-xl cursor-pointer"
          style={{
            backgroundColor: "var(--primary)",
            color: "var(--text-white)",
          }}
        >
          ← Back To Home
        </button>
        <div
          className="absolute -right-32 -top-32 w-[450px] h-[450px] rounded-full blur-[120px] opacity-20"
          style={{ backgroundColor: "var(--accent-dark)" }}
        />

        <div
          className="absolute -left-40 bottom-[-200px] w-[400px] h-[400px] rounded-full blur-[120px] opacity-10"
          style={{ backgroundColor: "var(--primary-light)" }}
        />

        <div className="relative max-w-7xl mx-auto px-6 md:px-10 py-24 md:py-32">
          <div className="max-w-3xl">
            {/* Small Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 mb-7">
              <Sparkles size={15} style={{ color: "var(--accent)" }} />

              <span className="text-xs font-medium text-white/80">
                The story behind ShopNest
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-4xl md:text-6xl font-bold leading-[1.05] text-white">
              More Than Just
              <br />
              <span style={{ color: "var(--accent-dark)" }}>Shopping.</span>
            </h1>

            <p className="mt-7 max-w-2xl text-base md:text-lg leading-8 text-white/60">
              ShopNest is built around a simple idea — shopping should feel
              effortless, reliable, and enjoyable. We bring useful products
              together in one place so you can spend less time searching and
              more time enjoying what you find.
            </p>
          </div>
        </div>
      </section>

      {/* ================= STORY ================= */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 py-20 md:py-28">
        <div className="grid md:grid-cols-2 gap-14 items-center">
          {/* Visual */}
          <div className="relative">
            <div
              className="relative h-[380px] rounded-[28px] overflow-hidden flex items-center justify-center"
              style={{
                backgroundColor: "var(--primary)",
                boxShadow: "var(--shadow-lg)",
              }}
            >
              {/* Decorative circles */}
              <div className="absolute w-72 h-72 rounded-full border border-white/10" />
              <div className="absolute w-52 h-52 rounded-full border border-white/10" />
              <div className="absolute w-32 h-32 rounded-full border border-white/10" />

              <div className="relative text-center">
                <div
                  className="mx-auto w-20 h-20 rounded-2xl flex items-center justify-center"
                  style={{ backgroundColor: "var(--accent)" }}
                >
                  <ShoppingBag size={38} style={{ color: "var(--primary)" }} />
                </div>

                <h3 className="mt-6 text-2xl font-bold text-white">ShopNest</h3>

                <p className="mt-2 text-sm text-white/50">
                  Everything you need,
                  <br />
                  all in one nest.
                </p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <span
              className="text-sm font-semibold"
              style={{ color: "var(--primary-light)" }}
            >
              OUR STORY
            </span>

            <h2
              className="mt-3 text-3xl md:text-4xl font-bold"
              style={{ color: "var(--text-primary)" }}
            >
              Built to make
              <br />
              shopping simpler.
            </h2>

            <p
              className="mt-6 leading-7"
              style={{ color: "var(--text-secondary)" }}
            >
              Finding the right product shouldn't mean opening dozens of tabs or
              scrolling endlessly. ShopNest brings products, categories, and a
              smooth shopping experience together under one roof.
            </p>

            <p
              className="mt-4 leading-7"
              style={{ color: "var(--text-secondary)" }}
            >
              From discovering something new to getting it delivered safely to
              your door, every part of ShopNest is designed with simplicity in
              mind.
            </p>
          </div>
        </div>
      </section>

      {/* ================= VALUES ================= */}
      <section className="py-20" style={{ backgroundColor: "var(--bg-soft)" }}>
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span
              className="text-sm font-semibold"
              style={{ color: "var(--primary-light)" }}
            >
              WHAT WE BELIEVE
            </span>

            <h2
              className="mt-3 text-3xl md:text-4xl font-bold"
              style={{ color: "var(--text-primary)" }}
            >
              Simple principles.
              <br />
              Better experiences.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div
              className="p-7 rounded-2xl bg-white"
              style={{ boxShadow: "var(--shadow-sm)" }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center"
                style={{ backgroundColor: "var(--accent)" }}
              >
                <Sparkles size={22} style={{ color: "var(--primary)" }} />
              </div>

              <h3
                className="mt-6 text-xl font-bold"
                style={{ color: "var(--text-primary)" }}
              >
                Simplicity
              </h3>

              <p
                className="mt-3 text-sm leading-6"
                style={{ color: "var(--text-secondary)" }}
              >
                Clean browsing, simple choices, and an experience that doesn't
                get in your way.
              </p>
            </div>

            {/* Card 2 */}
            <div
              className="p-7 rounded-2xl bg-white"
              style={{ boxShadow: "var(--shadow-sm)" }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center"
                style={{ backgroundColor: "var(--accent)" }}
              >
                <ShieldCheck size={22} style={{ color: "var(--primary)" }} />
              </div>

              <h3
                className="mt-6 text-xl font-bold"
                style={{ color: "var(--text-primary)" }}
              >
                Trust
              </h3>

              <p
                className="mt-3 text-sm leading-6"
                style={{ color: "var(--text-secondary)" }}
              >
                We believe a great shopping experience starts with reliability,
                transparency, and secure transactions.
              </p>
            </div>

            {/* Card 3 */}
            <div
              className="p-7 rounded-2xl bg-white"
              style={{ boxShadow: "var(--shadow-sm)" }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center"
                style={{ backgroundColor: "var(--accent)" }}
              >
                <Heart size={22} style={{ color: "var(--primary)" }} />
              </div>

              <h3
                className="mt-6 text-xl font-bold"
                style={{ color: "var(--text-primary)" }}
              >
                Customer First
              </h3>

              <p
                className="mt-3 text-sm leading-6"
                style={{ color: "var(--text-secondary)" }}
              >
                Every detail is designed around making your shopping journey
                comfortable and enjoyable.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= STATS ================= */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center">
            <Package
              size={25}
              className="mx-auto"
              style={{ color: "var(--primary-light)" }}
            />

            <h3
              className="mt-4 text-3xl font-bold"
              style={{ color: "var(--text-primary)" }}
            >
              10K+
            </h3>

            <p
              className="mt-1 text-sm"
              style={{ color: "var(--text-secondary)" }}
            >
              Products
            </p>
          </div>

          <div className="text-center">
            <Users
              size={25}
              className="mx-auto"
              style={{ color: "var(--primary-light)" }}
            />

            <h3
              className="mt-4 text-3xl font-bold"
              style={{ color: "var(--text-primary)" }}
            >
              5K+
            </h3>

            <p
              className="mt-1 text-sm"
              style={{ color: "var(--text-secondary)" }}
            >
              Happy Customers
            </p>
          </div>

          <div className="text-center">
            <Store
              size={25}
              className="mx-auto"
              style={{ color: "var(--primary-light)" }}
            />

            <h3
              className="mt-4 text-3xl font-bold"
              style={{ color: "var(--text-primary)" }}
            >
              500+
            </h3>

            <p
              className="mt-1 text-sm"
              style={{ color: "var(--text-secondary)" }}
            >
              Sellers
            </p>
          </div>

          <div className="text-center">
            <Truck
              size={25}
              className="mx-auto"
              style={{ color: "var(--primary-light)" }}
            />

            <h3
              className="mt-4 text-3xl font-bold"
              style={{ color: "var(--text-primary)" }}
            >
              24/7
            </h3>

            <p
              className="mt-1 text-sm"
              style={{ color: "var(--text-secondary)" }}
            >
              Support
            </p>
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="px-6 md:px-10 pb-20">
        <div
          className="max-w-7xl mx-auto rounded-[28px] p-10 md:p-16 relative overflow-hidden"
          style={{ backgroundColor: "var(--primary)" }}
        >
          <div
            className="absolute -right-20 -top-32 w-80 h-80 rounded-full blur-[80px] opacity-20"
            style={{ backgroundColor: "var(--accent)" }}
          />

          <div className="relative flex flex-col md:flex-row md:items-center justify-between gap-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Ready to discover
                <br />
                something new?
              </h2>

              <p className="mt-4 text-sm text-white/60">
                Explore products made for your everyday life.
              </p>
            </div>

            <button
              className="flex items-center justify-center gap-3 px-6 py-3.5 rounded-full font-semibold text-sm whitespace-nowrap"
              style={{
                backgroundColor: "var(--accent)",
                color: "var(--primary-dark)",
              }}
            >
              Explore Products
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
