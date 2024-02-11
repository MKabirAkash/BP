import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { resetEndIndex, resetStartIndex } from "../../../redux/common/template";
import Pagination from "../../common/Pagination";

const headers = [
  { name: "Name", styles: "min-w-[150px] pl-3" },
  { name: "Institute Name", styles: "min-w-[250px]" },
  { name: "Registration No.", styles: "min-w-[200px]" },
  { name: "Phone No.", styles: "min-w-[150px]" },
  { name: "Status", styles: "min-w-[40px] text-center" },
  { name: "Group Join", styles: "min-w-[210px] text-center" },
  { name: "Action", styles: "min-w-[60px]" },
];

const StudentTable = ({ data }) => {
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

export default StudentTable;

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
                <p className="text-table_low md:text-base sm:text-xs xs:text-xs">
                  Thakurgaon Govt College
                </p>
              </td>

              <td className=" py-2">
                <h5 className="text-table_low md:text-sm sm:text-xs xs:text-xs ">
                  MATH8728278
                </h5>
              </td>

              <td className=" py-2 ">
                <p className="text-profile_name md:text-sm sm:text-xs xs:text-xs text-left">
                  01876542422
                </p>
              </td>
              <td className=" py-2  ">
                <h5
                  className={`text-center ${
                    index % 2 === 0 ? "text-success" : "text-danger"
                  }  md:text-sm sm:text-xs xs:text-xs`}
                >
                  {index % 2 === 0 ? "Active" : "Banned"}
                </h5>
              </td>

              <td className=" py-2  ">
                <p
                  className={`text-center ${
                    index % 2 === 0 ? "text-success" : "text-danger"
                  }  md:text-sm sm:text-xs xs:text-xs`}
                >
                  {index % 2 === 0 ? "Joined" : "Not Yet"}
                </p>
              </td>
              <td className=" py-2  ">
                <span className="text-web_clr font-medium text-sm bg-btn_bg2 p-4 rounded-xl ">
                  View
                </span>
              </td>
            </tr>
          ))}
    </tbody>
  );
};
