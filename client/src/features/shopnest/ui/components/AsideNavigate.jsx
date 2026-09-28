import React from "react";
import { useLocation } from "react-router";
import { useAuthHook } from "../../hooks/authHook";
import { useSelector } from "react-redux";

const navItems = [
  { label: "Home", icon: "⌂", path: "/" },
  { label: "Products", icon: "▦", path: "/Products" },
  { label: "Add Product", icon: "+", path: "/addProduct" },
  { label: "Profile", icon: "♙", path: "/profile" },
  { label: "Logout", icon: "↪" },
];

const AsideNavigate = () => {
  const { navigate , handleLogout } = useAuthHook();
  const location = useLocation();

  const {user} = useSelector(state => state.auth)


  return (
    <aside
      className="fixed left-0 top-0 z-50 h-screen w-[220px] px-4 py-5 flex flex-col"
      style={{
        backgroundColor: "var(--bg-dark)",
        color: "var(--text-white)",
      }}
    >
      {/* ================= LOGO ================= */}

      <div className="px-2 mb-8 flex items-center gap-2.5">
        <div
          className="w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold"
          style={{
            backgroundColor: "var(--accent)",
            color: "var(--primary)",
          }}
        >
          S
        </div>

        <span className="font-bold tracking-tight text-base">
          ShopNest
        </span>
      </div>

      {/* ================= NAVIGATION ================= */}

      <nav className="space-y-1.5">
        {navItems.map((item) => {
          const isActive =
            item.path && location.pathname === item.path;

          return (
            <button
              key={item.label}
              type="button"
              onClick={() => {
                if (item.path) {
                  navigate(item.path);
                }
                handleLogout(item)
              }}
              className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-all duration-200 cursor-pointer"
              style={{
                backgroundColor: isActive
                  ? "var(--primary-light)"
                  : "transparent",

                color: isActive
                  ? "var(--text-white)"
                  : "rgba(255,255,255,.72)",

                boxShadow: isActive
                  ? "var(--shadow-sm)"
                  : "none",
              }}
            >
              <span className="text-base w-5 text-center">
                {item.icon}
              </span>

              <span>{item.label}</span>
            </button>
          );
        })}
      </nav>

      {/* ================= USER ================= */}

      <div
        className="mt-auto pt-5 border-t flex items-center gap-3"
        style={{
          borderColor: "rgba(255,255,255,.1)",
        }}
      >
        <div
          className="w-9 h-9 rounded-full flex items-center justify-center text-sm"
          style={{
            backgroundColor: "var(--bg-surface)",
            color: "var(--primary)",
          }}
        >
          👤
        </div>

        <div className="min-w-0">
          <p className="text-xs font-semibold truncate">
            {user?.user?.name}
          </p>

          <p className="text-[10px] text-white/45 truncate">
            Admin
          </p>
        </div>
      </div>
    </aside>
  );
};

export default AsideNavigate;