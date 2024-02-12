import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDown,
  faCalendar,
  faGraduationCap,
  faTrophy,
} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import ExportStudentTable from "../components/student/admin_student/ExportStudentTable";

function ExportStudent() {
  return (
    <div className="p-4 md:p-8 bg-gray font-sans">
      <div className="flex flex-col">
        <div className="mb-8 rounded-xl flex flex-col md:flex-row w-full gap-y-8 md:gap-y-0 md:gap-x-8">
          <div className="w-full lg:w-4/6 flex flex-col rounded-xl bg-white p-4 md:p-8">
            <span className="text-table_heading text-lg font-medium mb-3 ">
              Export Student
            </span>
            <div className="flex flex-col">
              <div className=" w-full flex flex-col lg:flex-row gap-y-3 lg:gap-y-0 lg:gap-x-4 my-auto">
                <div className="w-full lg:w-[40%] flex flex-col ">
                  <label className="text-table_heading text-sm font-medium pb-1">
                    From Date
                  </label>
                  <div className="cursor-pointer w-full border px-3 py-2.5 border-input_border rounded-lg flex flex-row justify-between my-auto">
                    <span>11-04-2024</span>
                    <span className="text-[#B2B0AD]">
                      <FontAwesomeIcon icon={faCalendar} />
                    </span>
                  </div>
                </div>
                <div className="w-full lg:w-[40%]  flex flex-col ">
                  <label className="text-table_heading text-sm font-medium  pb-1">
                    To Date
                  </label>
                  <div className="cursor-pointer w-full border px-3 py-2.5 border-input_border rounded-lg flex flex-row justify-between my-auto">
                    <span>11-04-2025</span>
                    <span className="text-[#B2B0AD]">
                      <FontAwesomeIcon icon={faCalendar} />
                    </span>
                  </div>
                </div>
                <div className="w-full lg:w-[20%]  flex flex-col mt-0 lg:mt-6 ">
                  <div className="w-full lg:w-[30%] mt-2.5">
                    <span className=" cursor-pointer rounded-xl px-8 py-4 text-white border bg-web_clr border-web_clr  hover:text-web_clr hover:bg-white block lg:inline text-center">
                      Export
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-2/6 flex flex-col rounded-xl bg-white md:bg-gradient-to-br from-web_clr to-linear p-4 md:p-8">
            <div className="flex flex-row  my-auto mx-auto  text-web_clr md:text-white">
              <span className="mr-2 my-auto">
                <FontAwesomeIcon icon={faGraduationCap} className="h-20 w-20" />
              </span>
              <span className="flex flex-col justify-between ml-4 md:ml-2">
                <span className="min-w-max text-lg">Today's Enrollment </span>
                <span className="text-[44px]">3892</span>
              </span>
            </div>
          </div>
        </div>
        <div className="p-4 md:p-8 flex flex-col rounded-xl bg-white my-auto">
          <div className="flex flex-row justify-between">
            <span className="text-text_clr text-lg">
              Date:{"  "}
              <span className="text-table_heading text-lg font-medium my-auto">
                11/06/2023 - 1/02/2024
              </span>
            </span>
          </div>

          <div className="mt-3 rounded-xl">
            {" "}
            <ExportStudentTable data={[1, 2, 3, 4, 5, 6]} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExportStudent;
