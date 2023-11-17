import React from "react";
import { Outlet } from "react-router";
import Container from "../components/Container";
import Navbar from "../components/LayoutComp/Navbar";
import Footer from "../components/LayoutComp/Footer";

function MainLayout() {
  return (
    <React.Fragment>
      <Container>
        <Navbar />
        <Outlet />
      </Container>
      <Footer />
    </React.Fragment>
  );
}

export default MainLayout;
