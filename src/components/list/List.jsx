import clsx from "clsx";

export const List = ({ children, header, className }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-4 space-y-3.5">
      {header}
      <div
        className={clsx(
          className,
          "space-y-4 bg-[#F8F9FD] rounded-xl max-h-[250px] overflow-y-auto"
        )}
      >
        {children}
      </div>
    </div>
  );
};
