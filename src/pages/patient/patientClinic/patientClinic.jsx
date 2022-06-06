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
  console.log(user, "user");

  useEffect(() => {
    if (typeof user.role !== "object") {
      let initialRole = localStorage.getItem("role");
      const token = localStorage.getItem("token");
      dispatch(getSelfInformation(initialRole.toLowerCase(), user.id, token));
    }
  }, []);

  return (
    <div className="w-full h-full space-y-10">
      {user.userHospital && (
        <div
          className={clsx(
            "w-full grid grid-cols-1 gap-y-2",
            "sm:grid-cols-2 sm:gap-x-5"
          )}
        >
          <Link
            to={`/patient/clinics/${user.userHospital.id}`}
            className={clsx(
              "border-0 flex items-center justify-center font-normal py-20 text-xl transition duration-300 px-5 shadow-lg rounded-xl",
              "md:px-20",
              "sm:px-10",
              "hover:scale-105"
            )}
          >
            State medical care
          </Link>
          <Link
            to="/patient/clinics/"
            className={clsx(
              "border-0 py-20 flex items-center justify-center px-5 text-xl transition duration-300 text-white font-normal bg-[#3A57E8] shadow-lg rounded-xl",
              "md:px-20",
              "sm:px-5",
              "hover:scale-105"
            )}
          >
            Private clinics
          </Link>
        </div>
      )}
      <FrequentlyClinics user={user} />
    </div>
  );
};

const FrequentlyClinics = ({ user }) => {
  return (
    <List
      styleList="rounded-xl"
      header={<HeaderList name="My Clinic" />}
      className="py-4 px-2.5 space-y-4"
    >
      <DropDown isDoctor={false} heading={user.userHospital.name}>
        <Menu.Item>
          <table className="w-full overflow-hidden table-auto">
            <thead>
              <tr className="text-sm text-gray-400">
                <th className="font-normal">City</th>
                <th className="font-normal">Address</th>
                <th className="font-normal">Date of registration</th>
                <th className="font-normal">Number</th>
              </tr>
            </thead>
            <tbody>
              <tr className="text-sm">
                <td className="font-normal">{user.userHospital.city.name}</td>
                <td className="font-normal">{user.userHospital.address}</td>
                <td className="font-normal">{user.userHospital.rate}</td>
                <td className="font-normal">{user.userHospital.phone}</td>
              </tr>
            </tbody>
          </table>
        </Menu.Item>
      </DropDown>
    </List>
  );
};
