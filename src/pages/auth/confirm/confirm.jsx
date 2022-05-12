import React from "react";
import confirmPhoto from "../../../images/Success_Register.png";
import { Button } from "../../../ui/button/button";

export const Confirm = () => {
  return (
    <div className="max-w-[600px] flex flex-col items-center space-y-8 font-inter">
      <div className="space-y-4 items-center flex flex-col">
        <img src={confirmPhoto} alt="confirm photo" className="w-[86px]" />
        <h1 className="font-inter font-bold text-6xl text-[#3A57E8]">
          Success !
        </h1>
        <div className="flex flex-col items-center">
          <p>
            A email has been send to your email@domain.com. Please check for an
          </p>
          <p>email from company and click on the included link to reset your</p>
          <p>password.</p>
        </div>
      </div>
      <Button name="Back to Sign In" />
    </div>
  );
};
