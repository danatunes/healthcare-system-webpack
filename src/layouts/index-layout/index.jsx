import React, { Suspense } from "react";
import { Footer, Header } from "../../components";
import { Outlet, useNavigate } from "react-router-dom";
import clsx from "clsx";
import Loader from "../../ui/loader/loader";
import { useSelector } from "react-redux";

export const IndexLayout = () => {
  const navigate = useNavigate();
  const user = useSelector(({ user }) => user.currentUser);
  console.log(user);
  //
  // useEffect(() => {
  //   const token = localStorage.getItem("token");
  //   console.log(token);
  //   if (!token) {
  //     navigate("/login");
  //   }
  // }, [user]);
  return (
    <div className="h-full w-full min-h-screen bg-[#F8F9FD]">
      <Header />
      <div
        className={clsx(
          "w-full flex pt-32 px-7 flex-col h-full min-h-screen mx-auto space-y-20",
          "md:w-10/12"
        )}
      >
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
