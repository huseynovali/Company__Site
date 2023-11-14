import React from 'react'
import { Outlet } from 'react-router'

function MainLayout() {
  return (
    <div>
        Layout
        <Outlet/>
    </div>
  )
}

export default MainLayout