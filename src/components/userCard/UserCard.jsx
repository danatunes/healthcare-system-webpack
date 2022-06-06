import clsx from "clsx";
import { PencilAltIcon, UserIcon } from "@heroicons/react/outline";
import React, { useRef, useState } from "react";
import { Modal } from "../../ui/modal/modal";
import { InputWithBottomBorder } from "../../ui/inputs/inputWithBottomBorder";
import { Dialog } from "@headlessui/react";
import { toast } from "react-toastify";
import { publicRequest } from "../../api/requestMethods";
import { useDispatch } from "react-redux";
import { getMe } from "../../redux/actions/user";

export const UserCard = ({ userInformation }) => {
  const [isOpen, setIsOpen] = useState(false);

  console.log(userInformation);

  const role = localStorage.getItem("role");
  return (
    <div className="bg-white rounded-xl shadow-md">
      <div className={clsx("flex flex-col items-end", "sm:flex-row")}>
        <UserIcon
          className={clsx(
            "rounded-l-xl h-full w-56 bg-[#C4C4C4] text-white hidden",
            "xl:block"
          )}
        />
        <div className="py-3 px-8 space-y-3 w-full">
          <h4 className="text-xl leading-8">{`${userInformation.user.firstName} ${userInformation.user.lastName}`}</h4>
          <div className={clsx("flex flex-wrap space-y-2")}>
            {role === "DOCTOR" ? (
              <UserInformation
                label="Position"
                information={userInformation.role.name}
              />
            ) : (
              <UserInformation label="IIN" information={userInformation.iin} />
            )}
            <UserInformation
              label="Email"
              information={userInformation.user.email}
            />
            <UserInformation label="Role" information={role} />
            <UserInformation
              label="Date of Birth"
              information={userInformation.user.dateOfBirth}
            />
            <UserInformation
              label="Phone"
              information={userInformation.user.phoneNumber}
            />
            <UserInformation label="Insurance" information="YES" />
          </div>
        </div>
        <p
          onClick={() => setIsOpen(true)}
          className="text-[#3A57E8] text-sm mb-2 mr-2"
        >
          Edit
        </p>
      </div>
      <EditUserWindow
        setIsOpen={setIsOpen}
        isOpen={isOpen}
        userInformation={userInformation}
      />
    </div>
  );
};

const EditUserWindow = ({ setIsOpen, isOpen, userInformation }) => {
  const cancelButtonRef = useRef(null);
  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);
  const fatherNameRef = useRef(null);
  const emailRef = useRef(null);
  const phoneNumberRef = useRef(null);
  const genderRef = useRef(null);
  const dispatch = useDispatch();
  const [dateOfBirth, setDateOfBirth] = useState(
    userInformation.user.dateOfBirth
  );

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      firstName: firstNameRef.current.value,
      lastName: lastNameRef.current.value,
      fatherName: fatherNameRef.current.value,
      gender: genderRef.current.value,
      email: emailRef.current.value,
      phoneNumber: phoneNumberRef.current.value,
      dateOfBirth: dateOfBirth,
    };
    console.log(data);
    try {
      await publicRequest
        .put("/api/v1/patient/profile/update", data, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
        .then((res) => {
          toast("Profile updated successfully", {
            type: "success",
            position: "top-right",
          });
          dispatch(getMe());
        });
    } catch (e) {
      console.log(e);
      toast(e.message, {
        type: "error",
        position: "top-right",
      });
    }
    setIsOpen(false);
  };

  return (
    <Modal handleSubmit={handleSubmit} setIsOpen={setIsOpen} isOpen={isOpen}>
      <div>
        <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
          <PencilAltIcon
            className="h-6 w-6 text-green-600"
            aria-hidden="true"
          />
        </div>
        <div className="mt-3 text-center sm:mt-5">
          <Dialog.Title
            as="h3"
            className="text-lg leading-6 font-medium text-gray-900"
          >
            Edit Personal Information
          </Dialog.Title>
          <div className="mt-2 flex flex-col space-y-4">
            <InputWithBottomBorder
              placeholder="Last name"
              reference={lastNameRef}
              defaultValue={userInformation.user.lastName}
            />
            <InputWithBottomBorder
              placeholder="First name"
              reference={firstNameRef}
              defaultValue={userInformation.user.firstName}
            />
            <InputWithBottomBorder
              placeholder="Father name"
              reference={fatherNameRef}
              defaultValue={userInformation.user.fatherName}
            />
            <InputWithBottomBorder
              reference={emailRef}
              placeholder="email"
              defaultValue={userInformation.user.email}
            />
            <InputWithBottomBorder
              reference={phoneNumberRef}
              placeholder="Phone number"
              defaultValue={userInformation.user.phoneNumber}
            />
            <select
              name="gender"
              id="gender"
              ref={genderRef}
              className="rounded-lg"
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>

            <input
              type="date"
              name="begin"
              defaultValue={userInformation.user.dateOfBirth}
              placeholder="dd-mm-yyyy"
              value={dateOfBirth}
              className="rounded-lg"
              onChange={(e) => setDateOfBirth(e.target.value)}
              max="2022-05-31"
            />
          </div>
        </div>
      </div>
      <div className="mt-5 sm:mt-6 sm:grid sm:grid-cols-2 sm:gap-3 sm:grid-flow-row-dense">
        <button
          type="submit"
          className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:col-start-2 sm:text-sm"
        >
          Submit
        </button>
        <button
          type="button"
          className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:col-start-1 sm:text-sm"
          onClick={() => setIsOpen(false)}
          ref={cancelButtonRef}
        >
          Cancel
        </button>
      </div>
    </Modal>
  );
};

const UserInformation = ({ label, information }) => {
  return (
    <div
      className={clsx(
        "w-full flex flex-row justify-between flex-grow",
        "sm:w-1/3 sm:flex-col"
      )}
    >
      <p className={clsx("text-sm text-gray-400 mr-2", "sm:mr-0")}>{label}</p>
      <p className="text-md font-bold">{information}</p>
    </div>
  );
};
