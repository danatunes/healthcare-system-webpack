import { Link } from "react-router-dom";
import clsx from "clsx";
import { HeadingProfile, LastNotificationList } from "../../../../components";
import { useSelector } from "react-redux";
import { Button } from "../../../../ui/button/button";
import { useRef, useState } from "react";
import { Modal } from "../../../../ui/modal/modal";
import { PencilAltIcon } from "@heroicons/react/outline";
import { Dialog } from "@headlessui/react";
import DoctorProfileCalendar from "../../../../components/doctorProfileCalendar";
import { publicRequest } from "../../../../api/requestMethods";

export const DoctorProfile = () => {
  const me = useSelector(({ user }) => user.me);
  console.log(me);
  const [isOpen, setIsOpen] = useState(false);
  const cancelButtonRef = useRef(null);
  const [workCalendar, setWorkCalendar] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(workCalendar);
    try {
      await publicRequest.post("api/v1/schedule/create", workCalendar, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
          Application: "application/json",
        },
      });
    } catch (e) {
      console.log(e);
    }
    setIsOpen(false);
  };

  return (
    <>
      {me !== null && (
        <>
          <HeadingProfile
            name={`Dr. ${me.user.firstName} ${me.user.lastName}`}
          />
          <div className={clsx("grid grid-cols-1 gap-5", "sm:grid-cols-2")}>
            <ConsultingCart type="Offline" when="Today" count="10" />
            <ConsultingCart type="Online" when="Today" count="6" />
          </div>
          <Button name="Add opening hours" onClick={() => setIsOpen(true)} />
          <LastNotificationList className="py-4 px-2.5" isDoctor={true} />
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
