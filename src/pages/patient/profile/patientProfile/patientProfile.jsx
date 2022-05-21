import {
  HeadingProfile,
  LastNotificationList,
  List,
  UserCard,
} from "../../../../components";
import { DownloadIcon } from "@heroicons/react/outline";
import clsx from "clsx";
import { useSelector } from "react-redux";

export const PatientProfile = () => {
  const user = useSelector(({ user }) => user.me);

  return (
    <div className="w-full space-y-9">
      <HeadingProfile
        name={`${user.user.fatherName} ${user.user.firstName} ${user.user.lastName} !`}
      />
      <>
        <UserCard userInformation={user} />
        <List
          styleList="rounded-xl"
          header={<h4 className="text-xl font-medium">Documents</h4>}
        >
          <table className="[border-spacing:0 0.75rem] border-collapse w-full table-auto bg-[#F8F9FD] rounded-t-xl">
            <thead>
              <tr className="text-left text-gray-400 text-sm">
                <th className="py-4 font-normal px-10">Data</th>
                <th className="py-4 font-normal px-10">Symptoms</th>
                <th className="py-4 font-normal px-10">Specialist</th>
                <th className="py-4 font-normal px-10 text-center">Download</th>
              </tr>
            </thead>
            <tbody>
              {new Array(10).fill("").map((_, index) => (
                <tr
                  className={clsx(
                    "text-sm text-left",
                    index % 2 === 0 && "bg-white"
                  )}
                >
                  <td className="py-4 font-normal px-10">20.03.2022</td>
                  <td className="py-4 font-normal px-10">Daun syndrom</td>
                  <td className="py-4 font-normal px-10">Dr. Vin Diesel</td>
                  <td className="py-4 flex justify-center font-normal text-center px-10">
                    <DownloadIcon className="w-5 text-[#3A57E8]" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </List>
        <LastNotificationList className="py-4 px-2.5" isDoctor={false} />
      </>
    </div>
  );
};
