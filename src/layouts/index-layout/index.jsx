import React, { Suspense } from "react";
import { Footer, Header } from "../../components";
import { Outlet, useNavigate } from "react-router-dom";
import clsx from "clsx";
import Loader from "../../ui/loader/loader";
import { useSelector } from "react-redux";
import EmergencyCall from "../../images/emergency-call.png";

export const IndexLayout = () => {
  const navigate = useNavigate();
  const user = useSelector(({ user }) => user.currentUser);
  console.log(user);

  return (
    <div className="h-full flex w-full justify-center min-h-screen bg-[#F8F9FD]">
      <Header />
      <div
        className={clsx(
          "w-full items-center flex pt-32 px-7 flex-col h-full min-h-screen space-y-20",
          "md:w-10/12"
        )}
      >
        <div
          className={clsx(
            "h-full w-full flex flex-1 justify-center items-center",
            "sm:w-10/12"
          )}
        >
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </div>
        <a
          href="tel:123123"
          className="fixed bottom-16 cursor-pointer right-8 mb-2 mr-2 p-5 bg-red-300 rounded-full"
        >
          <img src={EmergencyCall} alt="" className="w-11 h-11" />
        </a>
        <Footer />
      </div>
    </div>
  );
};
