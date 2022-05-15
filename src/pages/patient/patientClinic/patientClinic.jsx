import clsx from "clsx";
import { DropDown, HeaderList, List } from "../../../components";
import { Menu } from "@headlessui/react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getSelfInformation } from "../../../redux/actions/user";
import { useEffect } from "react";

export const PatientClinic = () => {
  const dispatch = useDispatch();

  const user = useSelector(({ user }) => user.currentUser);

  useEffect(() => {
    if (typeof user.role !== "object") {
      let initialRole = user.role.includes("client") ? "patient" : "doctor";
      const token = localStorage.getItem("token");
      dispatch(getSelfInformation(initialRole, user.id, token));
    }
  }, []);

  return (
    <div className="w-full h-full space-y-10">
      <div className="w-full grid grid-cols-2 gap-x-5">
        <Link
          to={`/patient/clinics/${user.id}`}
          className={clsx(
            "border-0 flex items-center justify-center font-normal py-20 text-xl transition duration-300 px-28 shadow-lg rounded-xl",
            "hover:scale-105"
          )}
        >
          State medical care
        </Link>
        <Link
          to="/patient/clinics/"
          className={clsx(
            "border-0 py-20 flex items-center justify-center px-28 text-xl transition duration-300 text-white font-normal bg-[#3A57E8] shadow-lg rounded-xl",
            "hover:scale-105"
          )}
        >
          Private clinics
        </Link>
      </div>
      <FrequentlyClinics />
    </div>
  );
};

const FrequentlyClinics = () => {
  return (
    <List
      header={<HeaderList name="My Clinic" />}
      className="py-4 px-2.5 space-y-4"
    >
      <DropDown isDoctor={false} heading="Alanda Clinic">
        <Menu.Item>
          <table className="w-full overflow-hidden table-auto">
            <thead>
              <tr className="text-sm text-gray-400">
                <th className="font-normal">Plot number</th>
                <th className="font-normal">District doctor</th>
                <th className="font-normal">Date of registration</th>
                <th className="font-normal">Number</th>
              </tr>
            </thead>
            <tbody>
              <tr className="text-sm">
                <td className="font-normal">2 therapeutic</td>
                <td className="font-normal">vin Diesel</td>
                <td className="font-normal">Date of registration</td>
                <td className="font-normal">+7-708-310-04-02</td>
              </tr>
            </tbody>
          </table>
        </Menu.Item>
      </DropDown>
      <DropDown isDoctor={false} heading="Сity polyclinic No. 6p">
        <Menu.Item>
          <table className="w-full overflow-hidden table-auto">
            <thead>
              <tr className="text-sm text-gray-400">
                <th className="font-normal">Plot number</th>
                <th className="font-normal">District doctor</th>
                <th className="font-normal">Date of registration</th>
                <th className="font-normal">Number</th>
              </tr>
            </thead>
            <tbody>
              <tr className="text-sm">
                <td className="font-normal">2 therapeutic</td>
                <td className="font-normal">vin Diesel</td>
                <td className="font-normal">Date of registration</td>
                <td className="font-normal">+7-708-310-04-02</td>
              </tr>
            </tbody>
          </table>
        </Menu.Item>
      </DropDown>
    </List>
  );
};
