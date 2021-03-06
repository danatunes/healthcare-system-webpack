import { List } from "../../../../components";
import { PlusCircleIcon } from "@heroicons/react/solid";
import clsx from "clsx";
import {
  DownloadIcon,
  SaveAsIcon,
  UserAddIcon,
  UserIcon,
} from "@heroicons/react/outline";
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
  const [files, setFiles] = useState([]);
  const [imageURL, setImageURL] = useState(null);

  console.log(patient, id, "patient");

  const getPatientFiles = async () => {
    try {
      await publicRequest
        .get(`/api/v1/file/doctor/patient/${id}/files`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
        .then((res) => {
          setFiles(res.data);
        });
    } catch (e) {
      console.log(e);
    }
  };

  async function downloadFile(id) {
    try {
      return await publicRequest.get("/api/v1/file/data/" + id, {
        responseType: "blob",
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      });
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    dispatch(getPatient(id));
    getPatientFiles();
  }, []);

  console.log(files, "files");

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
        await publicRequest
          .post("/api/v1/file/upload/" + patient.id, formData, {
            headers: {
              Authorization: "Bearer " + localStorage.getItem("token"),
              ContentType: "multipart/form-data",
            },
          })
          .then((res) => {
            getPatientFiles();
          });
      } catch (e) {
        console.log(e);
      }
    }
    setIsOpen(false);
  };
  const downloadImage = (id) => {
    downloadFile(id).then((res) => {
      let imageUrl = URL.createObjectURL(res.data);
      setImageURL(imageUrl);
    });
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
            {files.length > 0 ? (
              <table className="[border-spacing:0 0.75rem] border-collapse w-full table-auto bg-[#F8F9FD] rounded-t-xl">
                <thead>
                  <tr className="text-left text-gray-400 text-sm">
                    <th className="py-4 font-normal px-10">Name</th>
                    <th className="py-4 font-normal px-10">Type</th>
                    <th className="py-4 font-normal px-10 text-center">
                      Download
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {files.map((file, index) => (
                    <tr
                      className={clsx(
                        "text-sm text-left",
                        index % 2 === 0 ? "bg-white" : "bg-gray-50",
                        "hover:bg-gray-100"
                      )}
                    >
                      <td className="py-4 font-normal px-10">{file.name}</td>
                      <td className="py-4 font-normal px-10">
                        {file.contentType}
                      </td>
                      <a
                        href={imageURL}
                        target="_blank"
                        onClick={() => downloadImage(file.id)}
                        className="py-4 flex justify-center cursor-pointer font-normal text-center px-10"
                        download={file.name}
                      >
                        <DownloadIcon className="w-5 text-[#3A57E8]" />
                      </a>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <div className="text-center text-gray-400 py-6 px-3 flex items-center justify-center">
                <SaveAsIcon className="w-11" />
                <p className="text-lg font-medium">No documents</p>
              </div>
            )}
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
      {userInformation.user ? (
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
                label="Date of birthday"
                information={userInformation.user.dateOfBirth}
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
      <p className={clsx("text-md font-bold overflow-x-auto truncate")}>
        {information}
      </p>
    </div>
  );
};
