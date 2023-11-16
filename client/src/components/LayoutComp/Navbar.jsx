import React from "react";
import logo from "../../assets/Logo.png";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="px-6 py-3 my-[30px] relative z-10 flex justify-between items-center">
      <Link to={"/"} className="logo ">
        <img src={logo} alt="logo" />
      </Link>
      <div className="nav__links">
        <ul className="flex">
          <li className="  text-white rounded-[82px] hover:bg-[#262626]">
            <Link className="text-sm py-[10px] px-4 block" to={"/"}>
              Home
            </Link>
          </li>
          <li className=" text-white rounded-[82px] hover:bg-[#262626]">
            <Link className="text-sm py-[10px] px-4 block">Careers</Link>
          </li>
          <li className=" text-white rounded-[82px] hover:bg-[#262626]">
            <Link className="text-sm py-[10px] px-4 block">About</Link>
          </li>
          <li className=" text-white rounded-[82px] hover:bg-[#262626]">
            <Link className="text-sm py-[10px] px-4 block">Security</Link>
          </li>
        </ul>
      </div>

      <div className="auth__button">
        <button className="mr-5 text-white">Sign Up</button>
        <button className="px-6 py-3 bg-[#CAFF33] rounded-[82px]">Login</button>
      </div>
    </div>
  );
}

export default Navbar;
