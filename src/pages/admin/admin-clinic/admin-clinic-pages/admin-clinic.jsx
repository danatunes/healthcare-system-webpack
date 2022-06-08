import { List } from "../../../../components";
import { PlusCircleIcon } from "@heroicons/react/solid";
import { Block } from "../../../../components/admin-blocks";
import {
  HomeIcon,
  LocationMarkerIcon,
  PhoneIcon,
  StarIcon,
  UserAddIcon,
  UserGroupIcon,
} from "@heroicons/react/outline";
import { Dialog } from "@headlessui/react";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import clsx from "clsx";
import photo_clinic from "../../../../images/example_photo_clinic.png";
import Loader from "../../../../ui/loader/loader";
import { Button } from "../../../../ui/button/button";
import { Modal } from "../../../../ui/modal/modal";
import { Datalist } from "../../../../ui/datalist/datalist";
import { publicRequest } from "../../../../api/requestMethods";
import { toast } from "react-toastify";
import { getDoctorsWithHospitalId } from "../../../../redux/actions/doctors";

export const AdminClinic = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [specializations, setSpecializations] = useState([]);
  const cancelButtonRef = useRef(null);
  const emailRef = useRef(null);
  const firstRef = useRef(null);
  const lastRef = useRef(null);
  const fatherNameRef = useRef(null);
  const phoneRef = useRef(null);
  const specializationIdRef = useRef(null);
  const passwordRef = useRef(null);
  const rePasswordRef = useRef(null);
  const genderRef = useRef(null);
  const dateOfBirthdayRef = useRef(null);
  const experienceRef = useRef(null);
  const descriptionRef = useRef(null);
  const [hospital, setHospital] = useState(null);

  const dispatch = useDispatch();

  const { hospitalId } = useSelector(({ user }) => user.currentUser);
  const { doctors } = useSelector(({ doctors }) => doctors.doctors);

  const handleSubmit = async (e) => {
    e.preventDefault();

    let id;

    specializations.find((specialization) => {
      if (specialization.name === specializationIdRef.current.value) {
        id = specialization.id;
      }
    });

    const data = {
      email: emailRef.current.value,
      gender: genderRef.current.value,
      dateOfBirth: dateOfBirthdayRef.current.value,
      experience: experienceRef.current.value,
      description: descriptionRef.current.value,
      firstName: firstRef.current.value,
      lastName: lastRef.current.value,
      fatherName: fatherNameRef.current.value,
      phoneNumber: parseInt(phoneRef.current.value),
      specializationId: parseInt(id),
      password: passwordRef.current.value,
      rePassword: rePasswordRef.current.value,
    };

    try {
      await publicRequest.post("/api/v1/auth/registration/doctor", data, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      });
    } catch (e) {
      console.log(e);
    }
    dispatch(getDoctorsWithHospitalId(hospitalId));
    setIsOpen(false);
  };

  const getClinic = async () => {
    try {
      await publicRequest
        .get(`/api/v1/hospital/get/${hospitalId}`, {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        })
        .then((res) => {
          setHospital(res.data);
        });
    } catch (e) {
      console.log(e);
    }
  };

  async function fetchDoctors() {
    dispatch(getDoctorsWithHospitalId(hospitalId));
  }

  const getSpezializations = async () => {
    try {
      const response = await publicRequest.get(
        "/api/v1/specialization/get-all",
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      );
      setSpecializations(response.data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getClinic();
    fetchDoctors().then();
    getSpezializations();
  }, []);

  const modalUI = [
    {
      id: "email",
      ref: emailRef,
      name: "Email",
      type: "text",
    },
    {
      id: "firstName",
      ref: firstRef,
      name: "First Name",
      type: "text",
    },
    {
      id: "lastName",
      ref: lastRef,
      name: "Last Name",
      type: "text",
    },
    {
      id: "fatherName",
      ref: fatherNameRef,
      name: "Father Name",
      type: "text",
    },
    {
      id: "dateOfBirthday",
      ref: dateOfBirthdayRef,
      name: "Date of Birthday",
      type: "date",
    },
    {
      id: "specializationId",
      ref: specializationIdRef,
      name: "Specialization",
      type: "datalist",
    },
    {
      id: "experience",
      ref: experienceRef,
      name: "Experience",
      type: "text",
    },
    {
      id: "description",
      ref: descriptionRef,
      name: "Description",
      type: "text",
    },
    {
      id: "phone",
      ref: phoneRef,
      name: "Phone",
      type: "number",
    },
    {
      id: "password",
      ref: passwordRef,
      name: "Password",
      type: "password",
    },
    {
      id: "rePassword",
      ref: rePasswordRef,
      name: "Confirm Password",
      type: "password",
    },
  ];

  return (
    <>
      {hospital && doctors ? (
        <div className="space-y-7">
          <ClinicCard hospital={hospital} getClinic={getClinic} />
          <List
            styleList="rounded-xl w-full"
            header={
              <div className="flex flex-row justify-between">
                <h3 className="font-medium text-xl">Doctor</h3>
                <div
                  onClick={() => setIsOpen(true)}
                  className="flex cursor-pointer flex-row justify-between items-center space-x-5"
                >
                  <PlusCircleIcon className="w-7 text-[#3A57E8]" />
                  <p className="font-bold text-lg text-[#3A57E8]">
                    Add new doctor
                  </p>
                </div>
              </div>
            }
          >
            {doctors.length !== 0 ? (
              doctors.map((doctor) => (
                <Block
                  updateFunction={fetchDoctors}
                  doctor={doctor}
                  requestUrlForDelete={`api/v1/admin/delete/doctor/${doctor.id}`}
                  additionalButtons={true}
                  requestUrlForEdit={`api/v1/admin/update/${doctor.id}`}
                  heading1="Name"
                  heading1Content={
                    doctor.user.firstName + " " + doctor.user.lastName
                  }
                  heading2="Specialization"
                  heading2Content={doctor.specialization.name}
                />
              ))
            ) : (
              <div className="w-full flex text-gray-400 flex-col p-10 items-center justify-center">
                No Doctors
                <UserGroupIcon className="w-11 text-gray-400" />
              </div>
            )}
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
                    Add new Doctor
                  </Dialog.Title>
                  <div className="mt-2 flex flex-col space-y-4">
                    {modalUI.map((item) => (
                      <label
                        htmlFor={item.id}
                        className="flex flex-col text-gray-500 text-md items-start"
                      >
                        {item.name} :
                        <input
                          ref={item.ref}
                          type={item.type}
                          max="2022-05-31"
                          required={true}
                          id={item.id}
                          autoComplete="off"
                          list={
                            item.type === "datalist" ? `${item.id}_list` : null
                          }
                          className="w-full rounded-md min-h-[50px] border-2 border-gray-300"
                        />
                        <Datalist
                          data={specializations}
                          id="specializationId_list"
                        />
                      </label>
                    ))}
                  </div>
                  <label
                    htmlFor="gender"
                    className="flex flex-col mt-4 text-gray-500 text-md items-start"
                  >
                    Gender
                    <select
                      ref={genderRef}
                      name="gender"
                      id="gender"
                      className="w-full rounded-md min-h-[50px] border-2 border-gray-300"
                    >
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Other">Other</option>
                    </select>
                  </label>
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
          </List>
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
};

const ClinicCard = ({ hospital, getClinic }) => {
  const dispatch = useDispatch();
  const user = useSelector(({ user }) => user.currentUser);
  const [isOpen, setIsOpen] = useState(false);
  const cancelButtonRef = useRef(null);
  const nameRef = useRef(null);
  const phoneRef = useRef(null);
  const addressRef = useRef(null);
  const descriptionRef = useRef(null);
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

  useEffect(() => {
    async function fetch() {
      dispatch(getDoctorsWithHospitalId(hospital.id));
    }

    fetchCity();
  }, [dispatch, hospital.id]);

  if (user.me === "HOSPITAL_ADMIN") {
    return <Loader />;
  }

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
      description: descriptionRef.current.value,
      address: addressRef.current.value,
      cityId: parseInt(cityId),
    };

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
    getClinic(hospital.id);
    setIsOpen(false);
  };

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
        <div className="flex px-4 flex-col">
          <h4 className="font-medium text-lg leading-8">{hospital.name}</h4>
          <p className="font-normal text-[12px] text-gray-400">
            "Многопрофильная клиника Alanda Clinic (Аланда Клиник) Астана
            проспект Тауелсыздык 33 – контакты, телефоны, график работы и отзывы
            в каталоге медицинского"
          </p>
          <div className="flex justify-end items-center flex-row space-x-1.5">
            <StarIcon className="text-[#3A57E8] w-5" />
            {Math.round(hospital.rate * 10) / 10}
          </div>
        </div>
        <hr />
        <div className="flex px-4 flex-col space-y-3">
          <div className="flex flex-row space-x-1.5 items-center justify-start">
            <PhoneIcon className="w-5 text-[#3A57E8]" />
            {hospital.phone}
          </div>
          <div className="flex flex-row space-x-1.5 items-center justify-start">
            <LocationMarkerIcon className="shrink-0 w-5 text-[#3A57E8]" />
            <div>
              <p>{hospital.address}</p>
              <p>{hospital.city.name}</p>
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
                  htmlFor="description"
                  className="flex flex-col text-gray-500 text-md items-start"
                >
                  Phone :
                  <textarea
                    id="description"
                    ref={descriptionRef}
                    defaultValue="Многопрофильная клиника Alanda Clinic (Аланда Клиник) Астана проспект Тауелсыздык 33 – контакты, телефоны, график работы и отзывы в каталоге медицинского"
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
                {/*<Datalist data={city} id="datalist_id" />*/}
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
