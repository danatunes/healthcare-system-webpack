import React from "react";
import BgDoctors from "../../images/bg_doctors.webp";
import { Button } from "../../ui/button/button";
import clsx from "clsx";

export const HeadingMainPage = () => {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center space-y-12">
      <div className={clsx("grid grid-cols-1 align-middle", "sm:grid-cols-2")}>
        <div className="flex flex-col justify-center space-y-10">
          <h1 className="text-2xl font-bold">
            Virtual healthcare
            <br />
            for you
          </h1>
          <p className="text-sm font-light text-[#7D7987]">
            Healthcare system provides progressive, and affordable
            <br />
            healthcare, accessible on mobile and online
            <br />
            for everyone
          </p>
          <Button
            name="Consult today"
            style="bg-[#3A57E8] rounded-3xl h-12 font-bold text-sm"
          />
        </div>
        <div className={clsx("hidden", "sm:block")}>
          <img src={BgDoctors} alt="bg-doctor" />
        </div>
      </div>
      <div className="flex flex-col items-center justify-center space-y-5">
        <h1 className="text-base font-bold">Our services</h1>
        <hr className="h-0.5 w-[44px] bg-black" />
        <p className="flex flex-col items-center text-sm font-light text-[#7D7987]">
          We provide to you the best choiches for you. Adjust it to your health
          needs and make sure your undergo treatment with
          <p className="text-sm font-light text-[#7D7987]">
            our highly qualified doctors you can consult with us which type of
            service is suitable for your health
          </p>
        </p>
      </div>
    </div>
  );
};
