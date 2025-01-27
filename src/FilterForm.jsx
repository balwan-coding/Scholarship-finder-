import React from "react";

function FilterForm({ formData, handleChange, handleFilterSubmit }) {
  return (
    <div className="flex flex-col gap-2 fade-in">
      <label
        className="text-xl text-white cursor-pointer"
        htmlFor="EducationLevel"
      >
        Education Level
      </label>
      <select
        className="p-1 text-xl text-black bg-transparent border-2 border-r-4 border-indigo-800 cursor-pointer rounded-2xl"
        id="EducationLevel"
        value={formData.EducationLevel}
        onChange={handleChange}
      >
        <option value="">Select Education Level</option>
        <option value="School">School</option>
        <option value="Undergraduate">Undergraduate</option>
        <option value="Postgraduate">Postgraduate</option>
        <option value="Diploma">Diploma</option>
        <option value="Higher Education">Higher Education</option>
      </select>

      <label className="text-xl text-white cursor-pointer" htmlFor="Gender">
        Gender
      </label>
      <select
        className="p-1 text-xl text-black bg-transparent border-2 border-r-4 border-indigo-800 cursor-pointer rounded-2xl"
        id="Gender"
        value={formData.Gender}
        onChange={handleChange}
      >
        <option value="">Select Gender</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="All">All</option>
      </select>

      <label className="text-xl text-white cursor-pointer" htmlFor="Cast">
        Cast
      </label>
      <select
        className="p-1 text-xl text-black bg-transparent border-2 border-r-4 border-indigo-800 cursor-pointer rounded-2xl"
        id="Cast"
        value={formData.Cast}
        onChange={handleChange}
      >
        <option value="">Select Cast</option>
        <option value="General">General</option>
        <option value="OBC">OBC</option>
        <option value="SC">SC</option>
        <option value="ST">ST</option>
        <option value="All">All</option>
      </select>

      <button
        onClick={handleFilterSubmit}
        className="p-1 text-xl text-white bg-red-500 hover:bg-red-600 rounded-2xl"
      >
        Filter Search
      </button>
    </div>
  );
}

export default FilterForm;
