import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { resetEndIndex, resetStartIndex } from "../../../redux/common/template";
import Pagination from "../../common/Pagination";
import Button from "../../common/Button";
import { faFileExport } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const headers = [
  { name: "Course Name", styles: "min-w-[200px] pl-3" },
  { name: "Total Submitted", styles: "min-w-[150px]" },
  { name: "Action", styles: "min-w-[60px] justify-end text-center" },
];

const ExportStudentTable = ({ data }) => {
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

export default ExportStudentTable;

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
              <td className=" py-2 pl-4">
                <div className="min-w-max">
                  <h5 className="text-profile_name font-normal lg:text-base sm:text-sm xs:text-sm ">
                    Tonmoy vaiya
                  </h5>
                </div>
              </td>
              <td className=" py-4 ">
                <p className="text-text_clr md:text-base sm:text-xs xs:text-xs">
                  Thakurgaon Govt College
                </p>
              </td>
              <td className=" py-4 flex justify-center ">
                <span className="py-2 px-[18px] my-auto flex flex-row rounded-xl bg-btn_bg2 text-web_clr text-base ">
                  <span className="mt-[1px]">
                    <FontAwesomeIcon icon={faFileExport} />
                  </span>
                  <span className="ml-2">Export</span>
                </span>
              </td>
            </tr>
          ))}
    </tbody>
  );
};
