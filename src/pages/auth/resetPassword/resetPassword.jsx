import React, { useRef, useState } from "react";
import { InputWithBottomBorder } from "../../../ui/inputs/inputWithBottomBorder";
import { Button } from "../../../ui/button/button";
import { toast } from "react-toastify";
import { publicRequest } from "../../../api/requestMethods";
import { useNavigate } from "react-router-dom";

export const ResetPassword = () => {
  const [redirect, setRedirect] = useState("");
  const emailRef = useRef(null);
  const codeRef = useRef(null);
  const passwordRef = useRef(null);
  const rePasswordRef = useRef(null);
  const navigate = useNavigate();

  const requestForCode = async () => {
    if (emailRef.current.value) {
      try {
        await publicRequest
          .post("/api/v1/auth/create-code/?email=" + emailRef.current.value)
          .then(() => {
            toast(
              `Code sended to your mail ${emailRef.current.value} please check spam`,
              {
                type: "success",
                position: "top-right",
              }
            );
            setRedirect("code");
          });
      } catch (e) {
        console.log(e);
        toast(
          e.response.data.message + " please write right email" ||
            e.message ||
            "Please check credentials",
          {
            type: "error",
            position: "top-right",
          }
        );
      }
    }
  };

  const requestCheckCode = async () => {
    if (emailRef.current.value && codeRef.current.value) {
      try {
        await publicRequest
          .post(
            `/api/v1/auth/check-code/?email=${emailRef.current.value}&code=${codeRef.current.value}`
          )
          .then(() => {
            toast(
              "Please enter your new password for " + emailRef.current.value,
              {
                type: "success",
                position: "top-right",
              }
            );
            setRedirect("password");
          });
      } catch (e) {
        console.log(e);
        toast(
          e.response.data.message + " wrong code" ||
            e.message ||
            "Please check credentials",
          {
            type: "error",
            position: "top-right",
          }
        );
      }
    }
  };

  const requestChangePassword = async () => {
    if (
      emailRef.current.value &&
      passwordRef.current.value &&
      rePasswordRef.current.value
    ) {
      try {
        await publicRequest
          .put("/api/v1/auth/reset-password/", {
            email: emailRef.current.value,
            password: passwordRef.current.value,
            rePassword: rePasswordRef.current.value,
          })
          .then(() => {
            toast("Succesfully changed", {
              type: "success",
              position: "top-right",
            });
            navigate("/login");
          });
      } catch (e) {
        console.log(e);
        toast(
          e.response.data.message +
            " please write valid password example: asd12ASD!@" ||
            e.message ||
            "Please check credentials",
          {
            type: "error",
            position: "top-right",
          }
        );
      }
    }
  };

  return (
    <div className="flex h-full flex-col items-center justify-center space-y-10">
      <div className="flex flex-col items-center justify-center space-y-4">
        <h1 className="text-4xl font-medium">Reset Password</h1>
        <p className="flex flex-col items-center justify-center text-[#8A92A6]">
          Enter your email address and we’ll send you an email with
          <p> instructions to reset your password</p>
        </p>
        <InputWithBottomBorder
          reference={emailRef}
          type="email"
          name="Email"
          placeholder="Email"
          style="w-64"
        />
        {redirect === "code" && (
          <InputWithBottomBorder
            reference={codeRef}
            type="text"
            name="Code"
            placeholder="code from email"
            style="w-64"
          />
        )}
        {redirect === "password" && (
          <>
            <InputWithBottomBorder
              reference={passwordRef}
              type="password"
              name="password"
              placeholder="password"
              style="w-64"
            />
            <InputWithBottomBorder
              reference={rePasswordRef}
              type="password"
              name="rePassword"
              placeholder="Confirm password"
              style="w-64"
            />
          </>
        )}
      </div>
      {redirect === "" && (
        <Button name="Reset" onClick={() => requestForCode()} />
      )}
      {redirect === "code" && (
        <Button name="Send code" onClick={() => requestCheckCode()} />
      )}
      {redirect === "password" && (
        <Button name="Change" onClick={() => requestChangePassword()} />
      )}
    </div>
  );
};
