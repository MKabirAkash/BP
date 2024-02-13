import React, { useRef } from "react";
import StudentTable from "../components/student/admin_student/StudentTable";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDown,
  faFax,
  faFileExport,
  faFilter,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import Button from "../components/common/Button";
import { useNavigate } from "react-router-dom";
import StudentSearchFilter from "../components/student/admin_student/StudentSearchFilter";
import { useSelector } from "react-redux";

function StudentList() {
  const navigate = useNavigate();
  const { students } = useSelector((state) => state.studentSlice);
  return (
    <div className="p-4 md:p-8 bg-gray font-sans">
      <div className="flex flex-col">
        <StudentSearchFilter />
        <div className="mt-8 p-4 md:p-8 flex flex-col rounded-lg bg-white my-auto">
          <div className="flex flex-row justify-between">
            <span className="text-table_heading text-lg font-medium my-auto">
              Student List
            </span>
            <div className="flex flex-row justify-end ">
              <button className="mr-4 ">
                <Button icon={faFilter} text="Filter" />
              </button>
              <button className="mr-4">
                <Button icon={faFileExport} text="Export" />
              </button>
              <button className="">
                <Button icon={faFax} text="Print" />
              </button>
            </div>
          </div>
          <div className="mt-3 rounded-xl">
            <StudentTable data={students ? students : null} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudentList;
