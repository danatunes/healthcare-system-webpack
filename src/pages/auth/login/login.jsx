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
  const { isFetching, error, currentUser } = useSelector((state) => state.user);

  const handleSignIn = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const requestData = Object.fromEntries(formData);
    dispatch(login(requestData));
  };

  if (!isFetching && !error && currentUser !== null) {
    navigate("/patient/clinic");
  }
  // useEffect(() => {
  //   if (error) {
  //     console.log(error, "error");
  //     toast("Please check credentials", {
  //       type: "error",
  //       theme: "light",
  //     });
  //   }
  // }, [error]);

  return (
    <form onSubmit={handleSignIn} className="space-y-2">
      <div className="flex flex-col items-center justify-center space-y-2">
        <h1 className="items-center text-4xl font-medium text-black">
          Sign In
        </h1>
        <p className="text-[#8A92A6]">Sign in to stay connected.</p>
      </div>
      <div className={clsx("grid grid-cols-1 gap-3 w-[300px]", "sm:w-[430px]")}>
        {/*{error && <p className="text-red-700">Something went wrong...</p>}*/}
        <InputWithBottomBorder
          autoComplete="off"
          key="email"
          id="email"
          type="email"
          placeholder="Email"
          name="email"
          style="w-full"
        />
        <InputWithBottomBorder
          autoComplete="off"
          key="password"
          id="password"
          type="text"
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
