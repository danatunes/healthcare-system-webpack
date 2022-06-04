import clsx from "clsx";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { getAllClinics } from "../../../../redux/actions/clinic";
import { useDispatch } from "react-redux";

export const Admin = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllClinics());
  }, []);

  return (
    <div className="w-full">
      <div
        className={clsx(
          "w-full grid grid-cols-1 gap-y-2",
          "sm:grid-cols-2 sm:gap-x-5"
        )}
      >
        <Link
          to="clinic-admins"
          className={clsx(
            "border-0 flex items-center justify-center font-normal py-20 text-xl transition duration-300 px-5 shadow-lg rounded-xl",
            "md:px-20",
            "sm:px-10",
            "hover:scale-105"
          )}
        >
          Add clinic
        </Link>
        <Link
          to="clinics"
          className={clsx(
            "border-0 py-20 flex items-center justify-center px-5 text-xl transition duration-300 text-white font-normal bg-[#3A57E8] shadow-lg rounded-xl",
            "md:px-20",
            "sm:px-5",
            "hover:scale-105"
          )}
        >
          Add admin clinic
        </Link>
        <Link
          to="specializations"
          className={clsx(
            "border-0 py-20 flex items-center justify-center px-5 text-xl transition duration-300 text-white font-normal bg-[#3A57E8] shadow-lg rounded-xl",
            "md:px-20",
            "sm:px-5",
            "hover:scale-105"
          )}
        >
          Add specializations
        </Link>
        <p
          className={clsx(
            "border-0 flex cursor-pointer items-center justify-center font-normal py-20 text-xl transition duration-300 px-5 shadow-lg rounded-xl",
            "md:px-20",
            "sm:px-10",
            "hover:scale-105"
          )}
        >
          Soon...
        </p>
      </div>
    </div>
  );
};
