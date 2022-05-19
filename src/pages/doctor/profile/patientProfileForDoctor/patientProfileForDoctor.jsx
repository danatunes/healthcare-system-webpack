import { List, UserCard } from "../../../../components";
import { PlusCircleIcon } from "@heroicons/react/solid";
import clsx from "clsx";
import { DownloadIcon } from "@heroicons/react/outline";

export const PatientProfileForDoctor = () => {
  return (
    <div className="space-y-7">
      <UserCard />
      <List
        header={
          <div className="flex flex-row justify-between">
            <h3 className="font-medium text-xl">Medical Records</h3>
            <div className="flex flex-row justify-between items-center space-x-5">
              <PlusCircleIcon className="w-7 text-[#3A57E8]" />
              <p className="font-bold text-lg text-[#3A57E8]">
                Add new Patient
              </p>
            </div>
          </div>
        }
        styleList="rounded-xl"
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
                  index % 2 === 0 && "bg-white",
                  "hover:bg-gray-100"
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
    </div>
  );
};
