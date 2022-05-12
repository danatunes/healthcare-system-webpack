import clsx from "clsx";
import { Link } from "react-router-dom";
import { CheckIcon, XIcon } from "@heroicons/react/outline";

export const WaitingList = () => {
  const data = [
    {
      id: 1,
      name: "Vin Diesel",
      email: "VinDiesel@gmail.com",
      conditions: "Adam Bolmaid",
      isAccepted: null,
    },
    {
      id: 2,
      name: "Vin Diesel",
      email: "VinDiesel@gmail.com",
      conditions: "Adam Bolmaid",
      isAccepted: null,
    },
    {
      id: 3,
      name: "Vin Diesel",
      email: "VinDiesel@gmail.com",
      conditions: "Adam Bolmaid",
      isAccepted: null,
    },
    {
      id: 4,
      name: "Vin Diesel",
      email: "VinDiesel@gmail.com",
      conditions: "Adam Bolmaid",
      isAccepted: null,
    },
    {
      id: 5,
      name: "Vin Diesel",
      email: "VinDiesel@gmail.com",
      conditions: "Adam Bolmaid",
      isAccepted: null,
    },
    {
      id: 6,
      name: "Vin Diesel",
      email: "VinDiesel@gmail.com",
      conditions: "Adam Bolmaid",
      isAccepted: null,
    },
    {
      id: 7,
      name: "Vin Diesel",
      email: "VinDiesel@gmail.com",
      conditions: "Adam Bolmaid",
      isAccepted: null,
    },
    {
      id: 8,
      name: "Vin Diesel",
      email: "VinDiesel@gmail.com",
      conditions: "Adam Bolmaid",
      isAccepted: null,
    },
  ];

  return (
    <div className="px-5 py-4 w-full rounded-lg bg-white shadow-lg">
      <h1 className="font-medium text-xl">18 Patient Total</h1>
      <div className="max-h-[400px] overflow-scroll px-4 mt-3">
        <table className="[border-spacing:0 0.75rem] border-collapse w-full table-auto bg-[#F8F9FD] rounded-t-xl">
          <thead>
            <tr className="text-left text-gray-400">
              <th className="py-4 font-normal px-10">Name</th>
              <th className="py-4 font-normal px-10">Email</th>
              <th className="py-4 font-normal px-10">Conditions</th>
              <th className="py-4 font-normal px-10 flex justify-center">
                To accept
              </th>
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
                <Link to=":id">
                  <td
                    className={clsx(
                      "py-4 font-normal px-10",
                      "hover:text-[#3A57E8]"
                    )}
                  >
                    {patient.name}
                  </td>
                </Link>
                <td className="py-4 font-normal px-10">{patient.email}</td>
                <td className="py-4 font-normal px-10">{patient.conditions}</td>
                <td className="py-4 font-normal px-10">
                  <div className="flex flex-row justify-evenly items-center">
                    <CheckIcon className="w-5 text-[#009000]" />
                    <XIcon className="w-5 text-[#C33120]" />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
