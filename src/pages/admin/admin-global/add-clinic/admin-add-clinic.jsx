import { List } from "../../../../components";
import { PlusCircleIcon } from "@heroicons/react/solid";
import { Block } from "../../../../components/admin-blocks";
import { Modal } from "../../../../ui/modal/modal";
import { Dialog } from "@headlessui/react";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { HomeIcon } from "@heroicons/react/outline";
import { Datalist } from "../../../../ui/datalist/datalist";
import { publicRequest } from "../../../../api/requestMethods";
import { toast } from "react-toastify";
import { getAllClinics } from "../../../../redux/actions/clinic";

export const AdminAddClinic = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const cancelButtonRef = useRef(null);
  const [city, setCity] = useState([]);
  const { clinics } = useSelector(({ clinic }) => clinic);

  const handleSubmit = async (e) => {
    e.preventDefault();
    let cityId;
    city.find((item) => {
      if (item.name === cityRef.current.value) {
        cityId = item.id;
      }
    });

    //trim().replace(/[^0-9]+/, "")
    const data = {
      name: nameRef.current.value,
      description: descRef.current.value,
      phone: parseInt(phoneRef.current.value),
      address: addressRef.current.value,
      cityId: parseInt(cityId),
    };

    try {
      await publicRequest.post("/api/v1/hospital/add", data, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      });
    } catch (e) {
      console.log(e);
    }
    dispatch(getAllClinics());

    setIsOpen(false);
  };

  const nameRef = useRef();
  const descRef = useRef();
  const phoneRef = useRef();
  const addressRef = useRef();
  const cityRef = useRef();

  const modalUI = [
    {
      id: "name",
      ref: nameRef,
      name: "Name",
      type: "text",
    },
    {
      id: "description",
      ref: descRef,
      name: "Description",
      type: "text",
    },
    {
      id: "phone",
      ref: phoneRef,
      name: "Phone",
      type: "number",
    },
    {
      id: "address",
      ref: addressRef,
      name: "Address",
      type: "text",
    },
    {
      id: "city",
      ref: cityRef,
      name: "City",
      type: "datalist",
    },
  ];

  useEffect(() => {
    fetch().then();
  }, []);

  async function fetch() {
    try {
      const responseCity = await publicRequest("/api/v1/city/get-all");
      setCity(responseCity.data);
    } catch (e) {
      if (e.message) {
        toast(e.message, {
          type: "error",
          theme: "light",
        });
      }
    }
  }

  console.log(clinics);

  return (
    <List
      className="max-h-[500px]"
      styleList="rounded-xl w-full"
      header={
        <div className="flex flex-row justify-between">
          <h3 className="font-medium text-xl">Hospital</h3>
          <div
            onClick={() => setIsOpen(true)}
            className="flex cursor-pointer flex-row justify-between items-center space-x-5"
          >
            <PlusCircleIcon className="w-7 text-[#3A57E8]" />
            <p className="font-bold text-lg text-[#3A57E8]">Add new hospital</p>
          </div>
        </div>
      }
    >
      {clinics.map((clinic) => (
        <Block
          heading1="Name"
          heading1Content={clinic.name}
          requestUrlForDelete={`/api/v1/hospital/delete/${clinic.id}`}
          heading2="Address"
          heading2Content={`${clinic.address}, ${clinic.city.name}`}
          heading3="Phone"
          heading3Content={clinic.phone}
        />
      ))}
      <Modal setIsOpen={setIsOpen} isOpen={isOpen} handleSubmit={handleSubmit}>
        <div>
          <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
            <HomeIcon className="h-6 w-6 text-green-600" aria-hidden="true" />
          </div>
          <div className="mt-3 text-center sm:mt-5">
            <Dialog.Title
              as="h3"
              className="text-lg leading-6 font-medium text-gray-900"
            >
              Add new Hospital
            </Dialog.Title>
            <div className="mt-2 flex flex-col space-y-4">
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
                  <Datalist data={city} id="city_list" />
                </label>
              ))}
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
