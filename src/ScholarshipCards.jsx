import React from "react";
import ScCart from "./ScCart";

function ScholarshipCards({ scholarships }) {
  return (
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
  );
}

export default ScholarshipCards;
