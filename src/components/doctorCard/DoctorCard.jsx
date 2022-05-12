import clsx from "clsx";
import { StarIcon, UserIcon } from "@heroicons/react/outline";

export const DoctorCard = ({ name, specialist, experience, rating }) => {
  return (
    <div className="bg-white mb-3 rounded-xl shadow-md">
      <div
        className={clsx(
          "flex flex-col items-end",
          "sm:flex-row"
        )}
      >
        <UserIcon
          className={clsx(
            "rounded-l-xl h-full w-44 bg-[#C4C4C4] text-white hidden",
            "xl:block"
          )}
        />
        <div className="py-3 px-8 flex flex-col justify-between w-full">
          <h4 className="text-xl leading-8">{name}</h4>
          <p className="text-sm font-normal text-gray-500">{specialist}</p>
          <p className="text-sm font-normal text-gray-500">{experience}</p>
          <div className="flex justify-end items-center flex-row space-x-1.5">
            <StarIcon className="text-[#3A57E8] w-5" />
            <p>{rating}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
