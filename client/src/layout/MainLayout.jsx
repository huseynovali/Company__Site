import React from "react";
import { Outlet } from "react-router";
import Container from "../components/Container";
import Navbar from "../components/LayoutComp/Navbar";

function MainLayout() {
  return (
    <Container>
      <Navbar/>
      Layout
      <Outlet />
    </Container>
  );
}

export default MainLayout;
