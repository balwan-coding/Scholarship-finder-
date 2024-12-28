import React from "react";

function ScCart({ scholar }) {
  return (
    <div className="flex flex-col items-start justify-start p-4 bg-gray-200 rounded-lg">
      <h1 className="text-xl font-bold text-blue-600">{scholar.Name}</h1>
      <p className="text-gray-700">{scholar.Benefits}</p>
      <p className="text-gray-700">Gender: {scholar.Gender}</p>
      <p className="text-gray-700">Caste: {scholar.Cast}</p>
      <p className="text-gray-700">Education Level: {scholar.EducationLevel}</p>
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
