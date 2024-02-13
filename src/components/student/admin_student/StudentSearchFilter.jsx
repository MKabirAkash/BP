import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faSearch } from "@fortawesome/free-solid-svg-icons";
import DropDown from "../../common/DropDown";
import { useSelector } from "react-redux";
function StudentSearchFilter() {
  let [showDropDown, setShowDropDown] = useState(false);
  const { courses } = useSelector((state) => state.courseSlice);
  return (
    <div className=" rounded-xl flex flex-col sm:flex-row w-full gap-y-8 sm:gap-y-0 sm:gap-x-8 bg-gray">
      <div className="w-full xl:w-1/2 flex flex-col rounded-xl bg-white p-4 md:p-8">
        <span className="text-table_heading text-lg font-medium mb-3 ">
          Search Student
        </span>
        <div className=" w-full flex flex-col lg:flex-row gap-y-3 lg:gap-y-0 lg:gap-x-3 my-auto">
          <div className="w-full flex flex-col lg:flex-row gap-y-3 lg:gap-y-0 lg:gap-x-3">
            <div className=" cursor-pointer w-full lg:w-[30%] py-2.5 flex flex-row justify-between my-auto border border-input_border rounded-lg pl-2.5 pr-2.5">
              <span className="xl:text-base">Search By</span>
              <span>
                <FontAwesomeIcon icon={faAngleDown} />
              </span>
            </div>
            <div className="w-full lg:w-[67%] flex flex-col lg:flex-row  gap-y-3 lg:gap-y-0 lg:gap-x-3">
              <div className="w-full lg:w-[70%] relative">
                <span className="absolute top-0 py-3 pl-4">
                  <FontAwesomeIcon icon={faSearch} className="text-table_low" />
                </span>
                <input
                  className="w-full border border-input_border rounded-xl py-2.5 pl-11  "
                  type="text"
                  placeholder="Search"
                />
              </div>
              <div
                className="w-full lg:w-[30%] mt-2.5 cursor-pointer"
                onClick={() => {
                  navigate("/students/single");
                }}
              >
                <span className=" rounded-xl px-6 py-4 text-white border bg-web_clr border-web_clr hover:border-web_clr hover:text-web_clr hover:bg-white block lg:inline text-center">
                  Search
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full xl:w-1/2 flex flex-col rounded-xl bg-white p-4 md:p-8 relative max-h-[150px] cursor-pointer">
        <span className="text-table_heading text-lg font-medium mb-3 ">
          View By Course
        </span>
        <div
          className="w-full  py-2.5 flex flex-row justify-between sm:my-auto  border border-input_border rounded-lg pl-4 pr-2.5"
          onClick={() => {
            setShowDropDown(!showDropDown);
          }}
        >
          <span>View All Student</span>
          <span>
            <FontAwesomeIcon icon={faAngleDown} />
          </span>
        </div>
        {showDropDown && (
          <div className="mt-[88px] px-4 md:px-8 w-full absolute left-0 top-4 sm:top-8">
            <DropDown options={courses ? courses : null} />
          </div>
        )}
      </div>
    </div>
  );
}

export default StudentSearchFilter;
