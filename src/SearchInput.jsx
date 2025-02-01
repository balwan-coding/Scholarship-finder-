import React from "react";

function SearchInput({
  searchInput,
  handleSearchInputChange,
  handleSearchSubmit,
}) {
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
      <button
        onClick={handleSearchSubmit}
        className="p-1 text-xl text-white bg-red-500 hover:bg-red-600 rounded-2xl"
      >
        Find Scholarship
      </button>
    </div>
  );
}

export default SearchInput;
