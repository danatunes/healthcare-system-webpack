import { ClinicCard, List } from "../../../components";
import { Suspense, useEffect, useMemo, useState } from "react";
import photo_clinic from "../../../images/example_photo_clinic.png";
import { NavLink, Outlet, useParams } from "react-router-dom";
import clsx from "clsx";
import Loader from "../../../ui/loader/loader";

export const ChosenClinic = () => {
  const data = useMemo(
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
    []
  );

  const { id } = useParams();

  const [clinic, setClinic] = useState("");
  useEffect(() => {
    setClinic(data.find((clinic) => clinic.id === id));
  }, [id]);

  return (
    <div className="space-y-7">
      <ClinicCard {...clinic} />
      <List
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
    </div>
  );
};
