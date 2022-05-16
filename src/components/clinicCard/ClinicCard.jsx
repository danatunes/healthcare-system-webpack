import {
  LocationMarkerIcon,
  PhoneIcon,
  StarIcon,
} from "@heroicons/react/outline";
import clsx from "clsx";
import photo_clinic from "../../images/example_photo_clinic.png";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getDoctorsWithHospitalId } from "../../redux/actions/doctors";
import { useEffect } from "react";
import Loader from "../../ui/loader/loader";

export const ClinicCard = ({ name, rating, address }) => {
  const dispatch = useDispatch();

  const { id } = useParams();

  const { hospital } = useSelector((state) => state.doctor.doctors);

  useEffect(() => {
    async function fetch() {
      dispatch(getDoctorsWithHospitalId(id));
    }

    fetch().then();
  }, [id]);

  return (
    <div
      className={clsx(
        "flex shadow my-3 bg-white flex-col rounded-lg",
        "sm:flex-row"
      )}
    >
      {hospital ? (
        <>
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
              <h4 className="font-medium text-lg leading-8">{hospital.name}</h4>
              <p className="font-normal text-[12px] text-gray-400">
                "Многопрофильная клиника Alanda Clinic (Аланда Клиник) Астана
                проспект Тауелсыздык 33 – контакты, телефоны, график работы и
                отзывы в каталоге медицинского"
              </p>
              <div className="flex justify-end items-center flex-row space-x-1.5">
                <StarIcon className="text-[#3A57E8] w-5" />
                <p>{hospital.rate}</p>
              </div>
            </div>
            <hr />
            <div className="flex px-4 flex-col flex-grow shrink-0">
              <div className="flex flex-row space-x-1.5 flex-grow items-center justify-start">
                <PhoneIcon className="w-5 text-[#3A57E8]" />
                <p>{hospital.phone}</p>
              </div>
              <div className="flex flex-row space-x-1.5 flex-grow items-center justify-start">
                <LocationMarkerIcon className="w-5 text-[#3A57E8]" />
                <p>{hospital.address}</p>
                <br />
                <p>{hospital.city.name}</p>
              </div>
            </div>
          </div>
        </>
      ) : (
        <Loader />
      )}
    </div>
  );
};
