import { useSelector } from "react-redux";
import Feedback from "../feedback";

export const Feedbacks = () => {
  const { feedbacks } = useSelector(({ doctor }) => doctor.doctor);
  console.log(feedbacks);
  return (
    <>
      {feedbacks.map((feedback) => (
        <Feedback feedback={feedback} />
      ))}
    </>
  );
};
