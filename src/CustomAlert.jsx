import React, { useEffect } from "react";
import { AiOutlineWarning } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";

function CustomAlert({ message, onClose }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose(); // Close alert after 5 seconds
    }, 3000);

    // Cleanup the timer if the component is unmounted or if the alert is closed
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div
      className="fixed z-50 flex items-center gap-4 p-5 text-white bg-red-600 rounded-lg shadow-lg top-4"
      style={{ boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)" }}
    >
      <AiOutlineWarning className="text-3xl" />
      <p className="text-lg">{message}</p>
      <button onClick={onClose} className="">
        <RxCross2 className="text-3xl" />
      </button>
    </div>
  );
}

export default CustomAlert;
