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
                <th className="font-normal">
                  {isDoctor ? "Patient" : "Doctor"}
                </th>
                <th className="font-normal">Symptoms</th>
                <th className="font-normal">Time</th>
                <th className="font-normal">Number</th>
              </tr>
            </thead>
            <tbody>
              <tr className="text-sm">
                <td className="font-normal">Vin Diesel</td>
                <td className="font-normal">Daun sindrom</td>
                <td className="font-normal">July 20, 9:00-10:00 am</td>
                <td className="font-normal">+7-708-310-04-02</td>
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
                <th className="font-normal">
                  {isDoctor ? "Patient" : "Doctor"}
                </th>
                <th className="font-normal">Symptoms</th>
                <th className="font-normal">Time</th>
                <th className="font-normal">Number</th>
              </tr>
            </thead>
            <tbody>
              <tr className="text-sm">
                <td className="font-normal">Vin Diesel</td>
                <td className="font-normal">Daun sindrom</td>
                <td className="font-normal">July 20, 9:00-10:00 am</td>
                <td className="font-normal">+7-708-310-04-02</td>
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
                <th className="font-normal">
                  {isDoctor ? "Patient" : "Doctor"}
                </th>
                <th className="font-normal">Symptoms</th>
                <th className="font-normal">Time</th>
                <th className="font-normal">Number</th>
              </tr>
            </thead>
            <tbody>
              <tr className="text-sm">
                <td className="font-normal">Vin Diesel</td>
                <td className="font-normal">Daun sindrom</td>
                <td className="font-normal">July 20, 9:00-10:00 am</td>
                <td className="font-normal">+7-708-310-04-02</td>
              </tr>
            </tbody>
          </table>
        </Menu.Item>
      </DropDown>
    </List>
  );
};
