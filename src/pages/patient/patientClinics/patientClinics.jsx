import { ClinicCard, List } from "../../../components";
import { FilterIcon } from "@heroicons/react/outline";
import photo_clinic from "../../../images/example_photo_clinic.png";
import { Fragment, useEffect, useMemo, useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, Transition } from "@headlessui/react";
import clsx from "clsx";
import { useDispatch, useSelector } from "react-redux";
import { getAllClinics } from "../../../redux/actions/clinic";
import { SearchIcon } from "@heroicons/react/solid";

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

  return (
    <div>
      <div className={clsx("flex flex-row justify-start items-center pb-7","sm:pr-7")}>
        <div className={clsx("flex flex-col w-full space-y-2","sm:space-y-0 sm:w-3/4 sm:flex-row sm:justify-between")}>
          <h1 className="text-2xl font-medium">Clinics</h1>
          <div className={clsx("flex flex-row items-center space-x-3 w-full","sm:w-2/3")}>
            <div className="mt-1 w-full relative z-0 rounded-md shadow-sm">
              <input
                type="text"
                name="account-number"
                id="account-number"
                className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pr-10 sm:text-sm border-black rounded-md"
                placeholder="Search"
              />
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                <SearchIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
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
