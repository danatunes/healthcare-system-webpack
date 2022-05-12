import clsx from "clsx";
import { UserIcon } from "@heroicons/react/outline";

export const UserCard = () => {
  const userInformation = {
    id: 1,
    name: "Vin Diesel",
    iin: "020402551145",
    city: "Nur - Sultan",
    gender: "Male",
    dateOfBirthDay: "02.04.02",
    phone: "+7-708-310-04-02",
    insurance: "Med Right",
  };

  return (
    <div className="bg-white rounded-xl shadow-md">
      <div
        className={clsx(
          "flex flex-col items-end",
          "sm:flex-row"
        )}
      >
        <UserIcon
          className={clsx(
            "rounded-l-xl h-full w-56 bg-[#C4C4C4] text-white hidden",
            "xl:block"
          )}
        />
        <div className="py-3 px-8 space-y-3 w-full">
          <h4 className="text-xl leading-8">{userInformation.name}</h4>
          <div className={clsx("flex flex-wrap space-y-2")}>
            <UserInformation label="IIN" information={userInformation.iin} />
            <UserInformation label="City" information={userInformation.city} />
            <UserInformation
              label="Gender"
              information={userInformation.gender}
            />
            <UserInformation
              label="Date of Birth"
              information={userInformation.dateOfBirthDay}
            />
            <UserInformation
              label="Phone"
              information={userInformation.phone}
            />
            <UserInformation
              label="Insurance"
              information={userInformation.insurance}
            />
          </div>
        </div>
        <a href="#" className="text-[#3A57E8] text-sm mb-2 mr-2">
          Edit
        </a>
      </div>
    </div>
  );
};

const UserInformation = ({ label, information }) => {
  return (
    <div
      className={clsx(
        "w-full flex flex-row justify-between flex-grow",
        "sm:w-1/3 sm:flex-col"
      )}
    >
      <p className={clsx("text-sm text-gray-400 mr-2", "sm:mr-0")}>{label}</p>
      <p className="text-md font-bold">{information}</p>
    </div>
  );
};
