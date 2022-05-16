import { HeaderList, List } from "../list";
import { DropDown } from "./dropDown";
import { Menu } from "@headlessui/react";

export const LastNotificationList = ({ isDoctor, className }) => {
  return (
    <List
      className={className}
      header={<HeaderList name="Last Notifications" />}
    >
      <DropDown isDoctor={isDoctor} heading="Confirmed Appoinment">
        <Menu.Item>
          <table className="w-full overflow-hidden table-auto">
            <thead>
              <tr className="text-sm text-gray-400">
                <th className="font-normal py-4 px-5">
                  {isDoctor ? "Patient" : "Doctor"}
                </th>
                <th className="font-normal py-4 px-5">Symptoms</th>
                <th className="font-normal py-4 px-5">Time</th>
                <th className="font-normal py-4 px-5">Number</th>
              </tr>
            </thead>
            <tbody>
              <tr className="text-sm">
                <td className="font-normal py-4 px-5">Vin Diesel</td>
                <td className="font-normal py-4 px-5">Daun sindrom</td>
                <td className="font-normal py-4 px-5">
                  July 20, 9:00-10:00 am
                </td>
                <td className="font-normal py-4 px-5">+7-708-310-04-02</td>
              </tr>
            </tbody>
          </table>
        </Menu.Item>
      </DropDown>
      <DropDown isDoctor={isDoctor} heading="Confirmed Appoinment">
        <Menu.Item>
          <table className="w-full overflow-hidden table-auto">
            <thead>
              <tr className="text-sm text-gray-400 py-4 px-5">
                <th className="font-normal">
                  {isDoctor ? "Patient" : "Doctor"}
                </th>
                <th className="font-normal py-4 px-5">Symptoms</th>
                <th className="font-normal py-4 px-5">Time</th>
                <th className="font-normal py-4 px-5">Number</th>
              </tr>
            </thead>
            <tbody>
              <tr className="text-sm">
                <td className="font-normal py-4 px-5">Vin Diesel</td>
                <td className="font-normal py-4 px-5">Daun sindrom</td>
                <td className="font-normal py-4 px-5">
                  July 20, 9:00-10:00 am
                </td>
                <td className="font-normal py-4 px-5">+7-708-310-04-02</td>
              </tr>
            </tbody>
          </table>
        </Menu.Item>
      </DropDown>
      <DropDown isDoctor={isDoctor} heading="Confirmed Appoinment">
        <Menu.Item>
          <table className="w-full overflow-hidden table-auto">
            <thead>
              <tr className="text-sm text-gray-400">
                <th className="font-normal py-4 px-5">
                  {isDoctor ? "Patient" : "Doctor"}
                </th>
                <th className="font-normal py-4 px-5">Symptoms</th>
                <th className="font-normal py-4 px-5">Time</th>
                <th className="font-normal py-4 px-5">Number</th>
              </tr>
            </thead>
            <tbody>
              <tr className="text-sm">
                <td className="font-normal py-4 px-5">Vin Diesel</td>
                <td className="font-normal py-4 px-5">Daun sindrom</td>
                <td className="font-normal py-4 px-5">
                  July 20, 9:00-10:00 am
                </td>
                <td className="font-normal py-4 px-5">+7-708-310-04-02</td>
              </tr>
            </tbody>
          </table>
        </Menu.Item>
      </DropDown>
    </List>
  );
};
