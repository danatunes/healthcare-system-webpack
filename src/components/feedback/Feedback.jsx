import { StarIcon } from "@heroicons/react/outline";

export const Feedback = ({ feedback }) => {
  return (
    <div className="flex py-4 px-5 flex-col bg-white shadow-md rounded-lg mx-2 my-4">
      <div className="flex flex-row items-center space-x-4">
        <p className="font-medium text-base">
          {`${feedback.patient.user.firstName} ${feedback.patient.user.lastName}`}
        </p>
        <p className="font-normal text-sm">{feedback.date}</p>
      </div>
      <div className="flex flex-row items-end justify-between">
        <p>{feedback.text}</p>
        <div className="flex justify-end items-center flex-row space-x-1.5">
          <StarIcon className="text-[#3A57E8] w-5" />
          <p>{feedback.rate}</p>
        </div>
      </div>
    </div>
  );
};
