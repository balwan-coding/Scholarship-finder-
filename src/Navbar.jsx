import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="box-border p-4 bg-indigo-600">
      <Link to="/" className="text-3xl font-bold text-white">
        HOME
      </Link>
    </div>
  );
}

export default Navbar;
