import React, { useState } from "react";
import FilterForm from "./FilterForm";
import SearchInput from "./SearchInput";
import Alert from "./Alert";
import ScholarshipCards from "./ScholarshipCards";
import { mockScholarships } from "./api";

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
              setSearchMode("search");
              setScholarships([]);
            }}
            className="p-1 text-xl text-white bg-green-500 hover:bg-green-600 rounded-2xl"
          >
            Search
          </button>
          <button
            onClick={() => {
              setSearchMode("filter");
              setScholarships([]);
            }}
            className="p-1 text-xl text-white bg-red-500 hover:bg-red-600 rounded-2xl"
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
