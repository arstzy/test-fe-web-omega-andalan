import React from "react";
import { FaArrowUp } from "react-icons/fa";

const FloatingButton = () => {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={handleScrollToTop}
      className="hidden md:block fixed bottom-5 right-4 bg-blue-500 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition duration-300"
    >
      <FaArrowUp />
    </button>
  );
};

export default FloatingButton;
