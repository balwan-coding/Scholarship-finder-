import React, { useState } from "react";
import FilterForm from "./FilterForm";
import Alert from "./Alert";
import ScholarshipCards from "./ScholarshipCards";
import { mockScholarships } from "./api";
import { Link } from "react-router-dom";

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
        <div className="flex justify-between">
          <Link
            className="flex items-center justify-center gap-2 p-3 mt-10 text-xl font-extrabold text-white transition-colors duration-300 ease-in-out bg-gray-700 border-none rounded-lg hover:bg-gray-800 fade-in"
            to="/"
          >
            Previous
          </Link>
          <Link
            className="flex items-center justify-center gap-2 p-3 mt-10 text-xl font-extrabold text-white transition-colors duration-300 ease-in-out bg-gray-700 border-none rounded-lg hover:bg-gray-800 fade-in"
            to="/AboutMe"
          >
            Next
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
