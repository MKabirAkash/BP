import React from "react";
import AppRoutes from "../routes/AppRoutes";
import Manu from "../components/common/Manu";
import Navbar from "../components/common/Navabar";

const LargeDeviceLayout = ({ user, userRole }) => {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-12 b">
      {user && userRole && userRole==="client" && (
        <div className="col-span-full xl:col-span-2 bg-primary hidden xl:inline ">
          <Manu user={true} userRole="systemadmin" />
        </div>
      )}
       
      <div
        className={`col-span-full ${
          user && userRole && userRole ==="client" ? " xl:col-span-10" : " xl:col-span-full"
        }`}
      >
      {user && userRole && userRole==="client" && (
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
