import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { ChevronDownIcon, SearchIcon, UserIcon } from "@heroicons/react/solid";
import clsx from "clsx";
import { Menu, Transition } from "@headlessui/react";
import { useDispatch, useSelector } from "react-redux";
import userLogo from "../../images/user_icon.png";
import { logout } from "../../redux/actions/user";

export const Header = () => {
  const user = useSelector(({ user }) => user.currentUser);
  const dispatch = useDispatch();

  const logOut = () => {
    dispatch(logout());
  };

  return (
    <div
      className={clsx(
        "flex w-full flex-row items-center justify-evenly space-x-2",
        "md:justify-end md:space-x-8 md:flex-row"
      )}
    >
      <div className="mt-1 relative rounded-md shadow-sm">
        <input
          type="text"
          name="account-number"
          id="account-number"
          className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pr-10 sm:text-sm border-black rounded-md"
          placeholder="Search"
        />
        <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
          <SearchIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
        </div>
      </div>
      {user ? (
        <>
          <Link
            to="/main"
            onClick={logOut}
            className={clsx("text-sm hidden", "sm:block")}
          >
            Sign out
          </Link>
          <Link
            to="patient"
            className={clsx(
              "text-sm hidden items-center justify-center",
              "sm:flex sm:flex-row sm:space-x-2"
            )}
          >
            <p>{`${user.firstName} ${user.lastName}`}</p>
            <img src={userLogo} alt="user" className="w-11" />
          </Link>
        </>
      ) : (
        <>
          <Link to="/login" className={clsx("text-sm hidden", "sm:block")}>
            Sign In
          </Link>
          <Link to="/sign-up" className={clsx("text-sm hidden", "sm:block")}>
            Registration
          </Link>
        </>
      )}
      <DropDown />
    </div>
  );
};

const DropDown = () => {
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
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};
