import React, { useState } from "react";
import FilterForm from "./FilterForm";
import Alert from "./Alert";
import ScholarshipCards from "./ScholarshipCards";
import { mockScholarships } from "./api";
import { Link } from "react-router-dom";
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

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.id]: event.target.value });
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
      setScholarships([]);
    } else {
      setScholarships(filteredScholarships);
      setShowAlert(false);
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
            className="flex items-center justify-center gap-2 p-1 mt-10 text-xl font-extrabold text-white bg-transparent border-2 border-black rounded-lg sm:p-3 hover:bg-gray-800 fade-in"
            to="/"
          >
            <HiArrowLongLeft />
            back
          </Link>
          <Link
            className="flex items-center justify-center gap-2 p-1 mt-10 text-xl font-extrabold text-white bg-transparent border-2 border-black rounded-lg sm:p-3 hover:bg-gray-800 fade-in"
            to="/AboutMe"
          >
            Next <HiArrowSmallRight />
          </Link>
        </div>

        <FilterForm
          formData={formData}
          handleChange={handleChange}
          handleFilterSubmit={handleFilterSubmit}
        />
      </div>
      {showAlert && <Alert message={alertMessage} onClose={handleCloseAlert} />}
      <ScholarshipCards scholarships={scholarships} />
    </div>
  );
}

export default Scholar;
