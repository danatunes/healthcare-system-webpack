import { Suspense } from "react";
import { List, UserCard } from "../../../../components";
import { NavLink, Outlet } from "react-router-dom";
import clsx from "clsx";
import Loader from "../../../../ui/loader/loader";

export const DoctorProfileForPatient = () => {
  return (
    <div className="space-y-4 max-w-4xl">
      <UserCard />
      <List
        className="shadow-md h-fit max-h-[450px]"
        header={
          <div className="w-full flex flex-row justify-between">
            <NavLink
              to=""
              end
              className={({ isActive }) =>
                clsx(
                  "font-medium text-lg focus:text-[#3A57E8]",
                  isActive && "text-[#3A57E8]"
                )
              }
            >
              About Me
            </NavLink>
            <NavLink
              to="feedback"
              className={({ isActive }) =>
                clsx(
                  "font-medium text-lg focus:text-[#3A57E8]",
                  isActive && "text-[#3A57E8]"
                )
              }
            >
              Feedback
            </NavLink>
            <NavLink
              to="calendar"
              className={({ isActive }) =>
                clsx(
                  "font-medium text-lg focus:text-[#3A57E8]",
                  isActive && "text-[#3A57E8]"
                )
              }
            >
              Calendar
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
