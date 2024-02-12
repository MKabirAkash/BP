import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
function StudentFilterModal({ filterModalClose }) {
  return (
    <div className="bg-white shadow-5 w-full md:w-[700px] rounded-xl">
      <p className="w-full border-b border-web_clr border-opacity-25 py-3 text-start">
        <span className="pl-3">Filter Option</span>
      </p>
      <section className="p-8 flex flex-wrap gap-x-4 gap-y-3 justify-between w-full text-start">
        <div className="xs:w-full md:w-[48%] ">
          <div className="w-full flex flex-col">
            <label htmlFor="">Course</label>

            <span className="flex placeholder:flex-row justify-between px-3 mt-2 cursor-pointer border border-web_clr border-opacity-25 rounded-xl">
              <span className="block py-3 rounded-xl">Select Option</span>
              <span className="my-auto">
                <FontAwesomeIcon icon={faAngleDown} />
              </span>
            </span>
          </div>
        </div>

        <div className="xs:w-full md:w-[48%] ">
          <div className="w-full flex flex-col">
            <label htmlFor="">Batch</label>

            <span className="flex placeholder:flex-row justify-between px-3 mt-2 cursor-pointer border border-web_clr border-opacity-25 rounded-xl">
              <span className="block py-3 rounded-xl">Select Option</span>
              <span className="my-auto">
                <FontAwesomeIcon icon={faAngleDown} />
              </span>
            </span>
          </div>
        </div>

        <div className="xs:w-full md:w-[48%] ">
          <div className="w-full flex flex-col">
            <label htmlFor="">Gender</label>

            <span className="flex placeholder:flex-row justify-between px-3 mt-2 cursor-pointer border border-web_clr border-opacity-25 rounded-xl">
              <span className="block py-3 rounded-xl">Select Option</span>
              <span className="my-auto">
                <FontAwesomeIcon icon={faAngleDown} />
              </span>
            </span>
          </div>
        </div>

        <div className="xs:w-full md:w-[48%] ">
          <div className="w-full flex flex-col">
            <label htmlFor="">Status</label>

            <span className="flex placeholder:flex-row justify-between px-3 mt-2 cursor-pointer border border-web_clr border-opacity-25 rounded-xl">
              <span className="block py-3 rounded-xl">Select Option</span>
              <span className="my-auto">
                <FontAwesomeIcon icon={faAngleDown} />
              </span>
            </span>
          </div>
        </div>

        <div className="xs:w-full md:w-[48%] ">
          <div className="w-full flex flex-col">
            <label htmlFor="">Institute</label>

            <span className="flex placeholder:flex-row justify-between px-3 mt-2 cursor-pointer border border-web_clr border-opacity-25 rounded-xl">
              <span className="block py-3 rounded-xl">Select Option</span>
              <span className="my-auto">
                <FontAwesomeIcon icon={faAngleDown} />
              </span>
            </span>
          </div>
        </div>

        <div className="xs:w-full md:w-[48%] ">
          <div className="w-full flex flex-col">
            <label htmlFor="">District</label>

            <span className="flex placeholder:flex-row justify-between px-3 mt-2 cursor-pointer border border-web_clr border-opacity-25 rounded-xl">
              <span className="block py-3 rounded-xl">Select Option</span>
              <span className="my-auto">
                <FontAwesomeIcon icon={faAngleDown} />
              </span>
            </span>
          </div>
        </div>

        <div className="xs:w-full md:w-[48%] ">
          <div className="w-full flex flex-col">
            <label htmlFor="">Facebook Group Join</label>

            <span className="flex placeholder:flex-row justify-between px-3 mt-2 cursor-pointer border border-web_clr border-opacity-25 rounded-xl">
              <span className="block py-3 rounded-xl">Select Option</span>
              <span className="my-auto">
                <FontAwesomeIcon icon={faAngleDown} />
              </span>
            </span>
          </div>
        </div>
      </section>
      <div className="flex flex-wrap justify-between md:justify-end gap-x-4 py-5 px-5 md:px-8 shadow-5 rounded-xl cursor-pointer gap-y-2">
        <span
          className="bg-[#FFEDE5] py-3 px-12 rounded-lg text-web_clr hover:bg-hover_clr_light transition"
          onClick={() => {
            filterModalClose();
          }}
        >
          Reset
        </span>
        <span className="bg-web_clr hover:bg-hover_clr_dark transition py-3 px-12 rounded-lg text-white cursor-pointer">
          Apply
        </span>
      </div>
    </div>
  );
}

export default StudentFilterModal;
