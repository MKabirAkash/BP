import React from "react";
import Navbar from "../components/common/Navabar";

const SmallDeviceLayout = ({ user }) => {
  return (
    <div className="bg-gray xl:hidden">
      {user && (
        <div className="col-span-full xl:col-span-2 ">
          <Navbar user={true} userRole="systemadmin" />
        </div>
      )}
    </div>
  );
};

export default SmallDeviceLayout;
