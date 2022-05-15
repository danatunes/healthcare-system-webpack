import { ClinicCard, List } from "../../../components";
import { Suspense, useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import clsx from "clsx";
import Loader from "../../../ui/loader/loader";

export const ChosenClinic = () => {
  const [hospital, setHospital] = useState(null);
  const [doctors, setDoctors] = useState(null);

  return (
    <div className="space-y-7">
      <ClinicCard {...hospital} />
      <List
        className="p-2.5 max-h-[400px]"
        header={
          <div className="w-full flex flex-row">
            <NavLink
              to=""
              end
              className={({ isActive }) =>
                clsx(
                  "w-1/2 flex justify-center font-medium text-lg focus:text-[#3A57E8]",
                  isActive && "text-[#3A57E8]"
                )
              }
            >
              Doctors
            </NavLink>
            <NavLink
              to="feedback"
              className={({ isActive }) =>
                clsx(
                  "w-1/2 flex justify-center font-medium text-lg focus:text-[#3A57E8]",
                  isActive && "text-[#3A57E8]"
                )
              }
            >
              Feedback
            </NavLink>
          </div>
        }
      >
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </List>
    </div>
  );
};
