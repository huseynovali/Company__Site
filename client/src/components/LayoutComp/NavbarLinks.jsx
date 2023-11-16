import React from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";

function NavbarLinks() {
  const url = useLocation();
  return (
    <div className="nav__links">
      <ul className="flex">
        <li
          className={`  text-white rounded-[82px] ${
            url.pathname == "/" && "bg-[#262626]"
          } `}
        >
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
  );
}

export default NavbarLinks;
