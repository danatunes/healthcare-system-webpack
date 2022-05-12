import React from "react";
import GoogleIcon from "../../images/google_icon.webp";
import FacebookIcon from "../../images/facebook_icon.webp";
import InstagramIcon from "../../images/instagram_icon.webp";
import LinkedinIcon from "../../images/linkedin_icon.webp";

export const LoginIntegration = () => {
  return (
    <div className="flex space-x-5 w-full justify-center">
      <img className="w-6" src={GoogleIcon} alt="" />
      <img className="w-6" src={FacebookIcon} alt="" />
      <img className="w-6" src={InstagramIcon} alt="" />
      <img className="w-6" src={LinkedinIcon} alt="" />
    </div>
  );
};
