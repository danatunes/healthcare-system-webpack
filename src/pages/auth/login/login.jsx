import React from "react";
import { InputWithBottomBorder } from "../../../ui/inputs/inputWithBottomBorder";
import { LoginIntegration } from "../../../components";
import { Button } from "../../../ui/button/button";
import clsx from "clsx";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { login } from "../../../redux/actions/user";
import "react-toastify/dist/ReactToastify.css";

export const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isFetching, error, currentUser, me } = useSelector(
    (state) => state.user
  );

  const handleSignIn = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const requestData = Object.fromEntries(formData);
    dispatch(login(requestData));
  };

  if (!isFetching && !error && currentUser !== null) {
    const role = localStorage.getItem("role");
    console.log(role === "undefined");
    switch (role) {
      case "DOCTOR": {
        navigate("/doctor/profile");
        break;
      }
      case "PATIENT": {
        navigate("/patient/clinic");
        break;
      }
      case "HOSPITAL_ADMIN": {
        navigate("/admin-clinic");
        break;
      }
      default: {
        navigate("/admin");
      }
    }
  }

  return (
    <form onSubmit={handleSignIn} className="space-y-2">
      <div className="flex flex-col items-center justify-center space-y-2">
        <h1 className="items-center text-4xl font-medium text-black">
          Sign In
        </h1>
        <p className="text-[#8A92A6]">Sign in to stay connected.</p>
      </div>
      <div className={clsx("grid grid-cols-1 gap-3 w-[300px]", "sm:w-[430px]")}>
        <InputWithBottomBorder
          autoComplete="on"
          key="email"
          id="email"
          type="email"
          placeholder="Email"
          name="email"
          style="w-full"
        />
        <InputWithBottomBorder
          autoComplete="on"
          key="password"
          id="password"
          type="password"
          placeholder="Password"
          name="password"
          style="w-full"
        />
      </div>
      <div className="flex flex-col items-center justify-center space-y-5">
        <div className="flex w-full flex-row justify-between space-x-2">
          <div className="flex items-center space-x-2">
            <input type="checkbox" className="border-0 rounded-md" />
            <p className="text-[#8A92A6]">Remember me?</p>
          </div>
          <a href="#" className="text-[#458FF6]">
            Forgot Password
          </a>
        </div>
        <Button name="Sign in" disabled={isFetching} type="submit" />
        <p className="text-black">or sign in with other accounts?</p>
        <LoginIntegration />
        <p className="text-black">
          Don’t have an account?{" "}
          <NavLink className="text-[#458FF6]" to="/sign-up">
            Click here to sign up.
          </NavLink>
        </p>
      </div>
    </form>
  );
};
