import React from "react";
import logo from "../../assets/Logo.png";
import { Link } from "react-router-dom";
import NavbarLinks from "./NavbarLinks";

function Navbar() {
  return (
    <div className="px-6 py-3 my-[30px] relative z-10 flex justify-between items-center bg-[#1C1C1C] rounded-[82px] border border-[#262626]">
      <Link to={"/"} className="logo ">
        <img src={logo} alt="logo" />
      </Link>
      <NavbarLinks />

      <div className="auth__button hidden lg:block">
        <button className="mr-5 text-white">Sign Up</button>
        <button className="px-6 py-3 bg-[#CAFF33] rounded-[82px]">Login</button>
      </div>

      <div className="  mobile__bar  px-3 py-1 bg-[#CAFF33] rounded-[82px] lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 28 28"
          fill="none"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M3.5 7.875C3.5 7.39175 3.89175 7 4.375 7H23.625C24.1082 7 24.5 7.39175 24.5 7.875C24.5 8.35825 24.1082 8.75 23.625 8.75H4.375C3.89175 8.75 3.5 8.35825 3.5 7.875ZM3.5 14C3.5 13.5168 3.89175 13.125 4.375 13.125H23.625C24.1082 13.125 24.5 13.5168 24.5 14C24.5 14.4832 24.1082 14.875 23.625 14.875H4.375C3.89175 14.875 3.5 14.4832 3.5 14ZM13.125 20.125C13.125 19.6418 13.5168 19.25 14 19.25H23.625C24.1082 19.25 24.5 19.6418 24.5 20.125C24.5 20.6082 24.1082 21 23.625 21H14C13.5168 21 13.125 20.6082 13.125 20.125Z"
            fill="#333333"
          />
        </svg>
      </div>
    </div>
  );
}

export default Navbar;
