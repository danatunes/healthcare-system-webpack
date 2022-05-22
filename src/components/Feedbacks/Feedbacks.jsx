import { useSelector } from "react-redux";
import Feedback from "../feedback";
import { PencilAltIcon } from "@heroicons/react/outline";
import React from "react";

export const Feedbacks = ({ type }) => {
  const doctorFeedbacks = useSelector(({ doctor }) => doctor.doctor);
  const clinicFeedbacks = useSelector(({ clinic }) => clinic.feedbacks);

  console.log(clinicFeedbacks, "clinicFeedbacks");

  return (
    <div>
      {type === "doctor" ? (
        doctorFeedbacks.feedbacks.length !== 0 ? (
          doctorFeedbacks.feedbacks.map((feedback) => (
            <Feedback key={feedback.id} feedback={feedback} />
          ))
        ) : (
          <div className="w-full flex text-gray-400 flex-col p-10 items-center justify-center">
            Be the first to write feedback
            <PencilAltIcon className="w-11 text-gray-400" />
          </div>
        )
      ) : clinicFeedbacks.feedbacks.length !== 0 ? (
        clinicFeedbacks.feedbacks.map((feedback) => (
          <Feedback key={feedback.id} feedback={feedback} />
        ))
      ) : (
        <div className="w-full flex text-gray-400 flex-col p-10 items-center justify-center">
          Be the first to write feedback
          <PencilAltIcon className="w-11 text-gray-400" />
        </div>
      )}
    </div>
  );
};
