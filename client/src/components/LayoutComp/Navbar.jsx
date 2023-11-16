import React from "react";
import logo from "../../assets/Logo.png";
import { Link } from "react-router-dom";
import NavbarLinks from "./NavbarLinks";

function Navbar() {
  return (
    <div className="px-6 py-3 my-[30px] relative z-10 flex justify-between items-center">
      <Link to={"/"} className="logo ">
        <img src={logo} alt="logo" />
      </Link>
      <NavbarLinks />

      <div className="auth__button">
        <button className="mr-5 text-white">Sign Up</button>
        <button className="px-6 py-3 bg-[#CAFF33] rounded-[82px]">Login</button>
      </div>
    </div>
  );
}

export default Navbar;
