import { useSelector } from "react-redux";
import Feedback from "../feedback";
import { useState } from "react";

export const Feedbacks = ({type}) => {
    const  doctorFeedbacks  = useSelector(({ doctor }) => doctor.doctor);
    const  clinicFeedbacks  = useSelector(({ clinic }) => clinic.feedbacks);

  return (
    <div>
      {type === "doctor" ? (
        doctorFeedbacks.feedbacks.map((feedback) => (
          <Feedback feedback={feedback} />
        ))
      ) : (
        clinicFeedbacks.feedbacks.map((feedback) => (
          <Feedback feedback={feedback} />
        ))      )}
    </div>
  );
};
