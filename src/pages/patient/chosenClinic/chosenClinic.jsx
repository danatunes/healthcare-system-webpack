import { ClinicCard, List } from "../../../components";
import { Suspense, useEffect, useRef, useState } from "react";
import { NavLink, Outlet, useParams } from "react-router-dom";
import clsx from "clsx";
import Loader from "../../../ui/loader/loader";
import { getAllFeedbacks } from "../../../redux/actions/clinic";
import { useDispatch } from "react-redux";
import { Modal } from "../../../ui/modal/modal";
import { PlusCircleIcon } from "@heroicons/react/solid";
import { publicRequest } from "../../../api/requestMethods";

export const ChosenClinic = () => {
  const [hospital, setHospital] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();

  const ratingRef = useRef();
  const feedbackRef = useRef();

  const { id } = useParams();

  const handleSubmit = async (e) => {
    e.preventDefault();
    let newDate = new Date();
    let date = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();

    const data = {
      date: `${year}-${month < 10 ? `0${month}` : `${month}`}-${date}`,
      text: feedbackRef.current.value,
      rate: parseFloat(ratingRef.current.value),
    };
    console.log(data);

    try {
      await publicRequest.post("/api/v1/feedback/hospital/give/" + id, data, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      });
    } catch (e) {
      console.log(e);
    }
    dispatch(getAllFeedbacks(id));

    setIsOpen(false);
  };

  useEffect(() => {
    dispatch(getAllFeedbacks(id));
  }, []);

  return (
    <div className="space-y-7">
      <ClinicCard {...hospital} />
      <div>
        <List
          styleList="rounded-t-lg"
          className="p-2.5 max-h-[400px]"
          header={
            <div className="w-full flex flex-row">
              <NavLink
                to=""
                end
                className={({ isActive }) =>
                  clsx(
                    "w-1/2 flex justify-center font-medium text-lg focus:text-[#3A57E8]",
                    isActive && "text-[#3A57E8]"
                  )
                }
              >
                Doctors
              </NavLink>
              <NavLink
                to="feedback"
                className={({ isActive }) =>
                  clsx(
                    "w-1/2 flex justify-center font-medium text-lg focus:text-[#3A57E8]",
                    isActive && "text-[#3A57E8]"
                  )
                }
              >
                Feedback
              </NavLink>
            </div>
          }
        >
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </List>
        <NavLink
          to="feedback"
          onClick={() => setIsOpen(true)}
          className={clsx(
            "py-2 px-4 bg-[#3A57E8] rounded-b-lg w-full flex justify-center font-medium text-lg focus:text-[#3A57E8]"
          )}
        >
          <div className="flex flex-row justify-between items-center space-x-5">
            <PlusCircleIcon className="w-7 text-white" />
            <p className="font-bold text-lg text-white">Add Feedback</p>
          </div>
        </NavLink>
      </div>
      <Modal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        handleSubmit={handleSubmit}
        ratingRef={ratingRef}
        feedbackRef={feedbackRef}
      />
    </div>
  );
};
