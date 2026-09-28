import React from "react";
import { Outlet } from "react-router";

const AuthLayout = () => {
  return (
    <div className="bg-[var(--bg-main)] h-screen w-full">
      <Outlet />
    </div>
  );
};

export default AuthLayout;
