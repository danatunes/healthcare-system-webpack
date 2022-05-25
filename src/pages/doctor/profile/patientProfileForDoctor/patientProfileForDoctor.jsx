import { List } from "../../../../components";
import { PlusCircleIcon } from "@heroicons/react/solid";
import clsx from "clsx";
import { DownloadIcon, UserAddIcon, UserIcon } from "@heroicons/react/outline";
import { getPatient } from "../../../../redux/actions/patients";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Modal } from "../../../../ui/modal/modal";
import { Dialog } from "@headlessui/react";
import { publicRequest } from "../../../../api/requestMethods";
import Loader from "../../../../ui/loader/loader";

export const PatientProfileForDoctor = () => {
  const patient = useSelector(({ patients }) => patients.patient);
  const { id } = useParams();
  const dispatch = useDispatch();
  const cancelButtonRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  console.log(patient, id, "patient");

  useEffect(() => {
    dispatch(getPatient(id));
  }, []);

  const setFileHandler = (event) => {
    setSelectedFile(event.target.files[0]);
    console.log(selectedFile, "selectedFile");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (selectedFile !== null) {
      const formData = new FormData();
      //
      // // Update the formData object
      formData.append("file", selectedFile);
      //
      formData.append("typeId", 2);

      console.log(formData, "formData");

      try {
        await publicRequest.post(
          "/api/v1/file/upload/" + patient.user.id,
          formData,
          {
            headers: {
              Authorization: "Bearer " + localStorage.getItem("token"),
              ContentType: "multipart/form-data",
            },
          }
        );
      } catch (e) {
        console.log(e);
      }
    }
    setIsOpen(false);
  };

  return (
    <>
      {patient ? (
        <div className="space-y-7">
          <UserCard userInformation={patient} />
          <List
            header={
              <div className="flex flex-row justify-between">
                <h3 className="font-medium text-xl">Medical Records</h3>
                <div
                  onClick={() => setIsOpen(true)}
                  className="flex cursor-pointer flex-row justify-between items-center space-x-5"
                >
                  <PlusCircleIcon className="w-7 text-[#3A57E8]" />
                  <p className="font-bold text-lg text-[#3A57E8]">
                    Add new record for patient
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
                  <th className="py-4 font-normal px-10 text-center">
                    Download
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr
                  className={clsx(
                    "text-sm text-left",
                    "bg-white",
                    "hover:bg-gray-100"
                  )}
                >
                  <td className="py-4 font-normal px-10">20.03.2022</td>
                  <td className="py-4 font-normal px-10">Corona Vitus</td>
                  <td className="py-4 font-normal px-10">Dr. Azizbek</td>
                  <td className="py-4 flex justify-center font-normal text-center px-10">
                    <DownloadIcon className="w-5 text-[#3A57E8]" />
                  </td>
                </tr>
                <tr className={clsx("text-sm text-left", "hover:bg-gray-100")}>
                  <td className="py-4 font-normal px-10">16.02.2022</td>
                  <td className="py-4 font-normal px-10">Headache</td>
                  <td className="py-4 font-normal px-10">Dr. Super Puper</td>
                  <td className="py-4 flex justify-center font-normal text-center px-10">
                    <DownloadIcon className="w-5 text-[#3A57E8]" />
                  </td>
                </tr>
                <tr
                  className={clsx(
                    "text-sm text-left",
                    "bg-white",
                    "hover:bg-gray-100"
                  )}
                >
                  <td className="py-4 font-normal px-10">20.03.2022</td>
                  <td className="py-4 font-normal px-10">Broken arm</td>
                  <td className="py-4 font-normal px-10">Dr. Vin Diesel</td>
                  <td className="py-4 flex justify-center font-normal text-center px-10">
                    <DownloadIcon className="w-5 text-[#3A57E8]" />
                  </td>
                </tr>
              </tbody>
            </table>
          </List>
          <Modal
            setIsOpen={setIsOpen}
            isOpen={isOpen}
            handleSubmit={handleSubmit}
          >
            <div>
              <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
                <UserAddIcon
                  className="h-6 w-6 text-green-600"
                  aria-hidden="true"
                />
              </div>
              <div className="mt-3 text-center sm:mt-5">
                <Dialog.Title
                  as="h3"
                  className="text-lg leading-6 font-medium text-gray-900"
                >
                  Add new record for patient
                </Dialog.Title>
                <div className="mt-2 flex flex-col space-y-4">
                  <label
                    htmlFor="file"
                    className="flex flex-col text-gray-500 text-md items-start"
                  >
                    File :
                    <input
                      type="file"
                      id="file"
                      name="file"
                      onChange={setFileHandler}
                      className="w-full"
                    />
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
      ) : (
        <Loader />
      )}
    </>
  );
};

const UserCard = ({ userInformation }) => {
  console.log(userInformation, "userInformation");
  const role = localStorage.getItem("role");

  return (
    <div className="bg-white rounded-xl shadow-md">
      {userInformation ? (
        <div className={clsx("flex flex-col items-end", "sm:flex-row")}>
          <UserIcon
            className={clsx(
              "rounded-l-xl h-full w-56 bg-[#C4C4C4] text-white hidden",
              "xl:block"
            )}
          />
          <div className="py-3 px-8 space-y-3 w-full">
            <h4 className="text-xl leading-8">
              {`${userInformation.user.firstName} ${userInformation.user.lastName} ${userInformation.user.fatherName}`}
            </h4>
            <div className={clsx("flex flex-wrap space-y-2")}>
              <UserInformation
                label="Hospital"
                information={userInformation.hospital.name}
              />
              <UserInformation
                label="Email"
                information={userInformation.user.email}
              />
              <UserInformation
                label="Age"
                information={userInformation.user.age}
              />
              <UserInformation
                label="Gender"
                information={userInformation.user.gender}
              />
              <UserInformation
                label="Phone"
                information={userInformation.user.phoneNumber}
              />
              <UserInformation label="IIN" information={userInformation.iin} />
            </div>
          </div>
          <a href="#" className="text-[#3A57E8] text-sm mb-2 mr-2">
            Edit
          </a>
        </div>
      ) : (
        <Loader />
      )}
    </div>
  );
};

const UserInformation = ({ label, information }) => {
  return (
    <div
      className={clsx(
        "w-full flex flex-row justify-between flex-grow",
        "sm:w-1/3 sm:flex-col"
      )}
    >
      <p className={clsx("text-sm text-gray-400 mr-2", "sm:mr-0")}>{label}</p>
      <p className="text-md font-bold overflow-x-auto truncate">
        {information}
      </p>
    </div>
  );
};
