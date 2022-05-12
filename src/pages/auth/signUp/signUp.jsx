import React from "react";
import { InputWithBottomBorder } from "../../../ui/inputs/inputWithBottomBorder";
import { LoginIntegration } from "../../../components";
import { Button } from "../../../ui/button/button";
import clsx from "clsx";

export const SignUp = () => {
  const dataForUI = [
    {
      id: "firstName",
      name: "First Name",
      type: "text",
    },
    {
      id: "lastName",
      name: "Last Name",
      type: "text",
    },
    {
      id: "email",
      name: "Email",
      type: "email",
    },
    {
      id: "iin",
      name: "IIN",
      type: "text",
    },
    {
      id: "password",
      name: "Password",
      type: "password",
    },
    {
      id: "confirmPassword",
      name: "Confirm Password",
      type: "password",
    },
  ];

  const handleSignUp = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const requestData = Object.fromEntries(formData);
    console.log(requestData);
    // axios.get("/api/signup");
  };

  return (
    <form onSubmit={handleSignUp}>
      <div className="flex flex-col items-center justify-center space-y-2">
        <h1 className="items-center text-4xl font-medium text-black">
          Sign Up
        </h1>
        <p className="text-[#8A92A6]">Create your account</p>
      </div>
      <div className={clsx("grid grid-cols-1 gap-3", "md:grid-cols-2")}>
        {dataForUI.map((item) => (
          <InputWithBottomBorder
            key={item.id}
            id={item.id}
            name={item.name}
            type={item.type}
            placeholder={item.name}
          />
        ))}
      </div>
      <div className="flex flex-col items-center mt-4 justify-center space-y-5">
        <div className="flex w-full items-center justify-center space-x-2">
          <input type="checkbox" className="border-0" />
          <p className="text-[#8A92A6]">I agree with the terms of use</p>
        </div>
        <Button name="Sign up" type="submit" />
        <p className="text-black">or sign up with other accounts?</p>
        <LoginIntegration />
        <p className="text-black">
          Already have an Account
          <a className="text-[#458FF6]" href="#">
            Sign in
          </a>
        </p>
      </div>
    </form>
  );
};
