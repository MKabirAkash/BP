import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faSearch } from "@fortawesome/free-solid-svg-icons";
function StudentSearchFilter() {
  return (
    <div className="mb-8 rounded-xl flex flex-col sm:flex-row w-full gap-y-8 sm:gap-y-0 sm:gap-x-8">
      <div className="w-full xl:w-1/2 flex flex-col rounded-xl bg-white p-4 md:p-8">
        <span className="text-table_heading text-lg font-medium mb-3 ">
          Search Student
        </span>
        <div className=" w-full flex flex-col lg:flex-row gap-y-3 lg:gap-y-0 lg:gap-x-3 my-auto">
          <div className="w-full flex flex-col lg:flex-row gap-y-3 lg:gap-y-0 lg:gap-x-3">
            <div className="w-full lg:w-[33%] py-2.5 flex flex-row justify-between my-auto border border-input_border rounded-lg pl-4 pr-2.5">
              <span className="xl:text-base">Search By</span>
              <span>
                <FontAwesomeIcon icon={faAngleDown} />
              </span>
            </div>
            <div className="w-full lg:w-[67%] flex flex-col lg:flex-row  gap-y-3 lg:gap-y-0 lg:gap-x-3">
              <div className="w-full ">
                <span className="fixed py-3 pl-4">
                  <FontAwesomeIcon icon={faSearch} className="text-table_low" />
                </span>
                <input
                  className="w-full border border-input_border rounded-xl py-2.5 pl-11  "
                  type="text"
                  placeholder="Search"
                />
              </div>
              {/* <div
                className="w-full lg:w-[30%] mt-2.5 cursor-pointer"
                onClick={() => {
                  navigate("/students/single");
                }}
              >
                <span className="bg-web_clr rounded-xl px-8 py-4 text-white block lg:inline text-center">
                  Search
                </span>
              </div> */}
            </div>
          </div>
        </div>
      </div>
      <div className="w-full xl:w-1/2 flex flex-col rounded-xl bg-white p-4 md:p-8 ">
        <span className="text-table_heading text-lg font-medium mb-3 sm:-mb-12 lg:mb-3">
          View By Course
        </span>
        <div className="w-full  py-2.5 flex flex-row justify-between sm:my-auto  border border-input_border rounded-lg pl-4 pr-2.5">
          <span>View All Student</span>
          <span>
            <FontAwesomeIcon icon={faAngleDown} />
          </span>
        </div>
      </div>
    </div>
  );
}

export default StudentSearchFilter;
