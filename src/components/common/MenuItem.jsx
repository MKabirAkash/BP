import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";

function MenuItem({ item }) {
  const [showSub, setShowSub] = useState(false);
  return (
    <div>
      <div key={item.name}>
        <div className="relative flex flex-row  border-transparent  px-2   text-base xl:text-sm font-medium text-table_low duration-200 hover:text-white font-sans">
          <div className="w-full flex flex-row justify-between my-auto py-2 ">
            <Link to={item.to}>
              <span className=" flex flex-row ">
                <FontAwesomeIcon
                  size="lg"
                  className=" w-7 h-5 size-2xl  dark:bg-gray__900 rounded-xl pt-0.5"
                  icon={item.icon}
                />
                <span className=" min-w-max  font-medium pl-3 pt-1">
                  {item.name}
                </span>
              </span>
            </Link>
            {item && item.subItem && (
              <span
                className="flex cursor-pointer mt-1.5 w-full justify-end min-w-max  font-medium  pl-3 "
                onClick={() => {
                  setShowSub(!showSub);
                }}
              >
                <FontAwesomeIcon
                  icon={showSub ? faAngleUp : faAngleDown}
                  size="lg"
                  className=" w-7 h-5 size-2xl  dark:bg-gray__900 rounded-xl "
                />
              </span>
            )}
          </div>
        </div>

        {showSub &&
          item.subItem &&
          item.subItem.map((subItem, index) => (
            <Link
              to={subItem.to}
              key={index}
              className="pl-[40px] py-1.5 relative flex flex-row  border-transparent  text-base xl:text-sm  font-medium text-table_low duration-200   hover:text-white  "
            >
              <span className=" min-w-max   font-medium pl-3 ">
                {subItem.name}
              </span>
            </Link>
          ))}
      </div>
    </div>
  );
}

export default MenuItem;
