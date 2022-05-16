import React from "react";
import { FeaturesCard, HeadingMainPage } from "../../components";
import Bg_Decor_Plus from "../../images/bg_decor_plus.webp";
import Bg_Decor_Dots from "../../images/bg_decor_dots.webp";
import Bg_Decor_Area from "../../images/bg_decor_area.webp";
import clsx from "clsx";

export const MainLayout = () => {
  return (
    <>
      <img
        src={Bg_Decor_Plus}
        alt="decor"
        className={clsx(
          "absolute top-20 left-10 w-10",
          "md:left-40 md:w-12 md:top-30",
          "lg:left-40 lg:w-16 lg:top-30",
          "xl:left-40 xl:w-20 xl:top-32"
        )}
      />
      <img
        src={Bg_Decor_Dots}
        alt="decor"
        className="absolute left-10 top-56 w-24"
      />
      <img
        src={Bg_Decor_Area}
        alt="decor"
        className="absolute -left-10 top-[510px] -z-10 w-7/12"
      />
      <div className="h-full w-full space-y-20">
        <HeadingMainPage />
        <FeaturesCard />
      </div>
    </>
  );
};
