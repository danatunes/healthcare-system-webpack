import { Suspense, useState } from "react";
import { PencilAltIcon } from "@heroicons/react/solid";
import { Outlet } from "react-router-dom";
import clsx from "clsx";
import Loader from "../../ui/loader/loader";

export const DoctorLayout = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="w-full h-full flex flex-col space-y-9">
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </div>
      <div className="flex flex-row absolute font-inter right-0 top-64">
        <div
          className="bg-[#C03221] mt-6 h-[45px] p-3 rounded-l"
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          <PencilAltIcon className="w-5 text-white" />
        </div>
        {isOpen && (
          <div className="p-6 visible:transition-all bg-white rounded-l-lg border border-[#C03221] max-w-[610px] space-y-5">
            <h1 className="font-medium text-2xl">Upcoming</h1>
            <UpcomingModalWindow time="45 Minutes" when="19 jan" count={1} />
            <UpcomingModalWindow time="35 Minutes" when="20 jan" count={2} />
            <UpcomingModalWindow time="60 Minutes" when="22 jan" count={3} />
            <UpcomingModalWindow time="50 Minutes" when="20 jan" count={5} />
          </div>
        )}
      </div>
    </>
  );
};

const UpcomingModalWindow = ({ count, when, time }) => {
  return (
    <>
      <div
        className={clsx(
          "flex flex-col items-center space-x-0 space-y-2",
          "sm:flex-row sm:space-x-8 sm:space-y-0"
        )}
      >
        <div className="w-full">
          <h1 className="font-medium text-xl">{count} client</h1>
          <p className="font-normal text-[#8A92A6] text-base">
            Methods of treatment are given
          </p>
        </div>
        <div className="w-full">
          <p className="text-[#C03221] text-base font-normal">{when}</p>
          <p className="font-normal text-[#8A92A6] text-base">{time} Minutes</p>
        </div>
        <div
          className={clsx(
            "flex items-center justify-center border w-full max-h-[40px] border-[#C03221] rounded py-2 px-4",
            "hover:bg-red-100 hover:transition-all",
            "sm:max-w-[50px]"
          )}
        >
          <PencilAltIcon className="w-5 text-[#C03221]" />
        </div>
      </div>
    </>
  );
};
