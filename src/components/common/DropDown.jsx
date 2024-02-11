import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function DropDown({ data, options }) {
  return (
    <div className="w-full shadow-1 h-full rounded-lg p-6 bg-white">
      <div className="w-full ">
        <span className="py-3 pl-4 absolute">
          <FontAwesomeIcon icon={faSearch} className="text-table_low" />
        </span>
        <input
          className="w-full border border-input_border rounded-xl py-2.5 pl-11  "
          type="text"
          placeholder="Search"
        />
      </div>
      {options &&
        options.map(() => (
          <p className="border-b p-3 border-gray text-table_heading text-base hover:bg-btn_bg2">
            HSC Powerplay 2024
          </p>
        ))}
    </div>
  );
}

export default DropDown;
