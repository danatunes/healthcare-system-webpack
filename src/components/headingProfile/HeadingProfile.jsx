import clsx from "clsx";

export const HeadingProfile = ({ name, onClick, className }) => {
  return (
    <div>
      <h1
        className={clsx(className, "font-bold text-2xl w-fit")}
        onClick={onClick}
      >
        Welcome {name}
      </h1>
      <p className="font-normal text-gray-400 text-sm">
        Check the latest updates on your account
      </p>
    </div>
  );
};
