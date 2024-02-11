import { faSave } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function Button({ icon, text }) {
  return (
    <span className="px-5 py-3 text-base rounded-xl my-auto border border-white hover:border-web_clr hover:bg-white bg-btn_bg2 text-web_clr flex flex-row justify-between">
      <span className="mt-0.5 mr-0 sm:mr-3">
        <FontAwesomeIcon icon={icon ? icon : faSave} />
      </span>
      <span className="hidden sm:inline text-lg font-medium">
        {text ? text : "not set"}
      </span>
    </span>
  );
}

export default Button;
