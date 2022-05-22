import React, { Suspense, useEffect, useRef, useState } from "react";
import { List } from "../../../../components";
import { NavLink, Outlet, useParams } from "react-router-dom";
import clsx from "clsx";
import Loader from "../../../../ui/loader/loader";
import { useDispatch, useSelector } from "react-redux";
import { getDoctorWithFeedback } from "../../../../redux/actions/doctor";
import { PlusCircleIcon } from "@heroicons/react/solid";
import { Modal } from "../../../../ui/modal/modal";
import { publicRequest } from "../../../../api/requestMethods";
import { CalendarIcon, StarIcon } from "@heroicons/react/outline";
import { Dialog } from "@headlessui/react";
import { DoctorProfileCalendar } from "../../../../components/doctorProfileCalendar";

export const DoctorProfileForPatient = () => {
  const { doctor } = useSelector(({ doctor }) => doctor);
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenCalendar, setIsOpenCalendar] = useState(false);
  const [workCalendar, setWorkCalendar] = useState([]);
  const [record, setRecord] = useState([]);
  const [avatar, setAvatar] = useState(null);

  const dispatch = useDispatch();

  const { id } = useParams();

  const ratingRef = useRef();
  const feedbackRef = useRef();
  const cancelButtonRef = useRef(null);

  const getCalendar = async (id) => {
    try {
      await publicRequest.get("/api/v1/schedule/doctor/" + id).then((res) => {
        setWorkCalendar(res.data);
      });
    } catch (e) {
      console.log(e);
    }
  };

  const handleSubmitCalendar = async (e) => {
    e.preventDefault();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let newDate = new Date();
    let date = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();

    const data = {
      date: `${year}-${month < 10 ? `0${month}` : `${month}`}-${date}`,
      text: feedbackRef.current.value,
      rate: parseFloat(ratingRef.current.value),
    };
    console.log(data);

    try {
      await publicRequest.post("/api/v1/feedback/doctor/give/" + id, data, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      });
    } catch (e) {
      console.log(e);
    }
    dispatch(getDoctorWithFeedback(id));

    setIsOpen(false);
  };

  const getAvatar = async () => {
    try {
      return await publicRequest.get(
        "/api/v1/file/avatar/" + doctor.doctor.user.id,
        {
          responseType: "blob",
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      );
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    console.log("useEffect");
    getAvatar().then((res) => {
      let imageUrl = URL.createObjectURL(res.data);
      setAvatar(imageUrl);
    });
    dispatch(getDoctorWithFeedback(id));
    getCalendar(id);
  }, [id, dispatch]);

  console.log(doctor.doctor, "doctor.doctor");

  return (
    <div className="w-full space-y-4 max-w-4xl">
      {doctor.doctor ? (
        <>
          <UserCard userInformation={doctor.doctor} avatar={avatar} />
          <div>
            <List
              styleList="rounded-t-lg"
              className="shadow-md h-fit max-h-[450px]"
              header={
                <div className="w-full flex flex-row justify-between">
                  <NavLink
                    to=""
                    end
                    className={({ isActive }) =>
                      clsx(
                        "font-medium text-lg focus:text-[#3A57E8]",
                        isActive && "text-[#3A57E8]"
                      )
                    }
                  >
                    About Me
                  </NavLink>
                  <NavLink
                    to="feedback"
                    className={({ isActive }) =>
                      clsx(
                        "font-medium text-lg focus:text-[#3A57E8]",
                        isActive && "text-[#3A57E8]"
                      )
                    }
                  >
                    Feedback
                  </NavLink>
                  <p
                    onClick={() => setIsOpenCalendar(true)}
                    className={({ isActive }) =>
                      clsx(
                        "font-medium text-lg focus:text-[#3A57E8]",
                        isActive && "text-[#3A57E8]"
                      )
                    }
                  >
                    Calendar
                  </p>
                </div>
              }
            >
              <Suspense fallback={<Loader />}>
                <Outlet />
              </Suspense>
            </List>
            <NavLink
              to="feedback"
              onClick={() => setIsOpen(true)}
              className={clsx(
                "py-2 px-4 bg-[#3A57E8] rounded-b-lg w-full flex justify-center font-medium text-lg focus:text-[#3A57E8]"
              )}
            >
              <div className="flex flex-row justify-between items-center space-x-5">
                <PlusCircleIcon className="w-7 text-white" />
                <p className="font-bold text-lg text-white">Add Feedback</p>
              </div>
            </NavLink>
          </div>
          <Modal
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            handleSubmit={handleSubmit}
            feedbackRef={feedbackRef}
            ratingRef={ratingRef}
          >
            <div>
              <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
                <StarIcon
                  className="h-6 w-6 text-green-600"
                  aria-hidden="true"
                />
              </div>
              <div className="mt-3 text-center sm:mt-5">
                <Dialog.Title
                  as="h3"
                  className="text-lg leading-6 font-medium text-gray-900"
                >
                  Add Feedback and Rating
                </Dialog.Title>
                <div className="mt-2">
                  <label htmlFor="rating">
                    Rating:
                    <select
                      ref={ratingRef}
                      name="rating"
                      id="rating"
                      className="rounded-md ml-2 mb-2"
                    >
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                    </select>
                  </label>
                  <input
                    ref={feedbackRef}
                    type="text"
                    id="feedback"
                    className="rounded-lg w-full"
                    placeholder="Such are nice ...."
                  />
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
            setIsOpen={setIsOpenCalendar}
            isOpen={isOpenCalendar}
            handleSubmit={handleSubmitCalendar}
          >
            <div>
              <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
                <CalendarIcon
                  className="h-6 w-6 text-green-600"
                  aria-hidden="true"
                />
              </div>
              <div className="mt-3 text-center sm:mt-5">
                <Dialog.Title
                  as="h3"
                  className="text-lg leading-6 font-medium text-gray-900"
                >
                  Make an appointment
                </Dialog.Title>
                <div className="mt-2 flex flex-col space-y-4">
                  <DoctorProfileCalendar
                    setWorkCalendar={setRecord}
                    dataFromPatient={workCalendar}
                  />
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
                onClick={() => setIsOpenCalendar(false)}
                ref={cancelButtonRef}
              >
                Cancel
              </button>
            </div>
          </Modal>
        </>
      ) : (
        <Loader />
      )}
    </div>
  );
};

const UserCard = ({ userInformation, avatar }) => {
  const role = localStorage.getItem("role");
  return (
    <div className="bg-white rounded-xl shadow-md">
      <div className={clsx("flex flex-col items-end", "lg:flex-row")}>
        {avatar ? (
          <img
            src={avatar}
            alt=""
            className={clsx("w-full", "lg:w-56 lg:h-56")}
          />
        ) : (
          <Loader />
        )}
        <div className="py-3 px-8 space-y-3 w-full">
          <h3 className="text-2xl font-bold">
            Hospital : {userInformation.hospital.name}
          </h3>
          <h4 className="text-xl leading-8">{`Dr. ${userInformation.user.firstName} ${userInformation.user.lastName}`}</h4>
          <div className={clsx("flex flex-wrap space-y-2")}>
            <UserInformation
              label="Position"
              information={userInformation.user.role.name}
            />
            <UserInformation
              label="Email"
              information={userInformation.user.email}
            />
            <UserInformation label="Role" information={role} />
            <UserInformation label="Date of Birth" information="22-05-2000" />
            <UserInformation
              label="Phone"
              information={userInformation.user.phoneNumber}
            />
            <UserInformation
              label="Specialization"
              information={userInformation.specialization.name}
            />
          </div>
        </div>
        <a href="#" className="text-[#3A57E8] text-sm mb-2 mr-2">
          Edit
        </a>
      </div>
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
