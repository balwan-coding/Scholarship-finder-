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

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.id]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

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
    }

    setScholarships(filteredScholarships);
  };

  const handleCloseAlert = () => {
    setShowAlert(false);
  };

  return (
    <div className="flex flex-col items-center min-h-screen gap-5 bg-indigo-500">
      <div className="flex flex-col w-4/5 gap-2 m-5 fade-in">
        <label className="text-xl text-white" htmlFor="EducationLevel">
          Education Level
        </label>
        <select
          className="p-1 text-xl text-black bg-transparent border-2 border-r-4 border-indigo-800 rounded-2xl"
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

        <label className="text-xl text-white" htmlFor="Gender">
          Gender
        </label>
        <select
          className="p-1 text-xl text-black bg-transparent border-2 border-r-4 border-indigo-800 rounded-2xl"
          id="Gender"
          value={formData.Gender}
          onChange={handleChange}
        >
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="All">All</option>
        </select>

        <label className="text-xl text-white" htmlFor="Cast">
          Cast
        </label>
        <select
          className="p-1 text-xl text-black bg-transparent border-2 border-r-4 border-indigo-800 rounded-2xl"
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
          onClick={handleSubmit}
          className="p-1 text-xl text-white bg-red-500 hover:bg-red-600 rounded-2xl"
        >
          Find Scholarships
        </button>
      </div>

      {showAlert && (
        <CustomAlert message={alertMessage} onClose={handleCloseAlert} />
      )}

      <div className="flex flex-col items-center justify-center w-full p-3 mt-3 mb-3 bg-white rounded-3xl">
        {scholarships.length > 0 ? (
          <div className="flex flex-wrap justify-center gap-3">
            {scholarships.map((scholar, index) => (
              <ScCart key={index} scholar={scholar} />
            ))}
          </div>
        ) : (
          <p className="mt-4 text-black">
            No scholarships found for the selected criteria.
          </p>
        )}
      </div>
    </div>
  );
}

export default Scholar;
