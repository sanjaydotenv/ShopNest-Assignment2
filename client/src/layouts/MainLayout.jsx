import React from 'react'
import { Outlet } from 'react-router'

const MainLayout = () => {
  return (
    <div className="bg-[var(--bg-main)] h-screen w-full">
      <Outlet />
    </div>
  )
}

export default MainLayout
