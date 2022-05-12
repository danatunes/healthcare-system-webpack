import React from "react";
import { InputWithBottomBorder } from "../../../ui/inputs/inputWithBottomBorder";
import { Button } from "../../../ui/button/button";

export const ResetPassword = () => {
  return (
    <div className="flex h-full flex-col items-center justify-center space-y-10">
      <div className="flex flex-col items-center justify-center space-y-4">
        <h1 className="text-4xl font-medium">Reset Password</h1>
        <p className="flex flex-col items-center justify-center text-[#8A92A6]">
          Enter your email address and we’ll send you an email with
          <p> instructions to reset your password</p>
        </p>
        <InputWithBottomBorder name="Email" style="w-64" />
      </div>
      <Button name="Reset" />
    </div>
  );
};
