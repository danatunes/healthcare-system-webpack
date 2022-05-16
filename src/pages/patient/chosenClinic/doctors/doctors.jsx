import { NavLink } from "react-router-dom";
import { DoctorCard } from "../../../../components";
import { useSelector } from "react-redux";

export const Doctors = () => {
  const { doctors } = useSelector(({ doctors }) => doctors.doctors);

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
      {doctors.map((doctor) => (
        <NavLink key={`/doctors/${doctor.id}`} to={`/doctors/${doctor.id}`}>
          <DoctorCard key={doctor.id} {...doctor} />
        </NavLink>
      ))}
    </>
  );
};
