import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { ChevronDownIcon, UserIcon } from "@heroicons/react/solid";
import clsx from "clsx";
import { Menu, Transition } from "@headlessui/react";
import { useDispatch, useSelector } from "react-redux";
import userLogo from "../../images/user_icon.png";
import { logout } from "../../redux/actions/user";
import logo from "../../images/bg_doctors.webp";
import logo_word from "../../images/logo_word.png";

export const Header = () => {
  const user = useSelector(({ user }) => user.currentUser);
  const me = useSelector(({ user }) => user.me);
  const dispatch = useDispatch();

  const logOut = () => {
    dispatch(logout());
  };

  return (
    <div
      className={clsx(
        "fixed z-10 flex w-full py-3 shadow-md px-10 bg-white rounded-md flex-row items-center justify-evenly space-x-2",
        "md:justify-between md:space-x-8 md:flex-row"
      )}
    >
      <Link to="/main" className="flex flex-row">
        <img src={logo} alt="" className={clsx("w-14", "sm:w-16")} />
        <img src={logo_word} alt="" className={clsx("w-24", "sm:w-w-28")} />
      </Link>
      <div className="flex flex-row space-x-8 items-center">
        {user ? (
          <>
            {!user.role ? (
              <>
                <Link
                  to="/admin"
                  className={clsx(
                    "text-sm hidden px-3 py-2 bg-blue-100 rounded-md",
                    "sm:block"
                  )}
                >
                  Global Admin
                </Link>
                <div
                  className={clsx(
                    "text-sm hidden items-center px-3 py-1 bg-blue-100 rounded-md justify-center",
                    "sm:flex sm:flex-row sm:space-x-2"
                  )}
                >
                  <p className="">
                    {user.role === "PATIENT"
                      ? `${me.user.firstName} ${me.user.lastName}`
                      : user.role === "DOCTOR"
                      ? "DOCTOR"
                      : "ADMIN"}
                  </p>
                  <img src={userLogo} alt="user" className="w-7" />
                </div>
              </>
            ) : (
              <>
                {user.role === "HOSPITAL_ADMIN" && (
                  <Link
                    to="/admin-clinic"
                    className={clsx(
                      "text-sm hidden px-3 py-2 bg-blue-100 rounded-md",
                      "sm:block"
                    )}
                  >
                    Admin Clinic Panel
                  </Link>
                )}
                {user.role === "PATIENT" && (
                  <Link
                    to="/patient/clinic"
                    className={clsx(
                      "text-sm hidden px-3 py-2 bg-blue-100 rounded-md",
                      "sm:block"
                    )}
                  >
                    Clinic
                  </Link>
                )}
                {user.role === "PATIENT" ? (
                  <Link
                    to="patient"
                    className={clsx(
                      "text-sm hidden items-center px-3 py-1 bg-blue-100 rounded-md justify-center",
                      "sm:flex sm:flex-row sm:space-x-2"
                    )}
                  >
                    <p className="">
                      {me && `${me.user.firstName} ${me.user.lastName}`}
                    </p>
                    <img src={userLogo} alt="user" className="w-7" />
                  </Link>
                ) : user.role === "DOCTOR" ? (
                  <Link
                    to="/doctor/profile"
                    className={clsx(
                      "text-sm hidden items-center px-3 py-1 bg-blue-100 rounded-md justify-center",
                      "sm:flex sm:flex-row sm:space-x-2"
                    )}
                  >
                    <p className="">
                      {me && `Doctor ${me.user.firstName} ${me.user.lastName}`}
                    </p>
                    <img src={userLogo} alt="user" className="w-7" />
                  </Link>
                ) : (
                  <div
                    className={clsx(
                      "text-sm hidden items-center px-3 py-1 bg-blue-100 rounded-md justify-center",
                      "sm:flex sm:flex-row sm:space-x-2"
                    )}
                  >
                    <p className="">ADMIN</p>
                    <img src={userLogo} alt="user" className="w-7" />
                  </div>
                )}
              </>
            )}
            <Link
              to="/main"
              onClick={logOut}
              className={clsx(
                "text-sm hidden px-3 py-2 bg-red-100 rounded-md",
                "sm:block"
              )}
            >
              Sign out
            </Link>
          </>
        ) : (
          <>
            <Link
              to="/login"
              className={clsx(
                "text-sm hidden px-3 py-1 bg-blue-100 rounded-md",
                "sm:block"
              )}
            >
              Sign In
            </Link>
            <Link
              to="/sign-up"
              className={clsx(
                "text-sm hidden px-3 py-1 bg-blue-100 rounded-md",
                "sm:block"
              )}
            >
              Registration
            </Link>
          </>
        )}
      </div>
      <DropDown user={user} logout={logOut} />
    </div>
  );
};

const DropDown = ({ user, logout }) => {
  return (
    <Menu
      as="div"
      className={clsx(
        "mt-1 relative h-full inline-block text-left",
        "sm:hidden"
      )}
    >
      <div className="h-full">
        <Menu.Button className="inline-flex justify-center min-h-[42px] h-full w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500">
          <UserIcon className="w-5 h-5" />
          <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            {user ? (
              <>
                <Menu.Item>
                  {({ active }) => (
                    <Link
                      to="/main"
                      onClick={logout}
                      className={clsx(
                        active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                        "block px-4 py-2 text-sm"
                      )}
                    >
                      Sign out
                    </Link>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <Link
                      to="/patient"
                      className={clsx(
                        active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                        "block px-4 py-2 text-sm"
                      )}
                    >
                      Profile
                    </Link>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <Link
                      to="/patient/clinic"
                      className={clsx(
                        active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                        "block px-4 py-2 text-sm"
                      )}
                    >
                      Clinic
                    </Link>
                  )}
                </Menu.Item>
              </>
            ) : (
              <>
                <Menu.Item>
                  {({ active }) => (
                    <Link
                      to="/login"
                      className={clsx(
                        active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                        "block px-4 py-2 text-sm"
                      )}
                    >
                      Sign in
                    </Link>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <Link
                      to="/sign-up"
                      className={clsx(
                        active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                        "block px-4 py-2 text-sm"
                      )}
                    >
                      Registration
                    </Link>
                  )}
                </Menu.Item>
              </>
            )}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};
