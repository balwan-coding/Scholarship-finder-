import React, { useState } from "react";
import FilterForm from "./FilterForm";
import Alert from "./Alert";
import ScholarshipCards from "./ScholarshipCards";
import { mockScholarships } from "./api";
import { Link } from "react-router-dom";
import SearchInput from "./SearchInput";
import { HiArrowSmallRight } from "react-icons/hi2";
import { HiArrowLongLeft } from "react-icons/hi2";

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
    if (!searchInput.trim()) {
      setAlertMessage("Plese Enter Education Level");
      setShowAlert(true);
      return;
    }
    const filteredScholarships = mockScholarships.filter((scholar) =>
      scholar.EducationLevel.toLowerCase()
        .trim()
        .includes(searchInput.toLowerCase().trim())
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
      const matchesEducation =
        scholar.EducationLevel === formData.EducationLevel;

      const matchesGender =
        formData.Gender === "All" || scholar.Gender === formData.Gender;

      const matchesCast =
        formData.Cast === "All" || scholar.Cast === formData.Cast;

      return matchesEducation && matchesGender && matchesCast;
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
        <div className="flex justify-between">
          <Link
            className="flex items-center justify-center gap-2 p-3 mt-10 text-xl font-extrabold text-white bg-transparent border border-black rounded-lg hover:bg-gray-800 fade-in"
            to="/"
          >
            <HiArrowLongLeft />
            back
          </Link>
          <Link
            className="flex items-center justify-center gap-2 p-3 mt-10 text-xl font-extrabold text-white bg-transparent border border-black rounded-lg hover:bg-gray-800 fade-in"
            to="/AboutMe"
          >
            Next <HiArrowSmallRight />
          </Link>
        </div>
        <div className="flex gap-6">
          <button
            onClick={() => {
              setSearchMode("search");
              setScholarships([]);
              setSearchInput("");
              setFormData({ EducationLevel: "", Gender: "", Cast: "" });
            }}
            className="p-1 text-xl text-white bg-orange-600 hover:bg-orange-700 rounded-2xl"
          >
            Search
          </button>
          <button
            onClick={() => {
              setSearchMode("filter");
              setScholarships([]);
              setSearchInput("");
              setFormData({ EducationLevel: "", Gender: "", Cast: "" });
            }}
            className="p-1 text-xl text-white bg-orange-600 hover:bg-orange-700 rounded-2xl"
          >
            Filter Search
          </button>
        </div>

        {searchMode === "filter" && (
          <FilterForm
            formData={formData}
            handleChange={handleChange}
            handleFilterSubmit={handleFilterSubmit}
          />
        )}

        {searchMode === "search" && (
          <SearchInput
            searchInput={searchInput}
            handleSearchInputChange={handleSearchInputChange}
            handleSearchSubmit={handleSearchSubmit}
          />
        )}
      </div>
      {showAlert && <Alert message={alertMessage} onClose={handleCloseAlert} />}
      <ScholarshipCards scholarships={scholarships} />
    </div>
  );
}

export default Scholar;
