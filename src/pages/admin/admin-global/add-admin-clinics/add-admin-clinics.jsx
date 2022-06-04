import { List } from "../../../../components";
import { PlusCircleIcon } from "@heroicons/react/solid";
import { Block } from "../../../../components/admin-blocks";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Modal } from "../../../../ui/modal/modal";
import { UserAddIcon } from "@heroicons/react/outline";
import { Dialog } from "@headlessui/react";
import { publicRequest } from "../../../../api/requestMethods";

export const AddAdminClinics = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [admins, setAdmins] = useState([]);
  const { clinics } = useSelector(({ clinic }) => clinic);

  const dispatch = useDispatch();
  const cancelButtonRef = useRef(null);
  const emailRef = useRef(null);
  const firstRef = useRef(null);
  const lastRef = useRef(null);
  const fatherNameRef = useRef(null);
  const ageRef = useRef(null);
  const genderRef = useRef(null);
  const phoneRef = useRef(null);
  const hospitalIdRef = useRef(null);
  const passwordRef = useRef(null);
  const rePasswordRef = useRef(null);

  const getClinicAdmins = async () => {
    try {
      await publicRequest
        .get("/api/v1/admin/get/hospitalAdmins", {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
        .then((res) => {
          setAdmins(res.data);
        });
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getClinicAdmins();
  }, [dispatch]);

  const modalUI = [
    {
      id: "email",
      ref: emailRef,
      name: "Email",
      type: "text",
    },
    {
      id: "firstName",
      ref: firstRef,
      name: "First Name",
      type: "text",
    },
    {
      id: "lastName",
      ref: lastRef,
      name: "Last Name",
      type: "text",
    },
    {
      id: "fatherName",
      ref: fatherNameRef,
      name: "Father Name",
      type: "text",
    },
    {
      id: "age",
      ref: ageRef,
      name: "Age",
      type: "text",
    },
    {
      id: "phone",
      ref: phoneRef,
      name: "Phone",
      type: "text",
    },
    {
      id: "password",
      ref: passwordRef,
      name: "Password",
      type: "password",
    },
    {
      id: "rePassword",
      ref: rePasswordRef,
      name: "Confirm Password",
      type: "password",
    },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(clinics);
    const data = {
      email: emailRef.current.value,
      firstName: firstRef.current.value,
      lastName: lastRef.current.value,
      age: ageRef.current.value,
      gender: genderRef.current.value,
      fatherName: fatherNameRef.current.value,
      phoneNumber: parseInt(phoneRef.current.value),
      hospitalId: parseInt(hospitalIdRef.current.value),
      password: passwordRef.current.value,
      rePassword: rePasswordRef.current.value,
    };

    try {
      await publicRequest.post(
        "/api/v1/auth/registration/hospitalAdmin",
        data,
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      );
    } catch (e) {
      console.log(e);
    }
    getClinicAdmins();
    console.log(data);
    setIsOpen(false);
  };

  return (
    <List
      styleList="rounded-xl w-full"
      header={
        <div className="flex flex-row justify-between">
          <h3 className="font-medium text-xl">Hospital Admin</h3>
          <div
            onClick={() => setIsOpen(true)}
            className="flex flex-row cursor-pointer justify-between items-center space-x-5"
          >
            <PlusCircleIcon className="w-7 text-[#3A57E8]" />
            <p className="font-bold text-lg text-[#3A57E8]">Add new Admin</p>
          </div>
        </div>
      }
    >
      {admins.map((admin) => (
        <Block
          key={admin.user.id}
          heading1="Name"
          heading1Content={`${admin.user.firstName}  ${admin.user.lastName}`}
          heading2="Hospital"
          heading2Content={admin.hospital.name}
        />
      ))}
      <Modal setIsOpen={setIsOpen} isOpen={isOpen} handleSubmit={handleSubmit}>
        <div>
          <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
            <UserAddIcon
              className="h-6 w-6 text-green-600"
              aria-hidden="true"
            />
          </div>
          <div className="mt-3 text-center sm:mt-5">
            <Dialog.Title
              as="h3"
              className="text-lg leading-6 font-medium text-gray-900"
            >
              Add new Admin for Hospital
            </Dialog.Title>
            <div className="mt-2 flex flex-col space-y-4">
              <label
                htmlFor="img"
                className="flex flex-col text-gray-500 text-md items-start"
              >
                Photo :
                <input type="file" id="img" className="w-full rounded-md" />
              </label>
              <div className="grid grid-cols-2 gap-x-4">
                {modalUI.map((item) => (
                  <label
                    htmlFor={item.id}
                    className="flex flex-col text-gray-500 text-md items-start"
                  >
                    {item.name} :
                    <input
                      ref={item.ref}
                      type={item.type}
                      id={item.id}
                      autoComplete="off"
                      list={item.type === "datalist" ? `${item.id}_list` : null}
                      className="w-full rounded-md min-h-[50px] border-2 border-gray-300"
                    />
                  </label>
                ))}
                <select
                  name="gender"
                  id="gender"
                  ref={genderRef}
                  className="mt-1 min-w-[250px] border-t-0 border-r-0 border-l-0 bg-none border-b border-black focus-within:border-indigo-600"
                >
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
                <label
                  htmlFor="hospital_select_id"
                  className="flex flex-col text-gray-500 text-md items-start"
                >
                  Hospital :
                  <select
                    name="hospital"
                    ref={hospitalIdRef}
                    className="w-full rounded-md min-h-[50px] border-2 border-gray-300"
                    id="hospital_select_id"
                  >
                    {clinics.map((clinic) => (
                      <option
                        value={clinic.id}
                      >{`${clinic.name}, ${clinic.city.name}`}</option>
                    ))}
                  </select>
                </label>
              </div>
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
    </List>
  );
};
