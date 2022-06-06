import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";
import { Fragment, useEffect, useState } from "react";
import clsx from "clsx";

export const DropDown = ({ children, heading, status }) => {
  const [statusColor, setStatusColor] = useState("");
  console.log(status);
  useEffect(() => {
    colorOfStatus();
  }, [status]);

  const colorOfStatus = () => {
    switch (status) {
      case "ENGAGED": {
        setStatusColor("bg-[#3A57E8]");
        break;
      }
      case "FINISHED": {
        setStatusColor("bg-green-600");
        break;
      }
      default: {
        setStatusColor("bg-red-600");
        break;
      }
    }
  };

  return (
    <Menu as="div" className="relative w-full inline-block text-left">
      <div>
        <Menu.Button className="flex min-h-[60px] justify-between items-center w-full rounded-md shadow-md px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500">
          <div className="flex flex-row items-center space-x-3.5">
            <div className={clsx("w-2.5 h-2.5 rounded-3xl " + statusColor)} />
            <h1 className="font-normal text-lg">{heading}</h1>
          </div>
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
        <Menu.Items className="w-full mt-2 rounded-md shadow-md	bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-4 px-10 overflow-x-auto">{children}</div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};
