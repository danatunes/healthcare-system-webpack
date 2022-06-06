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
  requestUrl,
  heading1,
  heading1Content,
  heading2,
  heading2Content,
  heading3,
  heading3Content,
}) => {
  const dispatch = useDispatch();

  const onDelete = async () => {
    try {
      await publicRequest
        .delete(requestUrl, {
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

  return (
    <div className="flex flex-row justify-between items-center py-2 px-4 min-h-[65px] rounded-xl bg-white my-2 mx-4">
      <div className="flex flex-row space-x-8 items-center">
        <TextBlock
          fieldHeader={heading1}
          // doctor={doctor}
          content={heading1Content}
        />
        <TextBlock fieldHeader={heading2} content={heading2Content} />
        {heading3 && (
          <TextBlock fieldHeader={heading3} content={heading3Content} />
        )}
      </div>
      <div className="space-x-4">
        {additionalButtons && additionalButtons}
        <Button
          name="Delete"
          onClick={() => onDelete()}
          style="w-20 rounded-3xl bg-red-600"
        />
      </div>
    </div>
  );
};

const TextBlock = ({ fieldHeader, content, doctor }) => {
  const [isOpen, setIsOpen] = useState(false);
  const cancelButtonRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  return (
    <>
      <>
        <div className="flex flex-col text-center w-[160px] h-fit justify-start items-center">
          <p className="opacity-40 text-sm">{fieldHeader}</p>
          <p className="text-md">{content}</p>
        </div>
        <Modal
          setIsOpen={setIsOpen}
          isOpen={isOpen}
          handleSubmit={handleSubmit}
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
                Delete doctor
              </Dialog.Title>

              <div className="mt-2 flex flex-col space-y-4">
                <p className="text-sm">
                  {/*Are you sure you want to delete doctor {doctor.firstName}?*/}
                </p>
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
      </>
    </>
  );
};
