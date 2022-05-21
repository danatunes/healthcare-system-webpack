import { NavLink, useParams } from "react-router-dom";
import { DoctorCard } from "../../../../components";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getDoctorsWithHospitalId } from "../../../../redux/actions/doctors";

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
  return (
    <>
      {doctors &&
        doctors.map((doctor) => (
          <NavLink key={`/doctors/${doctor.id}`} to={`/doctors/${doctor.id}`}>
            <DoctorCard key={doctor.id} {...doctor} />
          </NavLink>
        ))}
    </>
  );
};
