import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import {
  faAngleLeft,
  faEdit,
  faMessage,
  faPaperPlane,
  faPlane,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import StudentCourseTable from "../components/student/admin_student/StudentCourseTable";

function SingleStudent() {
  let [showBasic, setShowBasic] = useState(true);
  let [showCourse, setShowCourse] = useState(false);
  let [showActivity, setShowActivity] = useState(false);
  let [showPayment, setShowPayment] = useState(false);
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  return (
    <div className="min-h-screen bg-white font-sans">
      <div className="flex flex-col ">
        <div className="p-4 md:p-8 flex flex-col rounded-lg bg-white my-auto">
          <div className="flex flex-row justify-between  my-auto">
            <span className="text-table_heading text-lg font-medium mr-3 mt-[2px]">
              <span className=" mr-2 cursor-pointer" onClick={goBack}>
                <FontAwesomeIcon icon={faAngleLeft} />{" "}
              </span>
              <span>Student Details</span>
            </span>
          </div>
          <div className="mt-6 rounded-xl flex flex-row  text-web_clr gap-x-3">
            <div
              className={`w-1/4 mx-auto text-sm md:text-base text-center border-b-2  ${
                showBasic ? "border-web_clr" : "border-[#FFF8F5]"
              }`}
              onClick={() => {
                setShowBasic(true);
                setShowActivity(false);
                setShowCourse(false);
                setShowPayment(false);
              }}
            >
              Basic Info
            </div>
            <div
              className={`w-1/4 mx-auto text-sm md:text-base text-center border-b-2  ${
                showCourse ? "border-web_clr" : "border-[#FFF8F5]"
              }`}
              onClick={() => {
                setShowBasic(false);
                setShowActivity(false);
                setShowCourse(true);
                setShowPayment(false);
              }}
            >
              Active Courses
            </div>
            <div
              className={`w-1/4 mx-auto text-sm md:text-base text-center border-b-2  ${
                showPayment ? "border-web_clr" : "border-[#FFF8F5]"
              }`}
              onClick={() => {
                setShowBasic(false);
                setShowActivity(false);
                setShowCourse(false);
                setShowPayment(true);
              }}
            >
              Payments & Device
            </div>
            <div
              className={`w-1/4 mx-auto text-sm md:text-base text-center border-b-2  ${
                showActivity ? "border-web_clr" : "border-[#FFF8F5]"
              }`}
              onClick={() => {
                setShowBasic(false);
                setShowActivity(true);
                setShowCourse(false);
                setShowPayment(false);
              }}
            >
              Activity Log
            </div>
          </div>
        </div>
      </div>


      {showBasic && (
        <>
          <div className="p-4 md:p-8 flex flex-row justify-between rounded-lg bg-gray mt-2 mx-2 md:mx-4 ">
            <div className="flex flex-row gap-x-3">
              <div>
                {" "}
                <img
                  className="h-20 w-20 rounded-full"
                  src="https://cdn-icons-png.flaticon.com/512/3177/3177440.png"
                  alt=""
                />
              </div>
              <div className="my-auto">
                <span className="text-table_heading font-medium text-xl">
                  Tonmoy emon
                </span>
              </div>
            </div>
            <div className="flex flex-row justify-end my-auto pt-3 md:pt-0">
              <span className="py-2.5 px-5 rounded-xl bg-white text-web_clr mr-3">
                <span className="mr-2 hidden md:inline">Send Message</span>
                <span className="">
                  <FontAwesomeIcon icon={faPaperPlane} className="" />
                </span>
              </span>
              <span className="py-2.5 px-4 rounded-xl bg-web_clr text-white ">
                <span className="mr-3 hidden md:inline">Edit</span>
                <span>
                  <FontAwesomeIcon icon={faEdit} />
                </span>
              </span>
            </div>
          </div>
          <div className="p-4 md:p-8 flex flex-col  rounded-lg bg-gray mt-4 mx-2 md:mx-4">
            <span className="flex flex-row justify-start border-b-[1px] border-opacity-25 border-table_low py-4 my-auto">
              <span className="w-1/2 text-text_clr text-[15px]">
                Registation Number
              </span>
              <span className="w-1/2 text-table_heading text-base font-medium">
                ASJSJHGAJSHGJ
              </span>
            </span>
            <span className="flex flex-row justify-start border-b-[1px] border-opacity-25 border-table_low py-4 my-auto">
              <span className="w-1/2 text-text_clr text-[15px]">Phone No:</span>
              <span className="w-1/2 text-table_heading text-base font-medium">
                0176546987
              </span>
            </span>
            <span className="flex flex-row justify-start border-b-[1px] border-opacity-25 border-table_low py-4 my-auto">
              <span className="w-1/2 text-text_clr text-[15px]">Institute</span>
              <span className="w-1/2 text-table_heading text-base font-medium">
                Dhaka College
              </span>
            </span>
            <span className="flex flex-row justify-start border-b-[1px] border-opacity-25 border-table_low py-4 my-auto">
              <span className="w-1/2 text-text_clr text-[15px]">SSC Batch</span>
              <span className="w-1/2 text-table_heading text-base font-medium">
                2024
              </span>
            </span>
            <span className="flex flex-row justify-start border-b-[1px] border-opacity-25 border-table_low py-4 my-auto">
              <span className="w-1/2 text-text_clr text-[15px]">HSC Batch</span>
              <span className="w-1/2 text-table_heading text-base font-medium">
                2026
              </span>
            </span>
            <span className="flex flex-row justify-start border-b-[1px] border-opacity-25 border-table_low py-4 my-auto">
              <span className="w-1/2 text-text_clr text-[15px]">Address</span>
              <span className="w-1/2 text-table_heading text-base font-medium">
                Dhaka , Bangladesh , Asiakjhkjhkhkllk
              </span>
            </span>
            <span className="flex flex-row justify-start border-b-[1px] border-opacity-25 border-table_low py-4 my-auto">
              <span className="w-1/2 text-text_clr text-[15px]">Mail</span>
              <span className="w-1/2 text-table_heading text-base font-medium">
                Test@gmail.com
              </span>
            </span>
            <span className="flex flex-row justify-start border-b-[1px] border-opacity-25 border-table_low py-4 my-auto">
              <span className="w-1/2 text-text_clr text-[15px]">
                Blood Group
              </span>
              <span className="w-1/2 text-table_heading text-base font-medium">
                AB-
              </span>
            </span>
          </div>
        </>
      )}
      {showCourse && (
        
        <div className="bg-white">
          <div className="px-4 md:px-8 flex flex-row justify-between rounded-lg ">
            <span className="text-table_heading text-2xl font-medium my-auto">
              Active Courses
            </span>
            <span className="px-9 py-3 bg-web_clr rounded-xl text-white">
              <span className="mr-3">Add Course</span>

              <span>
                <FontAwesomeIcon icon={faPlus} />
              </span>
            </span>
          </div>
          <div className="p-4 md:p-8 rounded-lg   my-auto">
            <StudentCourseTable  data={[1,2,3,4,5]}/>
          </div>
        </div>
       
   
      )}
      {showPayment && (
        <div className="bg-white">
          <div className="p-4 md:p-8 flex flex-col justify-between rounded-lg  my-auto">
            <span className="text-table_heading text-2xl font-medium my-auto">
              Devices
            </span>
            <div className=" rounded-xl flex flex-col md:flex-row justify-between gap-x-4 ">
              <div className="w-full md:w-1/2 flex flex-col ">
                <label className="py-2">Current Device</label>
                <div className=" rounded-xl border border-input_border">
                  <div className="p-6">akash</div>
                </div>
              </div>
              <div className="w-full md:w-1/2 flex flex-col ">
                <label className="py-2">Another Device</label>
                <div className=" rounded-xl border border-input_border">
                  <div className="p-6">akash</div>
                </div>
              </div>
            </div>
            <div className=" rounded-xl flex flex-row justify-between gap-x-4 mt-4">
              <div className="w-full md:w-1/2 flex flex-col ">
                <label className="py-2">Password</label>
                <div className=" rounded-xl border border-input_border">
                  <div className="py-2 px-6">akash</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default SingleStudent;
