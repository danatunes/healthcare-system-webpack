import { PlusCircleIcon } from "@heroicons/react/solid";
import clsx from "clsx";
import { NavLink } from "react-router-dom";
import { Button } from "../../../ui/button/button";

export const DoctorPatients = () => {
  const data = [
    {
      id: 1,
      name: "Vin Diesel",
      email: "VinDiesel@gmail.com",
      conditions: "Adam Bolmaid",
      number: "+7-708-310-04-02",
    },
    {
      id: 2,
      name: "Vin Diesel",
      email: "VinDiesel@gmail.com",
      conditions: "Adam Bolmaid",
      number: "+7-708-310-04-02",
    },
    {
      id: 3,
      name: "Vin Diesel",
      email: "VinDiesel@gmail.com",
      conditions: "Adam Bolmaid",
      number: "+7-708-310-04-02",
    },
    {
      id: 4,
      name: "Vin Diesel",
      email: "VinDiesel@gmail.com",
      conditions: "Adam Bolmaid",
      number: "+7-708-310-04-02",
    },
    {
      id: 5,
      name: "Vin Diesel",
      email: "VinDiesel@gmail.com",
      conditions: "Adam Bolmaid",
      number: "+7-708-310-04-02",
    },
    {
      id: 6,
      name: "Vin Diesel",
      email: "VinDiesel@gmail.com",
      conditions: "Adam Bolmaid",
      number: "+7-708-310-04-02",
    },
    {
      id: 7,
      name: "Vin Diesel",
      email: "VinDiesel@gmail.com",
      conditions: "Adam Bolmaid",
      number: "+7-708-310-04-02",
    },
    {
      id: 8,
      name: "Vin Diesel",
      email: "VinDiesel@gmail.com",
      conditions: "Adam Bolmaid",
      number: "+7-708-310-04-02",
    },
  ];

  console.log(data);

  return (
    <div className="px-5 py-4 w-full rounded-lg bg-white shadow-lg">
      <div className="w-full max-h-[500px] flex flex-row justify-between">
        <h1 className="font-medium text-xl">18 Patient Total</h1>
        <div className="flex flex-row justify-between items-center space-x-5">
          <PlusCircleIcon className="w-7 text-[#3A57E8]" />
          <p className="font-bold text-lg text-[#3A57E8]">Add new Patient</p>
        </div>
      </div>
      <div className="max-h-[400px] overflow-scroll px-4 mt-3">
        <table className="[border-spacing:0 0.75rem] border-collapse w-full table-auto bg-[#F8F9FD] rounded-t-xl">
          <thead>
            <tr className="text-left text-gray-400">
              <th className="py-4 font-normal px-10">Name</th>
              <th className="py-4 font-normal px-10">Email</th>
              <th className="py-4 font-normal px-10">Conditions</th>
              <th className="py-4 font-normal px-10">Number</th>
              <th className="py-4 font-normal px-10" />
            </tr>
          </thead>
          <tbody>
            {data.map((patient, index) => (
              <tr
                className={clsx(
                  "text-sm text-left",
                  index % 2 === 0 && "bg-white",
                  "hover:bg-gray-100"
                )}
              >
                <NavLink
                  to={`${patient.id}`}
                  className="py-6 flex items-center h-full px-10"
                >
                  <td className={clsx("font-normal", "hover:text-[#3A57E8]")}>
                    {patient.name}
                  </td>
                </NavLink>
                <td className="py-4 font-normal px-10">{patient.email}</td>
                <td className="py-4 font-normal px-10">{patient.conditions}</td>
                <td className="py-4 font-normal px-10">{patient.number}</td>
                <td className="py-4 font-normal px-10">
                  <Button name="Complete" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
