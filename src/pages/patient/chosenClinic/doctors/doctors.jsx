import { NavLink, useParams } from "react-router-dom";
import { DoctorCard } from "../../../../components";
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";
import { getDoctorsWithHospitalId } from "../../../../redux/actions/doctors";
import { UserGroupIcon } from "@heroicons/react/outline";

export const Doctors = () => {
  const { doctors } = useSelector(({ doctors }) => doctors.doctors);
  console.log(doctors);
  const dispatch = useDispatch();

  const { id } = useParams();

  useEffect(() => {
    async function fetch() {
      dispatch(getDoctorsWithHospitalId(id));
    }

    // if (!user.firstName && user.hospitalId) {
    fetch().then();
    // }
    // fetchCity();
  }, [dispatch, id]);

  // const doctors = useMemo(
  //   () => [
  //     {
  //       id: "1",
  //       name: "Dr. Паленше",
  //       specialist: "Urologist",
  //       experience: "5 años",
  //       rating: 4.8,
  //     },
  //     {
  //       id: "2",
  //       name: "Dr. Тугенше",
  //       specialist: "Urologist",
  //       experience: "5 años",
  //       rating: 4.8,
  //     },
  //     {
  //       id: "3",
  //       name: "Dr. Аслан",
  //       specialist: "Oftalmología",
  //       experience: "5 años",
  //       rating: 4.8,
  //     },
  //     {
  //       id: "4",
  //       name: "Dr. Жандос",
  //       specialist: "Oftalmología",
  //       experience: "5 años",
  //       rating: 4.8,
  //     },
  //   ],
  //   []
  // );
  console.log(doctors, "doctors rate");
  return (
    <>
      {doctors && doctors.length > 0 ? (
        doctors.map((doctor, index) => (
          <NavLink key={`/doctors/${doctor.id}`} to={`/doctors/${doctor.id}`}>
            <DoctorCard
              key={doctor.id}
              {...doctor}
              rate={doctors[index].rate}
            />
          </NavLink>
        ))
      ) : (
        <div className="w-full flex text-gray-400 flex-col p-10 items-center justify-center">
          No Doctors
          <UserGroupIcon className="w-11 text-gray-400" />
        </div>
      )}
    </>
  );
};
