import React, { Fragment, useEffect, useRef, useState } from "react";
import { publicRequest } from "../../../../api/requestMethods";
import clsx from "clsx";
import { NavLink } from "react-router-dom";
import { Button } from "../../../../ui/button/button";
import { BadgeCheckIcon, ChevronDownIcon } from "@heroicons/react/outline";
import { Dialog, Menu, Transition } from "@headlessui/react";
import { Modal } from "../../../../ui/modal/modal";

export const ClinicPatients = () => {
  const [patients, setPatients] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const cancelButtonRef = useRef(null);
  const [patientId, setPatientId] = useState(null);
  const statusRef = useState(null);
  const [scheduleId, setScheduleId] = useState(null);
  const [hospitalId, setHospitalId] = useState(null);
  const [doctorId, setDoctorId] = useState(null);

  async function fetchData() {
    try {
      await publicRequest
        .get("/api/v1/appointment/hospital", {
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

  const handleOpen = (open, patientId, scheduleId, hospitalId, doctorId) => {
    console.log(open, patientId, scheduleId, hospitalId, doctorId);
    setPatientId(patientId);
    setDoctorId(doctorId);
    setHospitalId(hospitalId);
    setScheduleId(scheduleId);
    setIsOpen(open);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await publicRequest
        .post(
          `/api/v1/appointment/updateStatus/patient/${patientId}/doctor/${doctorId}/schedule/${scheduleId}?status=${statusRef.current.value}`,
          {},
          {
            headers: {
              Authorization: "Bearer " + localStorage.getItem("token"),
            },
          }
        )
        .then((res) => {
          fetchData();
        });
    } catch (e) {
      console.log(e);
    }
    setIsOpen(false);
  };

  console.log(patients, "patients");

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
                <th className="py-4 font-normal px-5">Name</th>
                <th className="py-4 font-normal px-5">Date</th>
                <th className="py-4 font-normal px-5">Email</th>
                <th className="py-4 font-normal px-5">Status</th>
                <th className="py-4 font-normal px-5">Number</th>
                <th className="py-4 font-normal px-5">Appoinment</th>
                <th className="py-4 font-normal px-5" />
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
                    className="py-6 flex items-center h-full px-5"
                  >
                    <td className={clsx("font-normal", "hover:text-[#3A57E8]")}>
                      {patient.patient.user.firstName}
                    </td>
                  </NavLink>
                  <td className="py-4 font-normal px-5 min-w-[110px]">
                    {patient.date}
                  </td>

                  <td className="py-4 font-normal max-w-[100px] px-5 overflow-hidden">
                    {patient.patient.user.email}
                  </td>
                  <td className="py-4 font-normal px-5">{patient.status}</td>
                  <td className="py-4 font-normal px-5">
                    {patient.patient.user.phoneNumber}
                  </td>
                  <td className="py-4 font-normal px-5">
                    <Dropdown
                      doctor={patient.schedule.doctor}
                      dayOfWeek={patient.schedule.dayOfWeek}
                      time={patient.schedule.time}
                    />
                  </td>
                  <td className="py-4 font-normal px-5">
                    <Button
                      name="Complete"
                      onClick={() =>
                        handleOpen(
                          true,
                          patient.patient.id,
                          patient.schedule.id,
                          patient.patient.hospital.id,
                          patient.schedule.doctor.id
                        )
                      }
                    />
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
      <Modal isOpen={isOpen} setIsOpen={setIsOpen} handleSubmit={handleSubmit}>
        <div>
          <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
            <BadgeCheckIcon
              className="h-6 w-6 text-green-600"
              aria-hidden="true"
            />
          </div>
          <div className="mt-3 text-center sm:mt-5">
            <Dialog.Title
              as="h3"
              className="text-lg leading-6 font-medium text-gray-900"
            >
              Choose Status of appoinment
            </Dialog.Title>
            <div className="mt-2 flex justify-evenly items-center flex-row">
              <label
                htmlFor="status"
                className="flex flex-row p-3 rounded-full text-gray-500 text-md items-center space-x-2"
              >
                <p>Status</p>
                <select id="status" ref={statusRef} className="rounded-lg">
                  <option value="FINISHED">Finished</option>
                  <option value="ABSENT">Absent</option>
                </select>
              </label>
            </div>
          </div>
        </div>
        <div className="mt-5 sm:mt-6 sm:grid sm:grid-cols-2 sm:gap-3 sm:grid-flow-row-dense">
          <button
            type="submit"
            className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:col-start-2 sm:text-sm"
          >
            Submit
          </button>
          <button
            type="button"
            className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:col-start-1 sm:text-sm"
            onClick={() => setIsOpen(false)}
            ref={cancelButtonRef}
          >
            Cancel
          </button>
        </div>
      </Modal>
    </div>
  );
};

const Dropdown = ({ doctor, dayOfWeek, time }) => {
  console.log(doctor, "doctor");
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="z-10 inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500">
          Appointment
          <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="z-20 origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={clsx(
                    active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                    "block px-4 py-2 text-sm"
                  )}
                >
                  {doctor.user.firstName} {doctor.user.lastName}{" "}
                  {doctor.specialization.name}
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={clsx(
                    active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                    "block px-4 py-2 text-sm"
                  )}
                >
                  {dayOfWeek}
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={clsx(
                    active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                    "block px-4 py-2 text-sm"
                  )}
                >
                  {time}
                </a>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};
