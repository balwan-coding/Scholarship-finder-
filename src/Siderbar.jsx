import React, { useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { IoCloseSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import { FaGoogleScholar } from "react-icons/fa6";
import { FaUserAlt } from "react-icons/fa";

function Siderbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const sidebarOpen = () => {
    setIsSidebarOpen(true);
  };

  const sidebarClose = () => {
    setIsSidebarOpen(false);
  };

  return (
    <>
      <button onClick={sidebarOpen}>
        <IoMdMenu className="text-4xl text-white" />
      </button>
      <div className="fixed z-50 flex h-screen">
        <div
          className={`fixed top-0 left-0 h-full w-52 bg-blue-600 text-white transition-all ${
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="p-4">
            <div className="flex justify-between mb-7">
              <img className="w-10" src="/schorallogo.webp" alt="" />
              <button className="" onClick={sidebarClose}>
                <IoCloseSharp className="text-4xl" />
              </button>
            </div>
            <div className="flex flex-col gap-5">
              <Link
                to="/"
                className="flex items-center gap-2 text-xl font-bold text-white hover:text-indigo-100 sm:text-3xl md:text-3xl lg:text-3xl"
              >
                <AiFillHome /> HOME
              </Link>
              <Link
                to="/Scholar"
                className="flex items-center gap-2 text-xl font-bold text-white hover:text-indigo-100 sm:text-3xl md:text-3xl lg:text-3xl"
              >
                <FaGoogleScholar /> Scholarships
              </Link>
              <Link
                to="/AboutMe"
                className="flex items-center gap-2 text-xl font-bold text-white hover:text-indigo-100 sm:text-3xl md:text-3xl lg:text-3xl"
              >
                <FaUserAlt /> ABOUT ME
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Siderbar;
