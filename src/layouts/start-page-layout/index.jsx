import React, { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Loader from "../../ui/loader/loader";

export const StartPageLayout = () => {
  return (
    <div className="flex h-full min-h-[100vh] w-full flex-col items-center justify-center bg-gradient-to-br from-[#FFFFFF] via-blue-200 to-[#FFFFFF] p-7">
      <div className="flex h-full flex-col justify-center space-y-5">
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </div>
    </div>
  );
};
