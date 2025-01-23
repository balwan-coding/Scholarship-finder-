import React, { useState } from "react";
import ScCart from "./ScCart";
import { mockScholarships } from "./api";
import "./styles.css";
import CustomAlert from "./CustomAlert";

function Scholar() {
  const [formData, setFormData] = useState({
    EducationLevel: "",
    Gender: "",
    Cast: "",
  });

  const [scholarships, setScholarships] = useState([]);
  const [alertMessage, setAlertMessage] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const [searchMode, setSearchMode] = useState("filter");
  const [searchInput, setSearchInput] = useState("");

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.id]: event.target.value });
  };

  const handleSearchInputChange = (event) => {
    setSearchInput(event.target.value);
  };

  const handleSearchSubmit = () => {
    const filteredScholarships = mockScholarships.filter((scholar) =>
      scholar.EducationLevel.toLowerCase().includes(searchInput.toLowerCase())
    );

    if (filteredScholarships.length === 0) {
      setAlertMessage(`No scholarships found matching "${searchInput}".`);
      setShowAlert(true);
    } else {
      setScholarships(filteredScholarships);
    }
  };

  const handleFilterSubmit = () => {
    const filteredScholarships = mockScholarships.filter((scholar) => {
      return (
        scholar.EducationLevel === formData.EducationLevel &&
        scholar.Gender === formData.Gender &&
        scholar.Cast === formData.Cast
      );
    });

    if (filteredScholarships.length === 0) {
      setAlertMessage(`No scholarships found for the selected criteria.`);
      setShowAlert(true);
    } else {
      setScholarships(filteredScholarships);
    }
  };

  const handleCloseAlert = () => {
    setShowAlert(false);
  };

  return (
    <div className="flex flex-col items-center min-h-screen gap-5 bg-indigo-500">
      <div className="flex flex-col w-4/5 gap-2 m-5 fade-in">
        <div className="flex gap-4">
          <button
            onClick={() => {
              setSearchMode("search"), setScholarships("");
            }}
            className="p-1 text-xl text-white bg-green-500 hover:bg-green-600 rounded-2xl"
          >
            Search
          </button>
          <button
            onClick={() => {
              setSearchMode("filter"), setScholarships("");
            }}
            className="p-1 text-xl text-white bg-red-500 hover:bg-red-600 rounded-2xl"
          >
            Filter Search
          </button>
        </div>
        {searchMode === "filter" && (
          <>
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
              <option defaultValue={"Select Education Level"} value="">
                Select Education Level
              </option>
              <option value="School">School</option>
              <option value="Undergraduate">Undergraduate</option>
              <option value="Postgraduate">Postgraduate</option>
              <option value="Diploma">Diploma</option>
              <option value="Higher Education">Higher Education</option>
            </select>

            <label
              className="text-xl text-white cursor-pointer"
              htmlFor="Gender"
            >
              Gender
            </label>
            <select
              className="p-1 text-xl text-black bg-transparent border-2 border-r-4 border-indigo-800 cursor-pointer rounded-2xl"
              id="Gender"
              value={formData.Gender}
              onChange={handleChange}
            >
              <option defaultValue={"Select Gender"} value="">
                Select Gender
              </option>
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
              <option defaultValue={"Select Cast"} value="">
                Select Cast
              </option>
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
          </>
        )}

        {searchMode === "search" && (
          <>
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
              className="p-1 text-xl text-white bg-green-500 hover:bg-green-600 rounded-2xl"
            >
              Search
            </button>
          </>
        )}
      </div>

      {showAlert && (
        <CustomAlert message={alertMessage} onClose={handleCloseAlert} />
      )}

      <div className="flex flex-col items-center justify-center w-full p-3 mt-3 mb-3 bg-indigo-200 rounded-3xl">
        {scholarships.length > 0 ? (
          <div className="flex flex-wrap justify-center gap-3">
            {scholarships.map((scholar, index) => (
              <ScCart key={index} scholar={scholar} />
            ))}
          </div>
        ) : (
          <p className="mt-4 text-xl font-semibold text-center text-black md:text-2xl">
            No scholarships found for the selected criteria.
          </p>
        )}
      </div>
    </div>
  );
}

export default Scholar;
