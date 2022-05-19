import { Suspense, useEffect, useRef, useState } from "react";
import { List, UserCard } from "../../../../components";
import { NavLink, Outlet, useParams } from "react-router-dom";
import clsx from "clsx";
import Loader from "../../../../ui/loader/loader";
import { useDispatch, useSelector } from "react-redux";
import { getDoctorWithFeedback } from "../../../../redux/actions/doctor";
import { PlusCircleIcon } from "@heroicons/react/solid";
import { Modal } from "../../../../ui/modal/modal";
import { publicRequest } from "../../../../api/requestMethods";

export const DoctorProfileForPatient = () => {
  const { doctor } = useSelector(({ doctor }) => doctor);
  const [isOpen, setIsOpen] = useState(false);

  const dispatch = useDispatch();

  const { id } = useParams();

  const ratingRef = useRef();
  const feedbackRef = useRef();

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
      await publicRequest.post("/api/v1/feedback/doctor/give/" + id, data, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      });
    } catch (e) {
      console.log(e);
    }
    dispatch(getDoctorWithFeedback(id));

    setIsOpen(false);
  };

  useEffect(() => {
    console.log("useEffect");
    dispatch(getDoctorWithFeedback(id));
  }, [id, dispatch]);

  return (
    <div className="w-full space-y-4 max-w-4xl">
      {doctor.doctor ? (
        <>
          <UserCard userInformation={doctor.doctor.user} />
          <div>
            <List
              styleList="rounded-t-lg"
              className="shadow-md h-fit max-h-[450px]"
              header={
                <div className="w-full flex flex-row justify-between">
                  <NavLink
                    to=""
                    end
                    className={({ isActive }) =>
                      clsx(
                        "font-medium text-lg focus:text-[#3A57E8]",
                        isActive && "text-[#3A57E8]"
                      )
                    }
                  >
                    About Me
                  </NavLink>
                  <NavLink
                    to="feedback"
                    className={({ isActive }) =>
                      clsx(
                        "font-medium text-lg focus:text-[#3A57E8]",
                        isActive && "text-[#3A57E8]"
                      )
                    }
                  >
                    Feedback
                  </NavLink>
                  <NavLink
                    to="calendar"
                    className={({ isActive }) =>
                      clsx(
                        "font-medium text-lg focus:text-[#3A57E8]",
                        isActive && "text-[#3A57E8]"
                      )
                    }
                  >
                    Calendar
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
            feedbackRef={feedbackRef}
            ratingRef={ratingRef}
          />
        </>
      ) : (
        <Loader />
      )}
    </div>
  );
};
