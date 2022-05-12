import React, { Suspense } from "react";
import { Footer, Header } from "../../components";
import { Outlet } from "react-router-dom";
import clsx from "clsx";
import Loader from "../../ui/loader/loader";

export const IndexLayout = () => {
  return (
    <div className="h-full w-full min-h-screen pt-7 px-7 bg-[#F8F9FD]">
      <div
        className={clsx(
          "w-full flex flex-col h-full min-h-screen mx-auto space-y-20",
          "md:w-10/12"
        )}
      >
        <Header />
        <div
          className={clsx(
            "mx-auto h-full w-full flex flex-1 justify-center",
            "sm:w-10/12"
          )}
        >
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </div>
        <Footer />
      </div>
    </div>
  );
};
