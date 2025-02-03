import React from "react";

function SearchInput({ searchInput, handleSearchInputChange }) {
  return (
    <div className="flex flex-col gap-2 fade-in">
      <label
        className="text-xl text-white cursor-pointer"
        htmlFor="searchInput"
      >
        Search by Education Level
      </label>
      <input
        type="text"
        id="searchInput"
        value={searchInput}
        onChange={handleSearchInputChange}
        className="p-1 text-xl text-black bg-transparent border-2 border-r-4 border-indigo-800 rounded-2xl"
        placeholder="Type education level (e.g., School)"
      />
    </div>
  );
}

export default SearchInput;
