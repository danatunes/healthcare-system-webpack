import React, { useEffect, useRef, useState } from "react";
import { publicRequest } from "../../../../api/requestMethods";
import { PlusCircleIcon } from "@heroicons/react/solid";
import { Block } from "../../../../components/admin-blocks";
import { Modal } from "../../../../ui/modal/modal";
import { Dialog } from "@headlessui/react";
import { List } from "../../../../components";
import { AcademicCapIcon } from "@heroicons/react/outline";
import Loader from "../../../../ui/loader/loader";

export const Specializations = () => {
  const [allSpecialities, setAllSpecialities] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const cancelButtonRef = useRef(null);
  const nameRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await publicRequest
        .post(
          "/api/v1/specialization/add",
          {
            name: nameRef.current.value,
          },
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        )
        .then(() => {
          getAllSpecializations();
        });
    } catch (e) {
      console.log(e);
    }
    setIsOpen(false);
  };

  async function getAllSpecializations() {
    try {
      await publicRequest
        .get("/api/v1/specialization/get-all", {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
        .then((res) => {
          setAllSpecialities(res.data);
        });
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    getAllSpecializations();
  }, []);

  console.log(allSpecialities);

  return (
    <List
      className="max-h-[500px]"
      styleList="rounded-xl w-full"
      header={
        <div className="flex flex-row justify-between">
          <h3 className="font-medium text-xl">Specializations</h3>
          <div
            onClick={() => setIsOpen(true)}
            className="flex cursor-pointer flex-row justify-between items-center space-x-5"
          >
            <PlusCircleIcon className="w-7 text-[#3A57E8]" />
            <p className="font-bold text-lg text-[#3A57E8]">
              Add specializations
            </p>
          </div>
        </div>
      }
    >
      {allSpecialities ? (
        allSpecialities.map((specialities) => (
          <Block
            heading1="Name"
            heading1Content={specialities.name}
            requestUrlForDelete={`/api/v1/specialization/delete/${specialities.id}`}
            updateFunction={getAllSpecializations}
          />
        ))
      ) : (
        <Loader />
      )}
      <Modal setIsOpen={setIsOpen} isOpen={isOpen} handleSubmit={handleSubmit}>
        <div>
          <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
            <AcademicCapIcon
              className="h-6 w-6 text-green-600"
              aria-hidden="true"
            />
          </div>
          <div className="mt-3 text-center sm:mt-5">
            <Dialog.Title
              as="h3"
              className="text-lg leading-6 font-medium text-gray-900"
            >
              Add Specialization
            </Dialog.Title>
            <div className="mt-2 flex flex-col space-y-4">
              <label
                htmlFor="name"
                className="flex flex-col text-gray-500 text-md items-start"
              >
                Name :
                <input
                  type="text"
                  id="name"
                  ref={nameRef}
                  className="w-full rounded-md"
                />
              </label>
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
