import React from "react";
import AppRoutes from "../routes/AppRoutes";
import Manu from "../components/common/Manu";
import Navbar from "../components/common/Navabar";

const LargeDeviceLayout = ({ user, userRole }) => {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-11 bg-gray">
      {user && userRole && userRole === "systemadmin" && (
        <div className="col-span-full xl:col-span-2  hidden xl:inline ">
          <Manu user={true} userRole="systemadmin" />
        </div>
      )}

      <div
        className={`col-span-full ${
          user && userRole && userRole === "systemadmin"
            ? " xl:col-span-9"
            : " xl:col-span-full"
        }`}
      >
        {user && userRole && userRole === "systemadmin" && (
          <div className="hidden xl:inline">
            {" "}
            <Navbar user={true} userRole="systemadmin" />
          </div>
        )}
        <AppRoutes user={true} userRole="systemadmin" />
      </div>
    </div>
  );
};

export default LargeDeviceLayout;
