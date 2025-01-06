import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="box-border flex justify-between p-4 bg-indigo-600">
      <Link
        to="/"
        className="text-xl font-bold text-white hover:text-indigo-300 sm:text-3xl md:text-3xl lg:text-3xl"
      >
        HOME
      </Link>
      <Link
        to="/AboutMe"
        className="text-xl font-bold text-white hover:text-indigo-300 sm:text-3xl md:text-3xl lg:text-3xl"
      >
        ABOUT Me
      </Link>
    </div>
  );
}

export default Navbar;
