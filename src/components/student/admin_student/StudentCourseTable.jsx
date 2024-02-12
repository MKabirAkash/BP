import React from "react";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { resetEndIndex, resetStartIndex } from "../../../redux/common/template";
import Pagination from "../../common/Pagination";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowsRotate,
  faCopy,
  faTrash,
  faTrashRestoreAlt,
} from "@fortawesome/free-solid-svg-icons";
const headers = [
  { name: "Course Name", styles: "min-w-[150px] pl-3" },
  { name: "Promo Code", styles: "min-w-[150px]" },
  { name: "Date", styles: "min-w-[150px]" },
  { name: "Facebook ID", styles: "min-w-[150px]" },
  { name: "Action", styles: "min-w-[200px] text-center" },
];

const StudentCourseTable = ({ data }) => {
  const [total, setTotal] = useState(0);
  const dispatch = useDispatch();

  const { startIndex, endIndex } = useSelector((state) => state.template);
  useEffect(() => {
    if (data && data.length) {
      setTotal(data.length);
    }
  }, [data?.length]);
  useEffect(() => {
    dispatch(resetStartIndex());
    dispatch(resetEndIndex());
  }, []);
  return (
    <section className="">
      <div className=" mx-auto">
        <div className="mx-1 flex flex-wrap">
          <div className="w-full ">
            <div className="w-full overflow-x-auto border-none">
              <table className="w-full table-auto bg-white rounded-xl">
                <TableHead headers={headers} />

                <TableBody data={data} />
              </table>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-1">
        <div className="flex w-full my-2 bg-white py-2 border-none">
          <div className="w-1/2 ">
            <div className="justify-start sm:flex pl-6"></div>
            <p className="text-sm text-gray_800">
              Showing{" "}
              <strong>
                {startIndex && startIndex !== 0 ? startIndex + 1 : 1}
              </strong>{" "}
              to{" "}
              <strong>
                {endIndex && endIndex <= total ? endIndex : total}
              </strong>{" "}
              of <strong>{data ? data.length : 0}</strong> results
            </p>
          </div>
          <div className="w-1/2 flex justify-end items-end mr-2 -mt-4">
            <Pagination total={total} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudentCourseTable;

const TableHead = ({ headers }) => {
  return (
    <thead className="bg-[#F2F2F1] border border-[#F2F2F1]  rounded-[16px]">
      <tr className=" text-left  ">
        {headers.map((header, index) => (
          <th
            className={` py-3  md:py-4 text-xs md:text-base   font-medium font-sans  text-profile_name  ${header.styles}`}
            key={index}
          >
            {header.name}
          </th>
        ))}
      </tr>
    </thead>
  );
};

const TableBody = ({ data }) => {
  const { startIndex, endIndex } = useSelector((state) => state.template);
  return (
    <tbody className="font-sans rounded-xl">
      {/* {(data && data.length <= 0) || (!data && <LoaderSkeleton />)} */}
      {data &&
        data
          .slice(startIndex ? startIndex : 0, endIndex ? endIndex : 10)
          .map((row, index) => (
            <tr
              key={index}
              className=" rounded-md border-b border-profile_tag border-opacity-20"
            >
              <td className="py-4 pl-4 pr-4">
                <span className="min-w-max flex">
                  <span>
                    {" "}
                    <img
                      src="https://www.shutterstock.com/image-photo/elearning-education-internet-lessons-online-600nw-2158034833.jpg"
                      className="w-32 h-16 rounded-xl"
                    />
                  </span>
                  <span className="my-auto pl-4 flex flex-col ">
                    <span>this is a testcourse2635236 of</span>
                    <span>powerplay season 1</span>
                  </span>
                </span>
              </td>
              <td className="py-4">
                <p className="text-text_clr md:text-sm sm:text-xs xs:text-xs">
                  AFGWER80
                </p>
              </td>

              <td className="py-2">
                <h5 className="text-text_clr md:text-sm sm:text-xs xs:text-xs ">
                  AFGWER80
                </h5>
              </td>

              <td className="py-2">
                <h5 className="text-text_clr md:text-sm sm:text-xs xs:text-xs flex gap-x-2">
                  <span className="my-auto underline cursor-pointer text-[#0092ff]">
                    Tonmoy Hasan
                  </span>
                  <span>
                    <FontAwesomeIcon
                      icon={faCopy}
                      className="text-white bg-[#0092ff] py-1 px-1.5 rounded"
                    />
                  </span>
                </h5>
              </td>

              <td className="py-2">
                <h5 className="text-table_low md:text-sm sm:text-xs xs:text-xs flex justify-center gap-x-4">
                  <span className="text-[#23ab58] bg-[#e0ffe1] px-4 py-2 rounded-xl flex cursor-pointer">
                    Active
                  </span>
                  <span className="text-[#EA2725] bg-[#fde9e9] px-4 py-2 rounded-xl flex my-auto gap-x-2 cursor-pointer">
                    <span className="hidden md:inline">Remove</span>{" "}
                    <FontAwesomeIcon icon={faTrash} className="pt-0.5" />
                  </span>
                  <span className="text-[#0092ff] bg-[#e0f2ff] px-4 py-2 rounded-xl flex gap-x-2 cursor-pointer">
                    <span className="hidden md:inline">Exchange</span>{" "}
                    <FontAwesomeIcon icon={faArrowsRotate} className="pt-0.5" />
                  </span>
                </h5>
              </td>
            </tr>
          ))}
    </tbody>
  );
};
