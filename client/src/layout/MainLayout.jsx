import React from "react";
import { Outlet } from "react-router";
import Container from "../components/Container";

function MainLayout() {
  return (
    <Container>
      Layout
      <Outlet />
    </Container>
  );
}

export default MainLayout;
