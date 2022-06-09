import { Button } from "../../ui/button/button";
import { UserAddIcon } from "@heroicons/react/outline";
import { Dialog } from "@headlessui/react";
import { Modal } from "../../ui/modal/modal";
import React, { useRef, useState } from "react";
import { publicRequest } from "../../api/requestMethods";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";

export const Block = ({
  doctor,
  updateFunction,
  additionalButtons,
  requestUrlForDelete,
  requestUrlForEdit,
  heading1,
  heading1Content,
  heading2,
  heading2Content,
  heading3,
  heading3Content,
}) => {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const cancelButtonRef = useRef(null);
  const emailRef = useRef(null);
  const firstRef = useRef(null);
  const lastRef = useRef(null);
  const descRef = useRef(null);
  const expRef = useRef(null);
  const fatherNameRef = useRef(null);
  const dateOfBirthDayRef = useRef(null);
  const genderRef = useRef(null);
  const phoneRef = useRef(null);

  console.log(doctor);

  const modalUI = [
    {
      id: "email",
      ref: emailRef,
      defaultValue: doctor && doctor.user.email,
      name: "Email",
      type: "text",
    },
    {
      id: "firstName",
      ref: firstRef,
      defaultValue: doctor && doctor.user.firstName,
      name: "First Name",
      type: "text",
    },
    {
      id: "lastName",
      ref: lastRef,
      defaultValue: doctor && doctor.user.lastName,
      name: "Last Name",
      type: "text",
    },
    {
      id: "fatherName",
      ref: fatherNameRef,
      defaultValue: doctor && doctor.user.fatherName,
      name: "Father Name",
      type: "text",
    },
    {
      id: "dateOfBirthday",
      ref: dateOfBirthDayRef,
      defaultValue: doctor && doctor.user.dateOfBirth,
      name: "Date of Birthday",
      type: "date",
    },
    {
      id: "phone",
      ref: phoneRef,
      defaultValue: doctor && doctor.user.phoneNumber,
      name: "Phone",
      type: "number",
    },
    {
      id: "description",
      ref: descRef,
      name: "Description",
      defaultValue: doctor && doctor.description,
      type: "text",
    },
    {
      id: "experience",
      ref: expRef,
      defaultValue: doctor && doctor.experience,
      name: "Experience",
      type: "number",
    },
  ];

  const onDelete = async () => {
    try {
      await publicRequest
        .delete(requestUrlForDelete, {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        })
        .then((res) => {
          toast("Deleted successfully", {
            type: "success",
            position: "top-right",
          });
          updateFunction();
        });
    } catch (e) {
      toast(e.message, {
        type: "error",
        position: "top-right",
      });
    }
  };

  const handleSubmitEdit = async (e) => {
    e.preventDefault();
    const data = {
      email: emailRef.current.value,
      firstName: firstRef.current.value,
      lastName: lastRef.current.value,
      fatherName: fatherNameRef.current.value,
      phoneNumber: phoneRef.current.value,
      description: descRef.current.value,
      experience: expRef.current.value,
      gender: genderRef.current.value,
      dateOfBirth: dateOfBirthDayRef.current.value,
    };
    try {
      await publicRequest
        .put(requestUrlForEdit, data, {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        })
        .then(() => {
          toast("Edited successfully", {
            type: "success",
            position: "top-right",
          });
          updateFunction();
        });
    } catch (e) {
      toast(e.response.data.message || e.message, {
        type: "error",
        position: "top-right",
      });
    }
    setIsOpen(false);
  };

  return (
    <div className="flex flex-row justify-between items-center py-2 px-4 min-h-[65px] rounded-xl bg-white my-2 mx-4">
      <div className="flex flex-row space-x-8 items-center">
        <TextBlock fieldHeader={heading1} content={heading1Content} />
        <TextBlock fieldHeader={heading2} content={heading2Content} />
        {heading3 && (
          <TextBlock fieldHeader={heading3} content={heading3Content} />
        )}
      </div>
      <div className="space-x-4">
        {additionalButtons && (
          <Button
            name="Edit"
            onClick={() => setIsOpen(true)}
            style="w-20 rounded-3xl bg-blue-600"
          />
        )}
        <Button
          name="Delete"
          onClick={() => onDelete()}
          style="w-20 rounded-3xl bg-red-600"
        />
      </div>
      {doctor && (
        <Modal
          setIsOpen={setIsOpen}
          isOpen={isOpen}
          handleSubmit={handleSubmitEdit}
        >
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
                Edit doctor
              </Dialog.Title>
              <div className="mt-2 flex flex-col space-y-4">
                <div className="grid grid-cols-2 gap-x-4">
                  {modalUI.map((item) => (
                    <label
                      htmlFor={item.id}
                      className="flex flex-col mt-1 text-gray-500 text-md items-start"
                    >
                      <p>
                        {item.name} : {item.pattern && <span>87056537575</span>}
                      </p>
                      <input
                        ref={item.ref}
                        type={item.type}
                        required={true}
                        id={item.id}
                        defaultValue={
                          item.defaultValue && `${item.defaultValue}`
                        }
                        autoComplete="off"
                        max="2022-05-31"
                        className="w-full rounded-md min-h-[50px] border-2 border-gray-300"
                      />
                    </label>
                  ))}
                  <label
                    htmlFor="gender"
                    className="flex flex-col text-gray-500 w-full text-md items-start"
                  >
                    Gender :
                    <select
                      name="gender"
                      id="gender"
                      ref={genderRef}
                      className="min-w-[250px] w-full rounded-md min-h-[50px] border-2 border-gray-300 focus-within:border-indigo-600"
                    >
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Other">Other</option>
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
      )}
    </div>
  );
};

const TextBlock = ({ fieldHeader, content }) => {
  return (
    <div className="flex flex-col text-center w-[160px] h-fit justify-start items-center">
      <p className="opacity-40 text-sm">{fieldHeader}</p>
      <p className="text-md">{content}</p>
    </div>
  );
};
