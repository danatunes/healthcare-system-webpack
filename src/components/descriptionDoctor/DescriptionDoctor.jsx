import { useSelector } from "react-redux";
import Loader from "../../ui/loader/loader";

export const DescriptionDoctor = () => {
  const { doctor } = useSelector(({ doctor }) => doctor);

  return (
    <div className="p-7">
      {doctor.doctor.description ? doctor.doctor.description : <Loader />}
    </div>
  );
};
