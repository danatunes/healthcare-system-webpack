import { Link } from "react-router-dom";
import clsx from "clsx";
import { HeadingProfile, LastNotificationList } from "../../../../components";

export const DoctorProfile = () => {
  return (
    <>
      <HeadingProfile name="Dr. Vin Diesel!" />
      <div className={clsx("grid grid-cols-1 gap-5", "sm:grid-cols-2")}>
        <ConsultingCart type="Offline" when="Today" count="10" />
        <ConsultingCart type="Online" when="Today" count="6" />
      </div>
      <LastNotificationList className="py-4 px-2.5" isDoctor={true} />
    </>
  );
};

const ConsultingCart = ({ type, when, count }) => {
  return (
    <div className="flex flex-col bg-white rounded-xl shadow-lg p-3 justify-between">
      <div className="font-normal">
        <h1 className="text-xl">{type} Consultation</h1>
        <p className="text-sm text-gray-400">{when}</p>
      </div>
      <div className="flex flex-row justify-between items-end mt-12">
        <p className="font-normal text-5xl text-[#3A57E8]">{count}</p>
        <Link to="#" className="font-normal text-sm text-end">
          View All
        </Link>
      </div>
    </div>
  );
};
