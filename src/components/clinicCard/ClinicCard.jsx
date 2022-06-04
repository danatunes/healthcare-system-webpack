import {
  HomeIcon,
  LocationMarkerIcon,
  PhoneIcon,
  StarIcon,
} from "@heroicons/react/outline";
import clsx from "clsx";
import photo_clinic from "../../images/example_photo_clinic.png";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getDoctorsWithHospitalId } from "../../redux/actions/doctors";
import React, { useEffect, useRef, useState } from "react";
import Loader from "../../ui/loader/loader";
import { Button } from "../../ui/button/button";
import { Modal } from "../../ui/modal/modal";
import { Dialog } from "@headlessui/react";
import { Datalist } from "../../ui/datalist/datalist";
import { publicRequest } from "../../api/requestMethods";
import { toast } from "react-toastify";

export const ClinicCard = ({ name, rate, address, phone, city }) => {
  console.log(name, rate, address, phone, city);
  const dispatch = useDispatch();
  const user = useSelector(({ user }) => user.me);
  const [isOpen, setIsOpen] = useState(false);
  const cancelButtonRef = useRef(null);
  const nameRef = useRef(null);
  const phoneRef = useRef(null);
  const addressRef = useRef(null);
  const cityRef = useRef(null);
  const [citys, setCity] = useState([]);
  const role = localStorage.getItem("role");

  async function fetchCity() {
    try {
      const responseCity = await publicRequest("/api/v1/city/get-all");
      setCity(responseCity.data);
    } catch (e) {
      if (e.message) {
        toast(e.message, {
          type: "error",
          theme: "light",
        });
      }
    }
  }

  const { id } = useParams();

  // if (localStorage.getItem("role") === "HOSPITAL_ADMIN") {
  const { hospital } = useSelector((state) => state.doctors.doctors);
  // }

  useEffect(() => {
    async function fetch() {
      dispatch(getDoctorsWithHospitalId(id));
    }

    if (!user.firstName && user.hospitalId) {
      fetch().then();
    }
    fetchCity();
  }, [dispatch, id]);

  if (user.me === "HOSPITAL_ADMIN") {
    return <Loader />;
  }

  console.log(hospital, "hospital");

  const handleSubmit = async (e) => {
    e.preventDefault();
    let cityId;
    citys.find((item) => {
      if (item.name === cityRef.current.value) {
        cityId = item.id;
      }
    });
    const data = {
      name: nameRef.current.value,
      phone: phoneRef.current.value,
      address: addressRef.current.value,
      cityId: parseInt(cityId),
    };
    console.log(data);

    try {
      await publicRequest.put(
        "/api/v1/hospital/update/" + user.hospitalId,
        data,
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      );
    } catch (e) {
      console.log(e);
    }
    dispatch(getDoctorsWithHospitalId(user.hospitalId));
    setIsOpen(false);
  };

  console.log(hospital);
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
          <div className="flex flex-row space-x-1.5 flex-grow items-center justify-start">
            <LocationMarkerIcon className="w-5 text-[#3A57E8]" />
            <div>
              {hospital === undefined && (
                <>
                  <p>{address}</p>
                  <p>{city}</p>
                </>
              )}
            </div>
          </div>
          {user.role ? (
            <Button name="Edit" onClick={() => setIsOpen(true)} />
          ) : (
            ""
          )}
        </div>
      </div>
      {role === "HOSPITAL_ADMIN" && (
        <Modal
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          handleSubmit={handleSubmit}
        >
          <div>
            <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
              <HomeIcon className="h-6 w-6 text-green-600" aria-hidden="true" />
            </div>
            <div className="mt-3 text-center sm:mt-5">
              <Dialog.Title
                as="h3"
                className="text-lg leading-6 font-medium text-gray-900"
              >
                Edit Hospital
              </Dialog.Title>
              <div className="mt-2 flex flex-col space-y-4">
                <label
                  htmlFor="name"
                  className="flex flex-col text-gray-500 text-md items-start"
                >
                  Name :
                  <input
                    type="text"
                    id="name"
                    defaultValue={hospital.name}
                    ref={nameRef}
                    autoComplete="off"
                    className="w-full rounded-md min-h-[50px] border-2 border-gray-300"
                  />
                </label>
                <label
                  htmlFor="address"
                  className="flex flex-col text-gray-500 text-md items-start"
                >
                  Address :
                  <input
                    type="text"
                    ref={addressRef}
                    id="address"
                    defaultValue={hospital.address}
                    autoComplete="off"
                    className="w-full rounded-md min-h-[50px] border-2 border-gray-300"
                  />
                </label>
                <label
                  htmlFor="phone"
                  className="flex flex-col text-gray-500 text-md items-start"
                >
                  Phone :
                  <input
                    type="text"
                    id="phone"
                    ref={phoneRef}
                    defaultValue={hospital.phone}
                    autoComplete="off"
                    className="w-full rounded-md min-h-[50px] border-2 border-gray-300"
                  />
                </label>
                <label
                  htmlFor="city"
                  className="flex flex-col text-gray-500 text-md items-start"
                >
                  City :
                  <input
                    type="datalist"
                    ref={cityRef}
                    id="city"
                    autoComplete="off"
                    defaultValue={hospital.city.name}
                    list="datalist_id"
                    className="w-full rounded-md min-h-[50px] border-2 border-gray-300"
                  />
                </label>
                <Datalist data={city} id="datalist_id" />
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
