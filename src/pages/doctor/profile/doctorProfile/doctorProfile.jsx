import { Link, NavLink } from "react-router-dom";
import clsx from "clsx";
import { HeadingProfile } from "../../../../components";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "../../../../ui/button/button";
import { useEffect, useRef, useState } from "react";
import { Modal } from "../../../../ui/modal/modal";
import { PencilAltIcon, PhotographIcon } from "@heroicons/react/outline";
import { Dialog } from "@headlessui/react";
import { publicRequest } from "../../../../api/requestMethods";
import { DoctorProfileCalendar } from "../../../../components/doctorProfileCalendar";
import { getMyPatients } from "../../../../redux/actions/patients";
import { toast } from "react-toastify";
import { DoctorPatients } from "../../doctorPatients/doctorPatients";

export const DoctorProfile = () => {
  const me = useSelector(({ user }) => user.me);
  const { patients } = useSelector(({ patients }) => patients);
  console.log(me);
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenAvatar, setIsOpenAvatar] = useState(false);
  const cancelButtonRef = useRef(null);
  const [workCalendar, setWorkCalendar] = useState([]);
  const [selectedFile, setSelectedFile] = useState(null);
  const dispatch = useDispatch();

  const setFileHandler = (event) => {
    setSelectedFile(event.target.files[0]);
    console.log(selectedFile, "selectedFile");
  };

  const handleSubmitAvatar = async (e) => {
    e.preventDefault();
    if (selectedFile !== null) {
      const formData = new FormData();

      // Update the formData object
      formData.append("file", selectedFile);

      formData.append("typeId", 2);

      console.log(formData, "formData");

      try {
        await publicRequest
          .post("/api/v1/file/upload/avatar", formData, {
            headers: {
              Authorization: "Bearer " + localStorage.getItem("token"),
              ContentType: "multipart/form-data",
            },
          })
          .then(() => {
            toast("Avatar successfully uploaded", {
              type: "success",
              position: "top-right",
            });
          });
      } catch (e) {
        toast(e.data.message || e.message, {
          type: "error",
          position: "top-right",
        });
      }
    }
    setIsOpenAvatar(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(workCalendar);
    try {
      await publicRequest
        .post("api/v1/schedule/create", workCalendar, {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
            Application: "application/json",
          },
        })
        .then(() => {
          toast("Schedule created successfully", {
            type: "success",
            position: "top-right",
          });
        });
    } catch (e) {
      toast(e.data.message || e.message, {
        type: "error",
        position: "top-right",
      });
    }
    setIsOpen(false);
  };

  useEffect(() => {
    dispatch(getMyPatients());
  }, []);

  return (
    <>
      {me !== null && (
        <>
          <HeadingProfile
            className="cursor-pointer"
            onClick={() => setIsOpenAvatar(true)}
            name={`Dr. ${me.user.firstName} ${me.user.lastName}`}
          />
          <div className={clsx("grid grid-cols-1 gap-5", "sm:grid-cols-2")}>
            <NavLink to="/doctor/patients">
              <ConsultingCart
                type="Offline"
                when="Today"
                count={patients.length}
              />
            </NavLink>
            <ConsultingCart type="Online" when="Today" count="0" />
          </div>
          <Button name="Add opening hours" onClick={() => setIsOpen(true)} />
          {/*<LastNotificationList className="py-4 px-2.5" isDoctor={true} />*/}
          <DoctorPatients />
          <Modal
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            handleSubmit={handleSubmit}
          >
            <div>
              <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
                <PencilAltIcon
                  className="h-6 w-6 text-green-600"
                  aria-hidden="true"
                />
              </div>
              <div className="mt-3 text-center sm:mt-5">
                <Dialog.Title
                  as="h3"
                  className="text-lg leading-6 font-medium text-gray-900"
                >
                  Add opening hours
                </Dialog.Title>
                <div className="mt-2">
                  <DoctorProfileCalendar setWorkCalendar={setWorkCalendar} />
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
          <Modal
            isOpen={isOpenAvatar}
            setIsOpen={setIsOpenAvatar}
            handleSubmit={handleSubmitAvatar}
          >
            <div>
              <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
                <PhotographIcon
                  className="h-6 w-6 text-green-600"
                  aria-hidden="true"
                />
              </div>
              <div className="mt-3 text-center sm:mt-5">
                <Dialog.Title
                  as="h3"
                  className="text-lg leading-6 font-medium text-gray-900"
                >
                  Add avatar
                </Dialog.Title>
                <div className="mt-2">
                  <label
                    htmlFor="avatar"
                    className="flex flex-col text-gray-500 text-md items-start"
                  >
                    Please choose your photo
                    <input
                      type="file"
                      onChange={setFileHandler}
                      className="mt-2"
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
                onClick={() => setIsOpenAvatar(false)}
                ref={cancelButtonRef}
              >
                Cancel
              </button>
            </div>
          </Modal>
        </>
      )}
    </>
  );
};

const ConsultingCart = ({ type, when, count }) => {
  return (
    <div className="flex flex-col bg-white rounded-xl shadow-lg p-3 justify-between">
      <div className="font-normal">
        <h1 className="text-xl">{type} Consultation</h1>
        <p className="text-sm text-gray-400">{when}</p>
      </div>
      <div className="flex flex-row justify-between items-end mt-12">
        <p className="font-normal text-5xl text-[#3A57E8]">{count}</p>
        <Link to="#" className="font-normal text-sm text-end">
          View All
        </Link>
      </div>
    </div>
  );
};
