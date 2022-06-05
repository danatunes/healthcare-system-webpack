import clsx from "clsx";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { publicRequest } from "../../../api/requestMethods";

export const DoctorPatients = () => {
  const [patients, setPatients] = useState([]);

  async function fetchData() {
    try {
      await publicRequest
        .get("/api/v1/doctor/patients/", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
        .then((res) => {
          setPatients(res.data);
        });
    } catch (e) {
      console.log(e);
    }
    console.log(patients);
  }

  useEffect(() => {
    fetchData();
  }, []);

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

  console.log(patients, "data");

  return (
    <div className="px-5 py-4 w-full rounded-lg bg-white shadow-lg">
      <div className="w-full max-h-[500px] flex flex-row justify-between">
        <h1 className="font-medium text-xl">{patients.length} Patient Total</h1>
      </div>
      <div className="max-h-[400px] overflow-scroll px-4 mt-3">
        {patients && patients.length > 0 ? (
          <table className="[border-spacing:0 0.75rem] border-collapse w-full table-auto bg-[#F8F9FD] rounded-t-xl">
            <thead>
              <tr className="text-left text-gray-400">
                <th className="py-4 font-normal px-10">Name</th>
                <th className="py-4 font-normal px-10">Email</th>
                <th className="py-4 font-normal px-10">Age</th>
                <th className="py-4 font-normal px-10">Number</th>
              </tr>
            </thead>
            <tbody>
              {patients.map((patient, index) => (
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
                      {patient.user.firstName}
                    </td>
                  </NavLink>
                  <td className="py-4 font-normal px-10">
                    {patient.user.email}
                  </td>
                  <td className="py-4 font-normal px-10">
                    {patient.user.age || 18}
                  </td>
                  <td className="py-4 font-normal px-10">
                    {patient.user.phoneNumber}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <div className="flex flex-col items-center justify-center">
            <p className="text-center text-gray-400">No Patients</p>
          </div>
        )}
      </div>
    </div>
  );
};
