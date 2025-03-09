import React from "react";
import { Link } from "react-router-dom";
import Siderbar from "./siderbar";

function Navbar() {
  return (
    <div className="box-border flex items-center justify-between p-4 bg-indigo-600">
      <div className="flex items-center justify-between flex-1 sm:hidden">
        <Siderbar />
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
          ABOUT ME
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
