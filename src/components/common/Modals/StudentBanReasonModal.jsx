import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faClose } from "@fortawesome/free-solid-svg-icons";
function StudentBanReasonModal() {
  return (
    <div className="modal_css bg-white shadow-5 md:w-[700px] w-4/5 rounded-xl">
      <p className="w-full border-b border-web_clr border-opacity-25 py-3 flex justify-between px-6">
        <span className="pl-3 inline-block">Why are you ban the student ?</span> <span className="inline-block cursor-pointer"><FontAwesomeIcon icon={faClose}/></span>
      </p>
      <section className="p-8 flex flex-wrap gap-x-4 gap-y-3 justify-between w-full text-start">
            <h2>ekhane lekha boshbe</h2>
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
