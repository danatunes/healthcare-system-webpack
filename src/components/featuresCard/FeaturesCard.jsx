import React, {useMemo} from "react";
import Consulting_icon from "../../images/consulting.webp";
import Search_icon from "../../images/searchIcon.webp";
import Pill_icon from "../../images/pill_icon.webp";
import Details_icon from "../../images/details_info.webp";
import Emergency_icon from "../../images/emergency_care.webp";
import Tracking_icon from "../../images/tracking.webp";
import clsx from "clsx";

export const FeaturesCard = () => {
  const servicesCardData = useMemo(
    () => [
      {
        id: 1,
        title: "Search doctor",
        desc: "Choose your doctor from thousands of specialist, general, and trusted hospitals",
        img: Search_icon,
      },
      {
        id: 2,
        title: "Online pharmacy",
        desc: "Buy  your medicines with our mobile application with a simple delivery system",
        img: Pill_icon,
      },
      {
        id: 3,
        title: "Consultation",
        desc: "Free consultation with our trusted doctors and get the best recomendations",
        img: Consulting_icon,
      },
      {
        id: 4,
        title: "Details info",
        desc: "Free consultation with our trusted doctors and get the best recomendations",
        img: Details_icon,
      },
      {
        id: 5,
        title: "Emergency care",
        desc:
          "You can get 24/7 urgent care for yourself or your children and your\n" +
          "lovely family",
        img: Emergency_icon,
      },
      {
        id: 6,
        title: "Tracking",
        desc: "Track and save your medical history and health data ",
        img: Tracking_icon,
      },
    ],
    []
  );

  return (
    <div className={clsx("grid grid-cols-1 gap-10","md:grid-cols-3","sm:grid-cols-2")}>
      {servicesCardData.map((data) => (
        <Card name={data.title} desc={data.desc} img={data.img} key={data.id} />
      ))}
    </div>
  );
};

const Card = ({ name, desc, img }) => {
  return (
    <div className="flex flex-col items-center justify-center space-y-8 rounded-3xl bg-white p-6">
      <img src={img} className="w-16" alt="img_service" />
      <div>
        <h3 className="text-md font-bold">{name}</h3>
        <p className="max-w-[250px] text-sm font-light text-[#7D7987]">
          {desc}
        </p>
      </div>
    </div>
  );
};
