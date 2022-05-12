import { StarIcon } from "@heroicons/react/outline";

export const Feedback = () => {
  return (
    <div className="flex py-4 px-5 flex-col bg-white shadow-md rounded-lg mx-2 my-4">
      <div className="flex flex-row items-center space-x-4">
        <p className="font-medium text-base">Vin Diesel</p>
        <p className="font-normal text-sm">29.03.2022</p>
      </div>
      <div className="flex flex-row items-end">
        <p>
          orem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum
        </p>
        <div className="flex justify-end items-center flex-row space-x-1.5">
          <StarIcon className="text-[#3A57E8] w-5" />
          <p>4.5</p>
        </div>
      </div>
    </div>
  );
};
