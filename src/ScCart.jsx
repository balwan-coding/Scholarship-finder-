import React from "react";
import "./styles.css";

function ScCart({ scholar }) {
  return (
    <div className="flex flex-col items-start justify-start p-4 bg-gray-200 rounded-lg max-w-96 fade-in">
      <h1 className="text-xl font-bold text-blue-600">{scholar.Name}</h1>
      <p className="text-gray-700">{scholar.Benefits}</p>
      <p className="text-gray-700">Gender: {scholar.Gender}</p>
      <p className="text-gray-700">Caste: {scholar.Cast}</p>
      <p className="text-gray-700">Education Level: {scholar.EducationLevel}</p>
      <p className="font-bold text-center">Documents</p>
      <div className="flex flex-wrap gap-1 m-1">
        <span className="font-semibold text-gray-800">
          Educational Certificate (Marksheet),
        </span>
        <span className="font-semibold text-gray-800">Income Certificate,</span>
        <span className="font-semibold text-gray-800">Caste Certificate,</span>
        <span className="font-semibold text-gray-800">
          Domicile Certificate,
        </span>
        <span className="font-semibold text-gray-800">
          Domicile Certificate,
        </span>
        <span className="font-semibold text-gray-800">Address Proof,</span>
        <span className="font-semibold text-gray-800">Birth Certificate,</span>
        <span className="font-semibold text-gray-800">
          Identity Proof (Aadhar Card / Voter ID / Driving License),
        </span>
        <span className="font-semibold text-gray-800">
          Passport (for studying abroad),
        </span>
      </div>
      <a
        className="text-blue-500 hover:text-red-600 animate-bounce"
        href={scholar.link || "#"}
        target="_blank"
      >
        Visit Website
      </a>
    </div>
  );
}

export default ScCart;
