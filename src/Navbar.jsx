import React from "react";
import { Link } from "react-router-dom";
import { MdHome } from "react-icons/md";
import { FaRegUserCircle } from "react-icons/fa";

function Navbar() {
  return (
    <div className="box-border flex items-center justify-between p-4 bg-indigo-600">
      <div className="flex items-center justify-between flex-1 sm:hidden">
        <Link to="/" className="font-bold text-white ">
          <MdHome className="text-5xl" />
        </Link>
        <Link to="/AboutMe" className="font-bold text-white ">
          <FaRegUserCircle className="text-5xl" />
        </Link>
      </div>

      <div className="justify-between flex-1 hidden space-x-6 sm:flex">
        <Link
          to="/"
          className="text-xl font-bold text-white hover:text-indigo-100 sm:text-3xl md:text-3xl lg:text-3xl"
        >
          HOME
        </Link>
        <Link
          to="/AboutMe"
          className="text-xl font-bold text-white hover:text-indigo-100 sm:text-3xl md:text-3xl lg:text-3xl"
        >
          ABOUT Me
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
