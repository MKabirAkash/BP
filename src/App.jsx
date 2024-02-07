import React, { lazy, Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import LoaderSkeleton from "./components/common/LoaderSkeleton";
import Common from "./layouts/Common";

// Lazy imports for the pages/components:
const SmallDeviceLayout = lazy(() => import("./layouts/SmallDeviceLayout"));
const LargeDeviceLayout = lazy(() => import("./layouts/LargeDeviceLayout"));

const App = () => {
  const dispatch = useDispatch();
  const [userRole, setUserRole] = useState("systemadmin");
  return (
    <>
      <Common />
      <Suspense
        fallback={
          <div>
            <LoaderSkeleton />
          </div>
        }
      >
        <BrowserRouter>
          <SmallDeviceLayout user={true} userRole={userRole} />
          <LargeDeviceLayout user={true} userRole={userRole} />
        </BrowserRouter>
      </Suspense>
    </>
  );
};

export default App;
