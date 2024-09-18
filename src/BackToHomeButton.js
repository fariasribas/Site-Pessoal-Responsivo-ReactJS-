import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import "./BacktoHome.css";

const BackToHomeButton = () => {
  return (
    <button
      className="back-to-home-button"
      onClick={() => (window.location.href = "/")}
    >
      <FontAwesomeIcon icon={faArrowLeft} />
    </button>
  );
};

export default BackToHomeButton;
