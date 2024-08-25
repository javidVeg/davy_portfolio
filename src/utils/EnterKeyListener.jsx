import React, { useEffect } from "react";

const EnterKeyListener = ({ onEnter }) => {
  useEffect(() => {

    const handleKeyDown = (event) => {
      if (event.key === "Enter") {
        window.open(import.meta.env.VITE_REACT_APP_RESUME_URL, "_blank");
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []); 

  return null; 
};

export default EnterKeyListener;