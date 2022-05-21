import { List } from "../../../components";
import React, { Suspense, useEffect, useRef, useState } from "react";
import { NavLink, Outlet, useParams } from "react-router-dom";
import clsx from "clsx";
import Loader from "../../../ui/loader/loader";
import { getAllFeedbacks } from "../../../redux/actions/clinic";
import { useDispatch, useSelector } from "react-redux";
import { Modal } from "../../../ui/modal/modal";
import { PlusCircleIcon } from "@heroicons/react/solid";
import { publicRequest } from "../../../api/requestMethods";
import {
  LocationMarkerIcon,
  PhoneIcon,
  StarIcon,
} from "@heroicons/react/outline";
import { Dialog } from "@headlessui/react";
import photo_clinic from "../../../images/example_photo_clinic.png";

export const ChosenClinic = () => {
  const role = localStorage.getItem("role");
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();

  const ratingRef = useRef();
  const feedbackRef = useRef();
  const cancelButtonRef = useRef(null);

  const { id } = useParams();

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
      await publicRequest.post("/api/v1/feedback/hospital/give/" + id, data, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      });
    } catch (e) {
      console.log(e);
    }
    dispatch(getAllFeedbacks(id));

    setIsOpen(false);
  };

  useEffect(() => {
    dispatch(getAllFeedbacks(id));
  }, []);

  const { hospital } = useSelector(({ clinic }) => clinic.feedbacks);
  console.log(hospital);
  return (
    <div className="space-y-7">
      <ClinicCard {...hospital} />
      <div>
        <List
          styleList="rounded-t-lg"
          className="p-2.5 max-h-[400px]"
          header={
            <div className="w-full flex flex-row">
              <NavLink
                to=""
                end
                className={({ isActive }) =>
                  clsx(
                    "w-1/2 flex justify-center font-medium text-lg focus:text-[#3A57E8]",
                    isActive && "text-[#3A57E8]"
                  )
                }
              >
                Doctors
              </NavLink>
              <NavLink
                to="feedback"
                className={({ isActive }) =>
                  clsx(
                    "w-1/2 flex justify-center font-medium text-lg focus:text-[#3A57E8]",
                    isActive && "text-[#3A57E8]"
                  )
                }
              >
                Feedback
              </NavLink>
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
      {role === "HOSPITAL_ADMIN" && (
        <Modal
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          handleSubmit={handleSubmit}
          ratingRef={ratingRef}
          feedbackRef={feedbackRef}
        >
          <div>
            <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
              <StarIcon className="h-6 w-6 text-green-600" aria-hidden="true" />
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
      )}
    </div>
  );
};

const ClinicCard = ({ name, rate, address, phone, city }) => {
  console.log(name, rate, address, phone, city);
  const dispatch = useDispatch();
  const user = useSelector(({ user }) => user.me);
  const [citys, setCity] = useState([]);
  const role = localStorage.getItem("role");

  const { id } = useParams();

  // useEffect(() => {
  //   async function fetch() {
  //     dispatch(getDoctorsWithHospitalId(id));
  //   }
  //
  //   if (!user.firstName && user.hospitalId) {
  //     fetch().then();
  //   }
  //   fetchCity();
  // }, [dispatch, id]);

  return (
    <div
      className={clsx(
        "flex shadow my-3 bg-white flex-col rounded-lg",
        "sm:flex-row"
      )}
    >
      <img
        src={photo_clinic}
        className={clsx("w-full", "sm:w-[215px]")}
        alt="clinic_photo"
      />
      <div
        className={clsx(
          "p-4 flex space-y-5 flex-col",
          "xl:divide-x-2 xl:flex-row"
        )}
      >
        <div className="flex px-4 flex-col flex-grow-0">
          <h4 className="font-medium text-lg leading-8">{name}</h4>
          <p className="font-normal text-[12px] text-gray-400">
            "Многопрофильная клиника Alanda Clinic (Аланда Клиник) Астана
            проспект Тауелсыздык 33 – контакты, телефоны, график работы и отзывы
            в каталоге медицинского"
          </p>
          <div className="flex justify-end items-center flex-row space-x-1.5">
            <StarIcon className="text-[#3A57E8] w-5" />
            {rate}
          </div>
        </div>
        <hr />
        <div className="flex px-4 flex-col flex-grow shrink-0 space-y-3">
          <div className="flex flex-row space-x-1.5 flex-grow items-center justify-start">
            <PhoneIcon className="w-5 text-[#3A57E8]" />
            {phone}
          </div>
          <div className="flex w-[240px] flex-row space-x-1.5 flex-grow items-center justify-start">
            <LocationMarkerIcon className="w-5 text-[#3A57E8]" />
            <div>
              <p>{address}</p>
              <p>{city.name}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
