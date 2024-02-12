import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
function StudentBanReasonModal() {
  return (
    <div className="modal_css bg-white shadow-5 md:w-[700px] w-4/5 rounded-xl">
      <p className="w-full border-b border-web_clr border-opacity-25 py-3 text-center">
        <span className="pl-3">Why are you ban the student ?</span>
      </p>
      <section className="p-8 flex flex-wrap gap-x-4 gap-y-3 justify-between w-full text-start">
        <div className="w-full">
          <div className="w-full flex flex-col">
            <label htmlFor="" >Course</label>

            <span className="flex placeholder:flex-row justify-between px-3 mt-2 cursor-pointer border border-web_clr border-opacity-25 rounded-xl">
              <span className="block py-3 rounded-xl">Select Option</span>
              <span className="my-auto">
                <FontAwesomeIcon icon={faAngleDown} />
              </span>
            </span>
          </div>
        </div>

        <div className="w-full">
          <div className="w-full flex flex-col">
            <label htmlFor="" >Short Description</label>
            <textarea name="" id="" cols="50" rows="10" className="border border-web_clr border-opacity-25 rounded-xl w-full mt-2"></textarea>
          </div>
        </div>
      </section>

      <div className="flex flex-wrap justify-end gap-x-4 py-5 px-8 shadow-5 rounded-xl cursor-pointer gap-y-2">
        <span className="bg-[#FFEDE5] py-3 px-12 rounded-lg text-web_clr hover:bg-hover_clr_light transition">
          Reset
        </span>
        <span className="bg-web_clr hover:bg-hover_clr_dark transition py-3 px-12 rounded-lg text-white cursor-pointer">
          Apply
        </span>
      </div>
    </div>
  );
}

export default StudentBanReasonModal;
