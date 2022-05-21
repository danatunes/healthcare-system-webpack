import { List } from "../../../components";
import {
  FilterIcon,
  LocationMarkerIcon,
  PhoneIcon,
  StarIcon,
} from "@heroicons/react/outline";
import photo_clinic from "../../../images/example_photo_clinic.png";
import React, { Fragment, useEffect, useMemo, useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, Transition } from "@headlessui/react";
import clsx from "clsx";
import { useDispatch, useSelector } from "react-redux";
import { getAllClinics } from "../../../redux/actions/clinic";
import { SearchIcon } from "@heroicons/react/solid";
import Loader from "../../../ui/loader/loader";

export const PatientClinics = () => {
  const clinics = useSelector(({ clinic }) => clinic.clinics);
  const dispatch = useDispatch();

  console.log(clinics);

  useEffect(() => {
    dispatch(getAllClinics());
  }, []);

  const sortByRating = (isRating) => {
    if (isRating) {
      setData((prevState) => [
        ...prevState.sort((a, b) => b.rating - a.rating),
      ]);
      return;
    }
    setData(dataByDefault);
  };

  const dataByDefault = useMemo(
    () => [
      {
        id: "1",
        name: "Clinica de la salud",
        img: photo_clinic,
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisi vel consectetur iaculis, nisl nunc aliquet nunc, eget egestas nisl nunc eget nisl. Nullam euismod, nisi vel consectetur iaculis, nisl nunc aliquet nunc, eget egestas nisl nunc eget nisl.",
        rating: 4,
        address: "Calle de la salud, 1, Madrid",
      },
      {
        id: "2",
        name: "Clinica de la salud",
        img: photo_clinic,
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisi vel consectetur iaculis, nisl nunc aliquet nunc, eget egestas nisl nunc eget nisl. Nullam euismod, nisi vel consectetur iaculis, nisl nunc aliquet nunc, eget egestas nisl nunc eget nisl.",
        rating: 2,
        address: "Calle de la salud, 1, Madrid",
      },
      {
        id: "3",
        name: "Clinica de la salud",
        img: photo_clinic,
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisi vel consectetur iaculis, nisl nunc aliquet nunc, eget egestas nisl nunc eget nisl. Nullam euismod, nisi vel consectetur iaculis, nisl nunc aliquet nunc, eget egestas nisl nunc eget nisl.",
        rating: 1,
        address: "Calle de la salud, 1, Madrid",
      },
      {
        id: "4",
        name: "Clinica de la salud",
        img: photo_clinic,
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisi vel consectetur iaculis, nisl nunc aliquet nunc, eget egestas nisl nunc eget nisl. Nullam euismod, nisi vel consectetur iaculis, nisl nunc aliquet nunc, eget egestas nisl nunc eget nisl.",
        rating: 3.5,
        address: "Calle de la salud, 1, Madrid",
      },
      {
        id: "5",
        name: "Clinica de la salud",
        img: photo_clinic,
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisi vel consectetur iaculis, nisl nunc aliquet nunc, eget egestas nisl nunc eget nisl. Nullam euismod, nisi vel consectetur iaculis, nisl nunc aliquet nunc, eget egestas nisl nunc eget nisl.",
        rating: 4.8,
        address: "Calle de la salud, 1, Madrid",
      },
      {
        id: "6",
        name: "Clinica de la salud",
        img: photo_clinic,
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisi vel consectetur iaculis, nisl nunc aliquet nunc, eget egestas nisl nunc eget nisl. Nullam euismod, nisi vel consectetur iaculis, nisl nunc aliquet nunc, eget egestas nisl nunc eget nisl.",
        rating: 4.2,
        address: "Calle de la salud, 1, Madrid",
      },
      {
        id: "7",
        name: "Clinica de la salud",
        img: photo_clinic,
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisi vel consectetur iaculis, nisl nunc aliquet nunc, eget egestas nisl nunc eget nisl. Nullam euismod, nisi vel consectetur iaculis, nisl nunc aliquet nunc, eget egestas nisl nunc eget nisl.",
        rating: 5,
        address: "Calle de la salud, 1, Madrid",
      },
    ],
    [sortByRating]
  );

  const [data, setData] = useState(dataByDefault);
  console.log(clinics);
  if (!clinics) return <Loader />;
  console.log(clinics, "clinics");

  return (
    <div>
      <div
        className={clsx(
          "flex flex-row justify-start items-center pb-7",
          "sm:pr-7"
        )}
      >
        <div
          className={clsx(
            "flex flex-col w-full space-y-2",
            "sm:space-y-0 sm:w-3/4 sm:flex-row sm:justify-between"
          )}
        >
          <h1 className="text-2xl font-medium">Clinics</h1>
          <div
            className={clsx(
              "flex flex-row items-center space-x-3 w-full",
              "sm:w-2/3"
            )}
          >
            <div className="mt-1 w-full relative z-0 rounded-md shadow-sm">
              <input
                type="text"
                name="account-number"
                id="account-number"
                className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pr-10 sm:text-sm border-black rounded-md"
                placeholder="Search"
              />
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                <SearchIcon
                  className="h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </div>
            </div>
            <Filter sortByRating={sortByRating} />
          </div>
        </div>
      </div>
      <List className="px-4 py-3 max-h-[500px]">
        {clinics.map((clinic) => (
          <NavLink to={`${clinic.id}`} key={`${clinic.id}`}>
            <ClinicCard key={clinic.id} {...clinic} />
          </NavLink>
        ))}
      </List>
    </div>
  );
};

const Filter = ({ sortByRating }) => {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="bg-gray-100 rounded-full flex items-center text-gray-400 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500">
          <span className="sr-only">Open options</span>
          <FilterIcon className="w-5 text-[#3A57E8]" />
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
        <Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <button
                  onClick={() => sortByRating(false)}
                  className={clsx(
                    active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                    "block w-full text-left px-4 py-2 text-sm"
                  )}
                >
                  By default
                </button>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <button
                  onClick={() => sortByRating(true)}
                  className={clsx(
                    active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                    "block w-full text-left px-4 py-2 text-sm"
                  )}
                >
                  By rating
                </button>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

const ClinicCard = ({ name, rate, address, phone, city }) => {
  console.log(name, rate, address, phone, city);
  const dispatch = useDispatch();
  const user = useSelector(({ user }) => user.me);
  const [citys, setCity] = useState([]);
  const role = localStorage.getItem("role");

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
