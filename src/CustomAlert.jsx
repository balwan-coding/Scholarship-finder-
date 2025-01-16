// CustomAlert.js
import React from "react";

function CustomAlert({ message, onClose }) {
  return (
    <div
      className="fixed top-0 z-50 p-5 text-white transform -translate-x-1/2 bg-red-600 rounded-lg shadow-lg left-1/2"
      style={{ boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)" }}
    >
      <p className="text-lg">{message}</p>
      <button
        onClick={onClose}
        className="px-4 py-2 mt-3 text-black bg-white rounded-lg shadow-md hover:bg-gray-200"
      >
        Close
      </button>
    </div>
  );
}

export default CustomAlert;
