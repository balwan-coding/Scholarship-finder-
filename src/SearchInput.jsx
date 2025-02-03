import React from "react";
import { FaSearch } from "react-icons/fa";

function SearchInput({ searchInput, handleSearchInputChange }) {
  return (
    <div className="flex flex-col gap-2 fade-in">
      <label
        className="text-xl text-white cursor-pointer"
        htmlFor="searchInput"
      >
        Search by Education Level
      </label>
      <div className="flex items-center gap-2 pr-1 bg-transparent border-2 border-indigo-800 rounded-xl">
        <input
          type="text"
          id="searchInput"
          value={searchInput}
          onChange={handleSearchInputChange}
          className="flex-1 p-2 text-lg text-black bg-transparent border-none focus:outline-none"
          placeholder="Type education level (e.g., School)"
        />
        <FaSearch className="text-2xl text-gray-300 cursor-pointer" />
      </div>
    </div>
  );
}

export default SearchInput;
