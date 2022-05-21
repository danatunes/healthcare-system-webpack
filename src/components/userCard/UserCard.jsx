import clsx from "clsx";
import { UserIcon } from "@heroicons/react/outline";

export const UserCard = ({ userInformation }) => {
  const role = localStorage.getItem("role");
  return (
    <div className="bg-white rounded-xl shadow-md">
      <div className={clsx("flex flex-col items-end", "sm:flex-row")}>
        <UserIcon
          className={clsx(
            "rounded-l-xl h-full w-56 bg-[#C4C4C4] text-white hidden",
            "xl:block"
          )}
        />
        <div className="py-3 px-8 space-y-3 w-full">
          <h4 className="text-xl leading-8">{`${userInformation.user.firstName} ${userInformation.user.lastName}`}</h4>
          <div className={clsx("flex flex-wrap space-y-2")}>
            {role === "DOCTOR" ? (
              <UserInformation
                label="Position"
                information={userInformation.role.name}
              />
            ) : (
              <UserInformation label="IIN" information={userInformation.iin} />
            )}
            <UserInformation
              label="Email"
              information={userInformation.user.email}
            />
            <UserInformation label="Role" information={role} />
            <UserInformation label="Date of Birth" information="22-05-2000" />
            <UserInformation
              label="Phone"
              information={userInformation.user.phoneNumber}
            />
            <UserInformation label="Insurance" information="YES" />
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
